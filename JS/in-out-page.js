document.addEventListener("DOMContentLoaded", () => {
    const inPageLayer = document.querySelector(".in-page");
    const navigationType = performance.getEntriesByType("navigation")[0]?.type;
    const isReload = navigationType === "reload";
    const isTransitioning = localStorage.getItem("pageTransitionActive") === "true";

    // Hapus token secepatnya
    localStorage.removeItem("pageTransitionActive");

    if (isTransitioning && !isReload) {
        // JIKA MASUK DARI PROSES TRANSISI:
        // Langsung tampilkan body tanpa delay karena layar sudah ditutup tirai cokelat (.in-page)
        document.body.classList.add("visible");
        if (inPageLayer) {
            inPageLayer.classList.add("jalan"); 
        }
    } else {
        // JIKA REFRESH / KETIK URL MANUAL:
        // Hancurkan tirai, langsung munculkan halaman dengan fade-in halus
        if (inPageLayer) {
            inPageLayer.style.display = "none";
        }
        document.body.classList.add("visible");
    }

    // INTERAKSI TOMBOL / LINK
    const links = document.querySelectorAll("a");
    links.forEach(link => {
        link.addEventListener("click", function(e) {
            const hrefAttr = this.getAttribute('href');
            if (!hrefAttr || hrefAttr === '#' || hrefAttr.startsWith('javascript:')) return; 

            const isLinkValid = this.className === "" || 
                               this.classList.contains("mobile-link") || 
                               this.classList.contains("mobile-sublink");

            if (isLinkValid) {
                e.preventDefault(); 
                e.stopPropagation(); 
                
                const targetUrl = this.href;
                const menu = document.getElementById('mobile-menu');
                const outPageLayer = document.querySelector(".out-page");
                const isMenuOpen = menu && !menu.classList.contains('translate-x-full');

                // Set penanda transisi untuk halaman tujuan
                localStorage.setItem("pageTransitionActive", "true");

                if (isMenuOpen) {
                    handleMobileNav(); 
                    setTimeout(() => { 
                        mulaiAnimasiKeluar(outPageLayer, targetUrl); 
                    }, 1); 
                } else {
                    mulaiAnimasiKeluar(outPageLayer, targetUrl);
                }
            }
        });
    });
});

function mulaiAnimasiKeluar(layer, url) {
    if (layer) {
        layer.classList.add("aktif"); 
    }
    // Tunggu 1 detik sampai layar tertutup penuh oleh cokelat, baru pindah total
    setTimeout(() => {
        window.location.href = url;
    }, 1000);
}