lucide.createIcons();

function handleMobileNav() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('translate-x-full');
}

function toggleMobileDropdown(button) {
    const parent = button.parentElement;
    const content = parent.querySelector('.mobile-dropdown-content');
    
    parent.classList.toggle('active');
    
    if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
    } else {
        content.classList.add('hidden');
    }
}

if (window.lucide) {
    lucide.createIcons();
}

window.addEventListener('scroll', function() {
    const nav = document.querySelector('.navbar');
    if (nav && window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else if (nav) {
        nav.classList.remove('scrolled');
    }
});
