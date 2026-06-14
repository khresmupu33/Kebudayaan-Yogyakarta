window.addEventListener("pageshow", (event) => {
    const inPageLayer = document.querySelector(".in-page");
    const outPageLayer = document.querySelector(".out-page");

    // 1. PENANGANAN BACK/FORWARD (BFCache)
    // Jangan gunakan display: none. Cukup hapus class agar transisi terbuka.
    if (event.persisted) {
        if (inPageLayer) inPageLayer.classList.remove("jalan");
        if (outPageLayer) outPageLayer.classList.remove("aktif");
        document.body.classList.add("visible");
        localStorage.removeItem("pageTransitionActive");
        return; 
    }

    // 2. LOGIKA TRANSISI MASUK
    const isTransitioning = localStorage.getItem("pageTransitionActive") === "true";
    localStorage.removeItem("pageTransitionActive");

    if (isTransitioning) {
        document.body.classList.add("visible");
        if (inPageLayer) {
            inPageLayer.classList.add("jalan");
        }
    } else {
        // Akses pertama kali/refresh
        document.body.classList.add("visible");
        if (inPageLayer) inPageLayer.classList.remove("jalan");
    }
});

// 2. Logika Navigasi: Menangani klik link untuk memicu animasi keluar
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("a");

    links.forEach(link => {
        link.addEventListener("click", function(e) {
            // Abaikan tombol Back to Top
            if (this.id === "backToTop") return;

            const hrefAttr = this.getAttribute('href');
            
            // Validasi: Abaikan link kosong, jangkar (#), javascript, atau target="_blank"
            if (!hrefAttr || hrefAttr === '#' || hrefAttr.startsWith('javascript:') || this.getAttribute('target') === '_blank') return;

            e.preventDefault();
            e.stopPropagation();

            const targetUrl = this.href;
            const menu = document.getElementById('mobile-menu');
            const outPageLayer = document.querySelector(".out-page");
            const isMenuOpen = menu && !menu.classList.contains('translate-x-full');

            // Tandai bahwa transisi sedang berjalan
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

// 3. Fungsi eksekusi animasi keluar
function mulaiAnimasiKeluar(layer, url) {
    if (layer) {
        layer.classList.add("aktif");
    }
    // Waktu tunggu harus sama dengan durasi animasi di CSS Anda
    setTimeout(() => {
        window.location.href = url;
    }, 1000);
}