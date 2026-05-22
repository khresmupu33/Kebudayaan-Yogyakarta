function handleMobileNav() {
    const menu = document.getElementById('mobile-menu');
    if (menu) menu.classList.toggle('translate-x-full');
}

// =================================================================
// MEMICU DROPDOWN HANYA SAAT TOMBOL PANAH DIKLIK (MOBILE)
// =================================================================
function toggleMobileDropdown(button) {
    if (window.innerWidth >= 768) return;

    const parent = button.closest('.mobile-dropdown');
    if (!parent) return;

    const content = parent.querySelector('.mobile-dropdown-content');
    const icon = parent.querySelector('.toggle-dropdown-btn svg, .toggle-dropdown-btn i');

    parent.classList.toggle('active');

    if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');

        if (icon) {
            icon.style.transform = 'rotate(180deg)';
            icon.style.transition = 'transform 0.3s ease';
        }

    } else {
        content.classList.add('hidden');

        if (icon) {
            icon.style.transform = 'rotate(0deg)';
        }
    }
}

document.addEventListener("DOMContentLoaded", function () {
    if (window.lucide) {
        lucide.createIcons();
    }

    // =================================================================
    // FIX TOTAL: BLOCK LINK UTAMA MENGGUNAKAN CAPTURING PHASE
    // =================================================================
    const mobileDropdowns = document.querySelectorAll('.mobile-dropdown');

    mobileDropdowns.forEach(dropdown => {
        const content = dropdown.querySelector('.mobile-dropdown-content');
        const mainLink = dropdown.querySelector('.mobile-link');
 if (mainLink) {

    mainLink.addEventListener('click', function(e) {

        if (window.innerWidth < 768) {

            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();

            // ambil ulang elemennya
            const parent = mainLink.closest('.mobile-dropdown');
            if (!parent) return;

            const content = parent.querySelector('.mobile-dropdown-content');
            const icon = parent.querySelector('.toggle-dropdown-btn svg, .toggle-dropdown-btn i');

            // toggle active
            parent.classList.toggle('active');

            // toggle dropdown
            if (content.classList.contains('hidden')) {

                content.classList.remove('hidden');

                if (icon) {
                    icon.style.transform = 'rotate(180deg)';
                    icon.style.transition = 'transform 0.3s ease';
                }

            } else {

                content.classList.add('hidden');

                if (icon) {
                    icon.style.transform = 'rotate(0deg)';
                }
            }

            return false;
        }

    }, true);
}

        // =================================================================
        // LOGIKA DESKTOP: TETAP MENGGUNAKAN HOVER AMAN (LAYAR >= 768px)
        // =================================================================
        dropdown.addEventListener('mouseenter', () => {
            if (window.innerWidth >= 768) {
                const currentIcon = dropdown.querySelector('.toggle-dropdown-btn svg, .toggle-dropdown-btn i');
                if (content) content.classList.remove('hidden');
                dropdown.classList.add('active');
                if (currentIcon) currentIcon.style.transform = 'rotate(180deg)';
            }
        });

        dropdown.addEventListener('mouseleave', () => {
            if (window.innerWidth >= 768) {
                const currentIcon = dropdown.querySelector('.toggle-dropdown-btn svg, .toggle-dropdown-btn i');
                if (content) content.classList.add('hidden');
                dropdown.classList.remove('active');
                if (currentIcon) currentIcon.style.transform = 'rotate(0deg)';
            }
        });
    });
});

window.addEventListener('scroll', function () {
    const nav = document.querySelector('.navbar');
    if (nav && window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else if (nav) {
        nav.classList.remove('scrolled');
    }
});