lucide.createIcons();

function handleMobileNav() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('translate-x-full');
}
function toggleMobileDropdown(button) {
    const parent = button.parentElement;
    const content = parent.querySelector('.mobile-dropdown-content');
    
    // Toggle class active untuk animasi icon
    parent.classList.toggle('active');
    
    // Toggle hidden class
    if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
    } else {
        content.classList.add('hidden');
    }
}

// Pastikan Lucide Icon dirender ulang jika diperlukan
if (window.lucide) {
    lucide.createIcons();
}
window.addEventListener('scroll', function() {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});