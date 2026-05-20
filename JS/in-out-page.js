document.addEventListener("DOMContentLoaded", () => {
    const inPageLayer = document.querySelector(".in-page");
    const navigationType = performance.getEntriesByType("navigation")[0]?.type;
    const isReload = navigationType === "reload";
    const isTransitioning = localStorage.getItem("pageTransitionActive") === "true";

    // Hapus token secepatnya
    localStorage.removeItem("pageTransitionActive");

    if (isTransitioning && !isReload) {
        // JIKA MASUK DARI PROSES TRANSISI:
        document.body.classList.add("visible");
        if (inPageLayer) {
            inPageLayer.classList.add("jalan"); 
        }
    } else {
        // JIKA REFRESH / KETIK URL MANUAL:
        if (inPageLayer) {
            inPageLayer.style.display = "none";
        }
        document.body.classList.add("visible");
    }

    // INTERAKSI TOMBOL / LINK
    const links = document.querySelectorAll("a");
    links.forEach(link => {
        link.addEventListener("click", function(e) {
            // FIX: Abaikan proses transisi jika yang diklik adalah tombol Back to Top
            if (this.id === "backToTop") return;

            const hrefAttr = this.getAttribute('href');
            
            // Validasi dasar
            if (!hrefAttr || hrefAttr === '#' || hrefAttr.startsWith('javascript:')) return; 

            // Mengabaikan link target="_blank"
            if (this.getAttribute('target') === '_blank') return;

            e.preventDefault(); 
            e.stopPropagation(); 
            
            const targetUrl = this.href;
            const menu = document.getElementById('mobile-menu');
            const outPageLayer = document.querySelector(".out-page");
            const isMenuOpen = menu && !menu.classList.contains('translate-x-full');

            // Set penanda transisi untuk halaman tujuan
            localStorage.setItem("pageTransitionActive", "true");

            if (isMenuOpen) {
                if (typeof handleMobileNav === "function") {
                    handleMobileNav(); 
                }
                setTimeout(() => { 
                    mulaiAnimasiKeluar(outPageLayer, targetUrl); 
                }, 1); 
            } else {
                mulaiAnimasiKeluar(outPageLayer, targetUrl);
            }
        });
    });
});

function mulaiAnimasiKeluar(layer, url) {
    if (layer) {
        layer.classList.add("aktif"); 
    }
    setTimeout(() => {
        window.location.href = url;
    }, 1000);
}