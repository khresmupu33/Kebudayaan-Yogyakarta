// 1. Fungsi Buka/Tutup Menu Mobile
function handleMobileNav() {
    const menu = document.getElementById('mobile-menu');
    if (!menu) return;

    const isHidden = menu.classList.contains('translate-x-full');

    if (isHidden) {
        menu.classList.remove('translate-x-full');
        menu.classList.add('translate-x-0');
        document.body.style.overflow = 'hidden'; 
    } else {
        menu.classList.remove('translate-x-0');
        menu.classList.add('translate-x-full');
        document.body.style.overflow = 'auto';
        
        // Reset dropdown di dalam menu mobile saat ditutup
        document.querySelectorAll('#mobile-menu .dropdown-content').forEach(d => d.classList.add('hidden'));
        document.querySelectorAll('#mobile-menu .transition-transform').forEach(i => i.style.transform = 'rotate(0deg)');
    }
}

// 2. Fungsi Dropdown (Desktop & Mobile)
function toggleDropdown(event, targetId, iconId) {
    event.stopPropagation();
    const target = document.getElementById(targetId);
    const icon = document.getElementById(iconId);

    // Tutup dropdown lain yang setingkat (Accordion)
    const container = event.target.closest('.flex-col') || event.target.closest('.md\\:flex');
    container.querySelectorAll('.dropdown-content').forEach(d => {
        if (d.id !== targetId) d.classList.add('hidden');
    });

    const isHidden = target.classList.toggle('hidden');
    if (icon) {
        icon.style.transform = isHidden ? 'rotate(0deg)' : 'rotate(180deg)';
    }
}

// 3. Klik di luar untuk menutup dropdown desktop
window.addEventListener('click', function(e) {
    if (!e.target.closest('.dropdown-parent')) {
        document.querySelectorAll('.md\\:flex .dropdown-content').forEach(d => d.classList.add('hidden'));
        document.querySelectorAll('.md\\:flex .transition-transform').forEach(i => i.style.transform = 'rotate(0deg)');
    }
});

// Inisialisasi Lucide
lucide.createIcons();