document.addEventListener("DOMContentLoaded", function () {
    const nodeCards = document.querySelectorAll(".philosophy-node-card");
    const dynamicFrame = document.getElementById("philosophyDynamicFrame");
    const targetImg = document.getElementById("philosophyTargetImg");

    // Flag penanda apakah ada kartu yang sedang diklik/dikunci permanen
    let isLocked = false;

    // Fungsi pusat untuk mengubah gambar dan mengaktifkan animasi frame
    function aktifkanPilar(cardElement) {
        nodeCards.forEach(c => c.classList.remove("active"));
        cardElement.classList.add("active");

        const newImgSrc = cardElement.getAttribute("data-img");
        targetImg.setAttribute("src", newImgSrc);

        dynamicFrame.classList.add("lift-up");
    }

    // Fungsi untuk mengembalikan tampilan ke default (Keraton aktif)
    function resetKeDefault() {
        if (isLocked) return; // Jika status dikunci karena klik, batalkan reset!

        nodeCards.forEach(c => c.classList.remove("active"));
        
        const pusatCard = document.querySelector('[data-node="pusat"]');
        if (pusatCard) {
            pusatCard.classList.add("active");
            targetImg.setAttribute("src", pusatCard.getAttribute("data-img"));
        }
        
        dynamicFrame.classList.remove("lift-up");
    }

    nodeCards.forEach(card => {
        // 1. KETIKA DI-HOVER (Kursor Masuk)
        card.addEventListener("mouseenter", function () {
            // Jika ada kartu yang diklik permanen, abaikan efek hover sementara
            if (isLocked) return; 
            aktifkanPilar(this);
        });

        // 2. KETIKA UN-HOVER (Kursor Keluar)
        card.addEventListener("mouseleave", function () {
            resetKeDefault();
        });

        // 3. KETIKA DIKLIK (Mengunci Posisi Kartu)
        card.addEventListener("click", function (e) {
            e.stopPropagation(); // Mencegah bentrokan event
            
            // Kunci status, jalankan fungsi aktif secara permanen
            isLocked = true; 
            aktifkanPilar(this);
            
            // Tambahkan kelas penanda visual di HTML (opsional jika dibutuhkan di CSS)
            nodeCards.forEach(c => c.classList.remove("is-clicked"));
            this.classList.add("is-clicked");
        });
    });

    // 4. RESET JIKA PENGGUNA KLIK DI LUAR AREA KARTU (Klik area kosong seksi)
    document.getElementById("jogja-philosophy-section").addEventListener("click", function () {
        isLocked = false; // Buka kunci
        nodeCards.forEach(c => c.classList.remove("is-clicked"));
        resetKeDefault();
    });
});