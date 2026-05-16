
function toggleEventsSidebar() {
    const container = document.querySelector('.main-layout-container');
    
    // Ini untuk menghandle tampilan Desktop (Desktop defaultnya terbuka)
    container.classList.toggle('sidebar-closed');
    
    // Ini untuk menghandle tampilan HP (HP defaultnya tertutup)
    container.classList.toggle('sidebar-open');
}