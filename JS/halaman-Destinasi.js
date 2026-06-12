document.addEventListener("DOMContentLoaded", function () {
    // Pastikan ID selector sesuai dengan ID di HTML Anda
    const filterButtons = document.querySelectorAll("#wisataFilterGroup .filter-btn");
    const wisataCards = document.querySelectorAll("#wisataMosaikGrid .wisata-card");

    filterButtons.forEach(button => {
        button.addEventListener("click", function () {
            // 1. Reset visual tombol (hapus active dari semua, tambah ke yang diklik)
            filterButtons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");

            // 2. Ambil kategori yang ditargetkan
            const target = this.getAttribute("data-target");

            // 3. Filter kartu
            wisataCards.forEach(card => {
                const cardKategori = card.getAttribute("data-kategori");

                // Jika target adalah "all" (opsional) atau sesuai kategori
                if (target === "all" || cardKategori === target) {
                    card.classList.remove("is-hidden");
                    
                    // Opsional: Berikan sedikit efek fade in saat kartu muncul
                    card.style.opacity = "0";
                    setTimeout(() => {
                        card.style.opacity = "1";
                        card.style.transition = "opacity 0.5s ease";
                    }, 50);
                } else {
                    card.classList.add("is-hidden");
                }
            });
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll("#wisataFilterGroup .filter-btn");
    const grid = document.querySelector("#wisataMosaikGrid");
    // Ambil SEMUA kartu dan simpan dalam array agar bisa diacak posisinya
    const wisataCards = Array.from(document.querySelectorAll("#wisataMosaikGrid .wisata-card"));

    // Fungsi utama untuk menyaring DAN mengacak posisi
    function filterDanAcak(targetKategori) {
        // 1. Acak urutan array kartu menggunakan Fisher-Yates Shuffle
        for (let i = wisataCards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [wisataCards[i], wisataCards[j]] = [wisataCards[j], wisataCards[i]];
        }

        // 2. Terapkan urutan baru tersebut ke dalam HTML (grid)
        wisataCards.forEach(card => {
            grid.appendChild(card); // Ini yang membuat posisinya berubah secara fisik
        });

        // 3. Logika Filter (tampilkan/sembunyikan)
        wisataCards.forEach(card => {
            const cardKategori = card.getAttribute("data-kategori");
            
            // Logika: Jika target 'all' atau kategori cocok, tampilkan. Jika tidak, sembunyikan.
            if (targetKategori === "all" || cardKategori === targetKategori) {
                card.classList.remove("is-hidden");
            } else {
                card.classList.add("is-hidden");
            }
        });
    }

    // --- LOGIKA URL PARAMETER (Deteksi dari halaman lain) ---
    const urlParams = new URLSearchParams(window.location.search);
    const filterFromUrl = urlParams.get('filter') || 'all'; 

    // Jalankan filter pertama kali saat halaman dimuat
    filterDanAcak(filterFromUrl);

    // Update visual tombol aktif
    filterButtons.forEach(btn => {
        btn.classList.remove("active");
        if (btn.getAttribute("data-target") === filterFromUrl) btn.classList.add("active");
    });

    // Event Listener Klik Tombol
    filterButtons.forEach(button => {
        button.addEventListener("click", function () {
            filterButtons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");
            filterDanAcak(this.getAttribute("data-target"));
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("wisataSearch");
    const suggestionBox = document.getElementById("suggestionBox");
    const grid = document.querySelector("#wisataMosaikGrid");
    const filterButtons = document.querySelectorAll(".filter-btn");
    const wisataCards = Array.from(document.querySelectorAll(".wisata-card"));
    
    // Ambil semua judul
    const allTitles = wisataCards.map(c => c.querySelector(".wisata-title").innerText);

    function scrollToGrid() {
        const headerOffset = 130;
        const elementPosition = grid.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top: elementPosition - headerOffset, behavior: "smooth" });
    }

    function showSuggestions(list) {
        suggestionBox.innerHTML = "";
        list.slice(0, 3).forEach(item => {
            const div = document.createElement("div");
            div.className = "suggestion-item";
            div.innerText = item;
            div.onclick = () => {
                searchInput.value = item;
                suggestionBox.innerHTML = "";
                filterCards(document.querySelector(".filter-btn.active").dataset.target, item);
                scrollToGrid();
            };
            suggestionBox.appendChild(div);
        });
    }

    function filterCards(target, query = "") {
        wisataCards.forEach(card => {
            const cat = card.dataset.kategori;
            const title = card.querySelector(".wisata-title").innerText.toLowerCase();
            const match = (target === "all" || cat === target) && title.includes(query.toLowerCase());
            card.style.display = match ? "block" : "none";
        });
    }

    // Rekomendasi acak saat klik input
    searchInput.addEventListener("focus", () => {
        const random = allTitles.sort(() => 0.5 - Math.random()).slice(0, 3);
        showSuggestions(random);
    });

    // Pencarian saat mengetik
    searchInput.addEventListener("input", (e) => {
        const val = e.target.value.toLowerCase();
        if(!val) { suggestionBox.innerHTML = ""; return; }
        showSuggestions(allTitles.filter(t => t.toLowerCase().includes(val)));
    });

    // Enter untuk scroll
    searchInput.addEventListener("keypress", (e) => {
        if (e.key === 'Enter') {
            filterCards(document.querySelector(".filter-btn.active").dataset.target, searchInput.value);
            scrollToGrid();
            suggestionBox.innerHTML = "";
        }
    });

    // Sembunyi saat klik di luar
    document.addEventListener("click", (e) => {
        if (!searchInput.contains(e.target)) suggestionBox.innerHTML = "";
    });
    // --- Event Klik Filter ---
filterButtons.forEach(button => {
    button.addEventListener("click", function () {
        // 1. Reset visual tombol
        filterButtons.forEach(btn => btn.classList.remove("active"));
        this.classList.add("active");
        
        // 2. Jalankan logika filter (tampilkan/sembunyikan kartu)
        const target = this.getAttribute("data-target");
        filterCards(target, searchInput.value); // Pastikan fungsi filterCards terdefinisi
        
        // 3. Panggil fungsi Scroll Otomatis (INI YANG MEMBUATNYA TETAP ADA)
        scrollToGrid();
    });
});
});