document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll("#wisataFilterGroup .filter-btn");
    const wisataCards = document.querySelectorAll("#wisataMosaikGrid .wisata-card");

    // Tiga variasi ukuran grid yang tersedia
    const daftarUkuran = ["size-standard", "size-wide", "size-tall"];

    function eksekusiPenyaringanDanKocokAcak(targetKategori) {
        let kartuAktif = [];

        // 1. Saring kartu berdasarkan kategori dan reset ukuran lamanya
        wisataCards.forEach(card => {
            const cardKategori = card.getAttribute("data-kategori");
            
            // Bersihkan kelas ukuran lama agar tidak menumpuk kaku
            card.classList.remove("size-standard", "size-wide", "size-tall");

            if (cardKategori === targetKategori) {
                card.classList.remove("is-hidden");
                kartuAktif.push(card); 
            } else {
                card.classList.add("is-hidden");
            }
        });

        // 2. Acak susunan ukuran khusus untuk kartu yang sedang tampil
        kartuAktif.forEach(card => {
            // Mengambil indeks acak dari panjang array (0 sampai 2)
            const indeksAcak = Math.floor(Math.random() * daftarUkuran.length);
            const ukuranTerpilih = daftarUkuran[indeksAcak];
            
            // Pasang kelas ukuran acak hasil kocokan baru
            card.classList.add(ukuranTerpilih);
        });
    }

    // Jalankan otomatis pertama kali untuk kategori "alam" saat halaman selesai dimuat
    eksekusiPenyaringanDanKocokAcak("alam");

    // Logika ketika tombol menu filter diklik oleh pengguna
    filterButtons.forEach(button => {
        button.addEventListener("click", function () {
            // Tukar posisi status aktif pada tombol filter secara visual
            filterButtons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");

            // Ambil nama target kategori yang dipilih
            const kategoriPilihan = this.getAttribute("data-target");
            
            // Jalankan ulang fungsi penyaringan dan pengacakan formasi grid
            eksekusiPenyaringanDanKocokAcak(kategoriPilihan);
        });
    });
});