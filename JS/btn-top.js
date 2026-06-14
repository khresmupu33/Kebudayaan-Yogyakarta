window.addEventListener('scroll', () => {
    const toTopBtn = document.getElementById('backToTop');
    const footer = document.querySelector('footer'); // Pastikan tag HTML footer Anda menggunakan tag <footer>
    
    // 1. Logika Memunculkan Tombol (Akan muncul jika scroll lebih dari 400px)
    if (window.scrollY > 400) {
        toTopBtn.classList.add('show');
    } else {
        toTopBtn.classList.remove('show');
    }

    // 2. Logika Berhenti di Atas Footer
    if (footer) {
        // Mendapatkan jarak top footer dari ujung layar atas
        const footerPosition = footer.getBoundingClientRect().top;
        // Hitung batas ruang layar tersisa di bawah
        const windowHeight = window.innerHeight;

        // Jika jarak top footer sudah mendekati area bawah layar (dikurangi batas bottom tombol)
        if (footerPosition < windowHeight - 75) { 
            toTopBtn.classList.add('sticky-footer');
            // Menempelkan posisi tombol secara absolut tepat di atas pembatas footer
            toTopBtn.style.top = (window.pageYOffset + footerPosition - 75) + 'px';
            toTopBtn.style.position = 'absolute';
        } else {
            toTopBtn.classList.remove('sticky-footer');
            toTopBtn.style.position = 'fixed';
            toTopBtn.style.top = 'auto'; // Reset kembali ke default bottom CSS
        }
    }
});
// Pantau perubahan pada container
const container = document.querySelector('.main-layout-container');
const btnToTop = document.querySelector('.btn-to-top');

const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class' && window.innerWidth < 768) {
            // Jika container memiliki class 'sidebar-open'
            if (container.classList.contains('sidebar-open')) {
                btnToTop.style.display = 'none'; // Sembunyikan
            } else {
                btnToTop.style.display = 'flex'; // Munculkan kembali
            }
        }
    });
});

// Mulai memantau perubahan class pada container
if (container && btnToTop) {
    observer.observe(container, { attributes: true });
}