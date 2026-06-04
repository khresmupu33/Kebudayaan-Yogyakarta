document.addEventListener("DOMContentLoaded", function () {
    // 1. Inisialisasi Icon Lucide
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // 2. Efek Spotlight (Cahaya ngikutin kursor di card tertentu biar kelihatan pro banget)
    const cardInfo = document.querySelector('.card-info');
    if (cardInfo) {
        cardInfo.addEventListener('mousemove', (e) => {
            const rect = cardInfo.getBoundingClientRect();
            const x = e.clientX - rect.left; // Posisi X kursor dalam kotak
            const y = e.clientY - rect.top;  // Posisi Y kursor dalam kotak
            
            // Set variabel CSS kustom
            cardInfo.style.setProperty('--mouse-x', `${x}px`);
            cardInfo.style.setProperty('--mouse-y', `${y}px`);
        });
    }

    // 3. Animasi Angka Berhitung (Counting Stats)
    const counters = document.querySelectorAll('.counter');
    
    // Konfigurasi Intersection Observer (Mendeteksi pas layar di-scroll ke bagian statistik)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 // Animasi jalan pas setengah kotak kelihatan di layar
    };

    const countObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = +counter.getAttribute('data-target'); // Ambil angka target
                
                // Durasi animasi (ms)
                const duration = 2000; 
                const frameRate = 1000 / 60; // 60 fps
                const totalFrames = Math.round(duration / frameRate);
                const increment = target / totalFrames;
                
                let current = 0;
                
                const updateCounter = setInterval(() => {
                    current += increment;
                    
                    if (current >= target) {
                        counter.innerText = target;
                        clearInterval(updateCounter);
                    } else {
                        counter.innerText = Math.ceil(current);
                    }
                }, frameRate);
                
                // Berhenti mengamati elemen ini biar ga ngulang animasinya
                observer.unobserve(counter);
            }
        });
    }, observerOptions);

    // Tempelkan observer ke semua angka
    counters.forEach(counter => {
        countObserver.observe(counter);
    });
});
