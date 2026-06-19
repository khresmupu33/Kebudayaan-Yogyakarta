window.addEventListener("pageshow", (event) => {
    const inPageLayer = document.querySelector(".in-page");
    const outPageLayer = document.querySelector(".out-page");

    // 1. PENANGANAN BACK/FORWARD (BFCache)
    if (event.persisted) {
        if (inPageLayer) inPageLayer.classList.remove("jalan");
        if (outPageLayer) outPageLayer.classList.remove("aktif");
        document.body.classList.add("visible");
        localStorage.removeItem("pageTransitionActive");
        enableScroll(); // Pastikan scroll aktif kembali
        return; 
    }

    // 2. LOGIKA TRANSISI MASUK
    const isTransitioning = localStorage.getItem("pageTransitionActive") === "true";
    localStorage.removeItem("pageTransitionActive");

    if (isTransitioning) {
        document.body.classList.add("visible");
        if (inPageLayer) {
            disableScroll(); // Matikan fungsi scroll saat masuk
            inPageLayer.classList.add("jalan");

            // Aktifkan kembali setelah animasi masuk selesai (sesuaikan 1000ms dengan CSS)
            setTimeout(() => {
                enableScroll();
            }, 1000); 
        }
    } else {
        document.body.classList.add("visible");
        if (inPageLayer) inPageLayer.classList.remove("jalan");
        enableScroll();
    }
});

// 2. Logika Navigasi: Menangani klik link untuk memicu animasi keluar
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("a");

    links.forEach(link => {
        link.addEventListener("click", function(e) {
            if (this.id === "backToTop") return;

            const hrefAttr = this.getAttribute('href');
            if (!hrefAttr || hrefAttr === '#' || hrefAttr.startsWith('javascript:') || this.getAttribute('target') === '_blank') return;

            e.preventDefault();
            e.stopPropagation();

            const targetUrl = this.href;
            const menu = document.getElementById('mobile-menu');
            const outPageLayer = document.querySelector(".out-page");
            const isMenuOpen = menu && !menu.classList.contains('translate-x-full');

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
        disableScroll(); // Matikan fungsi scroll saat keluar
        layer.classList.add("aktif");
    }
    setTimeout(() => {
        window.location.href = url;
    }, 1000);
}

// --- FUNGSI UNTUK MEMATIKAN FUNGSI SCROLL (TANPA MENGHILANGKAN SCROLLBAR) ---
function preventDefault(e) {
    e.preventDefault();
}

// Menangani tombol keyboard seperti ArrowUp, ArrowDown, Spacebar, PageUp, PageDown
function preventDefaultForScrollKeys(e) {
    const keys = { 32: 1, 33: 1, 34: 1, 35: 1, 36: 1, 37: 1, 38: 1, 39: 1, 40: 1 };
    if (keys[e.keyCode]) {
        e.preventDefault();
        return false;
    }
}

function disableScroll() {
    // Matikan scroll mouse / trackpad
    window.addEventListener('wheel', preventDefault, { passive: false });
    // Matikan scroll swipe di HP/Mobile
    window.addEventListener('touchmove', preventDefault, { passive: false });
    // Matikan scroll keyboard
    window.addEventListener('keydown', preventDefaultForScrollKeys, { passive: false });
}

function enableScroll() {
    // Kembalikan fungsi scroll seperti semula
    window.removeEventListener('wheel', preventDefault, { passive: false });
    window.removeEventListener('touchmove', preventDefault, { passive: false });
    window.removeEventListener('keydown', preventDefaultForScrollKeys, { passive: false });
}