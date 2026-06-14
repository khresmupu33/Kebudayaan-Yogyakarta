/**
 * Script Transisi Halaman (Page Transition)
 * Menggunakan pageshow untuk menangani BFCache browser
 */

// 1. Logika Utama: Berjalan saat halaman dimuat (termasuk saat Back/Forward)
window.addEventListener("pageshow", (event) => {
    // 1. Ambil elemen transisi
    const inPageLayer = document.querySelector(".in-page");
    const outPageLayer = document.querySelector(".out-page");

    // 2. KUNCI PERBAIKAN: Jika ini adalah navigasi Back/Forward, 
    // hapus semua class yang memblokir layar secepat mungkin
    if (event.persisted) {
        if (inPageLayer) {
            inPageLayer.classList.remove("jalan");
            inPageLayer.style.display = "none";
        }
        if (outPageLayer) {
            outPageLayer.classList.remove("aktif");
            outPageLayer.style.display = "none";
        }
        document.body.classList.add("visible");
        // Hapus token agar tidak ada sisa animasi
        localStorage.removeItem("pageTransitionActive");
        return; // Berhenti di sini, tidak perlu menjalankan logika transisi lagi
    }

    // 3. Logika transisi normal (hanya untuk klik link)
    const navigationType = performance.getEntriesByType("navigation")[0]?.type;
    const isReload = navigationType === "reload";
    const isTransitioning = localStorage.getItem("pageTransitionActive") === "true";

    localStorage.removeItem("pageTransitionActive");

    if (isTransitioning && !isReload) {
        document.body.classList.add("visible");
        if (inPageLayer) {
            inPageLayer.classList.add("jalan");
        }
    } else {
        if (inPageLayer) {
            inPageLayer.style.display = "none";
        }
        document.body.classList.add("visible");
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