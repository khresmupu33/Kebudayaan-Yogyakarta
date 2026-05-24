function switchHistoryTab(tabName) {
    // 1. Ambil semua elemen konten tab dan tombol tab
    const contents = document.querySelectorAll('.history-tab-content');
    const buttons = document.querySelectorAll('.tab-btn');

    // 2. Sembunyikan semua konten tab terlebih dahulu
    contents.forEach(content => {
        content.classList.remove('active-content');
    });

    // 3. Matikan status kelas active pada seluruh tombol
    buttons.forEach(btn => {
        btn.classList.remove('active');
    });

    // 4. Aktifkan konten dan tombol yang dipilih pengguna secara spesifik
    if (tabName === 'cikabakal') {
        document.getElementById('konten-cikabakal').classList.add('active-content');
        buttons[0].classList.add('active');
    } else if (tabName === 'raja') {
        document.getElementById('konten-raja').classList.add('active-content');
        buttons[1].classList.add('active');
    }

    // Optional: Menggulung halaman kembali ke area atas linimasa dengan halus saat berpindah menu
    const targetElement = document.querySelector('.history-tabs-container');
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}