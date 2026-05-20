function handleMobileNav() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('translate-x-full');
}

// Fungsi toggle klik asli tetap dipertahankan agar tidak error jika dipanggil HTML
function toggleMobileDropdown(button) {
    const parent = button.closest('.mobile-dropdown');
    if (!parent) return;
    
    const content = parent.querySelector('.mobile-dropdown-content');
    const icon = parent.querySelector('button i'); // Ambil icon di dalam button parent
    
    parent.classList.toggle('active');
    
    if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        if(icon) icon.style.transform = 'rotate(180deg)';
    } else {
        content.classList.add('hidden');
        if(icon) icon.style.transform = 'rotate(0deg)';
    }
}

// Memastikan inisialisasi icon lucide berjalan aman & MENAMBAHKAN HOVER DROPDOWN
document.addEventListener("DOMContentLoaded", function() {
    if (window.lucide) {
        lucide.createIcons();
    }

    // ==========================================
    // LOGIKA HOWER DROPDOWN MOBILE (BARU)
    // ==========================================
    const mobileDropdowns = document.querySelectorAll('.mobile-dropdown');

    mobileDropdowns.forEach(dropdown => {
        const content = dropdown.querySelector('.mobile-dropdown-content');
        const icon = dropdown.querySelector('button i');

        if (!content) return;

        // Saat Jari Menyentuh / Kursor Diatas Elemen (Hover Masuk)
        dropdown.addEventListener('mouseenter', () => {
            dropdown.classList.add('active');
            content.classList.remove('hidden');
            if (icon) icon.style.transform = 'rotate(180deg)';
        });

        // Dukungan tambahan untuk layar sentuh HP (Touch Event)
        dropdown.addEventListener('touchstart', (e) => {
            // Cek jika yang ditekuk adalah bagian utama, bukan link di dalam dropdown
            if (!e.target.closest('.mobile-dropdown-content')) {
                if (content.classList.contains('hidden')) {
                    dropdown.classList.add('active');
                    content.classList.remove('hidden');
                    if (icon) icon.style.transform = 'rotate(180deg)';
                } else {
                    dropdown.classList.remove('active');
                    content.classList.add('hidden');
                    if (icon) icon.style.transform = 'rotate(0deg)';
                }
            }
        }, { passive: true });

        // Saat Jari Menjauh / Kursor Keluar dari Elemen (Hover Keluar)
        dropdown.addEventListener('mouseleave', () => {
            dropdown.classList.remove('active');
            content.classList.add('hidden');
            if (icon) icon.style.transform = 'rotate(0deg)';
        });
    });
});

window.addEventListener('scroll', function() {
    const nav = document.querySelector('.navbar');
    if (nav && window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else if (nav) {
        nav.classList.remove('scrolled');
    }
});