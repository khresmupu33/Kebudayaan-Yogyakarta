document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("a");

    links.forEach(link => {
        link.addEventListener("click", function(e) {
            // Abaikan link anchor kosong atau link dropdown biasa yang cuma tanda '#'
            const hrefAttr = this.getAttribute('href');
            if (!hrefAttr || hrefAttr === '#' || hrefAttr.startsWith('javascript:')) {
                return; 
            }

            // ATURAN VALIDASI:
            // 1. Link desktop (tidak punya class sama sekali: link.className === "")
            // 2. ATAU Link mobile (punya class 'mobile-link' atau 'mobile-sublink')
            const isLinkValid = this.className === "" || 
                               this.classList.contains("mobile-link") || 
                               this.classList.contains("mobile-sublink");

            if (isLinkValid) {
                e.preventDefault(); // Kunci halaman! Tahan browser agar tidak pindah instan
                e.stopPropagation(); // Amankan dari benturan event ganda
                
                const targetUrl = this.href;
                const menu = document.getElementById('mobile-menu');
                const outPageLayer = document.querySelector(".out-page");

                // Logika Deteksi: Apakah menu mobile saat ini sedang aktif/terbuka?
                const isMenuOpen = menu && !menu.classList.contains('translate-x-full');

                if (isMenuOpen) {
                    
                    // TAHAP 1: Tutup menu navigasi dulu memanfaatkan fungsi asli milikmu
                    handleMobileNav(); 

                    // TAHAP 2: Beri jeda diam 5 detik penuh (5000ms) setelah menu mulai menutup
                    setTimeout(() => {
                        
                        // TAHAP 3: Jalankan tirai animasi cokelat (durasi 1 detik)
                        mulaiAnimasiKeluar(outPageLayer, targetUrl);

                    }, 1); // <-- Lock Angka Jeda 5 Detik

                } else {
                    // LOGIKA DESKTOP: Jika menu sedang tutup, langsung sikat animasi cokelat
                    mulaiAnimasiKeluar(outPageLayer, targetUrl);
                }
            }
        });
    });
});

// Fungsi pengeksekusi lapisan animasi keluar
function mulaiAnimasiKeluar(layer, url) {
    if (layer) {
        layer.style.display = "block";
        layer.classList.add("aktif"); // Memulai animasi CSS .out-page meluncur horizontal
    }
    
    // TAHAP 4: Tunggu 1 detik sampai tirai cokelat menutup layar penuh, baru pindah halaman
    setTimeout(() => {
        window.location.href = url;
    }, 1000);
}