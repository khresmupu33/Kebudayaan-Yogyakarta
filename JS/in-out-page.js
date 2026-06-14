/**
 * Script Transisi Halaman (Final - Optimized)
 */

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

// 3. INTERAKSI LINK & TRANSISI KELUAR
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("a");
    const outPageLayer = document.querySelector(".out-page");

    links.forEach(link => {
        link.addEventListener("click", function(e) {
            if (this.id === "backToTop") return;
            const href = this.getAttribute('href');
            
            if (!href || href === '#' || href.startsWith('javascript:') || this.target === '_blank') return;

            e.preventDefault();
            e.stopPropagation();

            localStorage.setItem("pageTransitionActive", "true");

            // Trigger animasi keluar
            if (outPageLayer) {
                outPageLayer.classList.add("aktif");
            }
            
            // Tunggu 800ms agar animasi terlihat sebelum pindah halaman
            setTimeout(() => {
                window.location.href = this.href;
            }, 800);
        });
    });
});