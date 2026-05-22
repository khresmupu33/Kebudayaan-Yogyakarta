        // Memastikan seluruh ikon lucide di halaman dimuat sempurna
        lucide.createIcons();

        // 1. Inisialisasi Peta Utama DIY Jogja 
        const defaultCenter = [-7.8200, 110.4200];
        const defaultZoom = 10.5;

        const map = L.map('map', {
            zoomControl: false,       // Mematikan tombol default bawaan Leaflet
            scrollWheelZoom: false    // KUNCI: Scroll mouse murni menggulirkan web, tidak men-zoom peta
        }).setView(defaultCenter, defaultZoom);

        // 2. Load Base Map Gaya Gelap Muted dari CartoDB
        L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
        }).addTo(map);

        // 3. Inisialisasi Kelompok Layer Koleksi Destinasi
        const layers = {
            budaya: L.layerGroup().addTo(map),
            kuliner: L.layerGroup().addTo(map),
            alam: L.layerGroup().addTo(map),
            transportasi: L.layerGroup().addTo(map),
            akomodasi: L.layerGroup().addTo(map)
        };

        // 4. Kumpulan Objek Data Koordinat Wisata Daerah Istimewa Yogyakarta
        const tempatWisata = [
            { nama: "Keraton Ngayogyakarta Hadiningrat", kategori: "budaya", koordinat: [-7.8052, 110.3642], deskripsi: "Pusat eksistensi peradaban kebudayaan Jawa Kesultanan Yogyakarta Syah." },
            { nama: "Candi Prambanan", kategori: "budaya", koordinat: [-7.7520, 110.4914], deskripsi: "Kompleks candi Hindu terbesar sekaligus mahakarya megah abad ke-9 Masehi." },
            { nama: "Candi Ratu Boko", kategori: "budaya", koordinat: [-7.7705, 110.4894], deskripsi: "Situs reruntuhan istana kraton kuno berlatar pemandangan sunset menakjubkan." },
            { nama: "Taman Sari Water Castle", kategori: "budaya", koordinat: [-7.8098, 110.3594], deskripsi: "Situs pemandian kuno bersejarah tempat rekreasi keluarga sultan jaman dahulu." },
            { nama: "Kotagede Heritage Site", kategori: "budaya", koordinat: [-7.8276, 110.3994], deskripsi: "Kota tua peninggalan Mataram Islam abad ke-16, pusat pengrajin perak Jogja." },
            { nama: "Pasar Beringharjo & Malioboro", kategori: "kuliner", koordinat: [-7.7935, 110.3656], deskripsi: "Pusat transaksi batik, kuliner pecel, jajanan pasar pasar tradisional tertua." },
            { nama: "Gudeg Wijilan Yu Djum", kategori: "kuliner", koordinat: [-7.8045, 110.3678], deskripsi: "Sentra hidangan kuliner nangka muda manis autentik khas dapur Mataram Jogja." },
            { nama: "Kopi Joss Lik Man Tugu", kategori: "kuliner", koordinat: [-7.7885, 110.3641], deskripsi: "Angkringan legendaris pelopor sajian kopi unik arang membara menyala." },
            { nama: "Sate Klatak Pak Bari Imogiri", kategori: "kuliner", koordinat: [-7.8872, 110.3875], deskripsi: "Kuliner sate kambing muda khas Bantul yang dibakar unik menggunakan jeruji besi." },
            { nama: "Pantai Parangtritis", kategori: "alam", koordinat: [-8.0246, 110.3249], deskripsi: "Pantai mistis berpasir hitam selatan Jogja dengan gumuk pasir yang langka." },
            { nama: "Kawasan Wisata Kaliurang", kategori: "alam", koordinat: [-7.5947, 110.4457], deskripsi: "Resort alam dataran tinggi sejuk tepat di bawah kaki lava Gunung Merapi." },
            { nama: "Pantai Indrayanti (Pulang Sawal)", kategori: "alam", koordinat: [-8.1504, 110.6123], deskripsi: "Pantai berpasir putih eksotis dengan tebing karang megah di Gunungkidul." },
            { nama: "Goa Jomblang Cave", kategori: "alam", koordinat: [-8.0286, 110.6384], deskripsi: "Goa vertikal purba dengan fenomena pancaran cahaya surga menembus atap goa." },
            { nama: "Stasiun Yogyakarta (Tugu)", kategori: "transportasi", koordinat: [-7.7891, 110.3634], deskripsi: "Stasiun kereta api utama kelas besar simpul koneksi kereta jarak jauh dan KRL komuter." },
            { nama: "Stasiun Lempuyangan", kategori: "transportasi", koordinat: [-7.7900, 110.3752], deskripsi: "Stasiun sekunder pusat transit keberangkatan kereta api ekonomi antar provinsi." },
            { nama: "Bandara Internasional Yogyakarta (YIA)", kategori: "transportasi", koordinat: [-7.9001, 110.0571], deskripsi: "Infrastruktur gerbang udara modern pintu utama turis domestik & mancanegara." },
            { nama: "Terminal Giwangan", kategori: "transportasi", koordinat: [-7.8341, 110.3924], deskripsi: "Terminal bus induk tipe A terbesar penghubung rute AKAP lintas pulau Sumatera-Jawa-Bali." },
            { nama: "Yogyakarta Marriott Hotel", kategori: "akomodasi", koordinat: [-7.7599, 110.3992], deskripsi: "Akomodasi penginapan hotel bintang 5 premium mewah terintegrasi pusat perbelanjaan." },
            { nama: "The Phoenix Hotel Yogyakarta", kategori: "akomodasi", koordinat: [-7.7825, 110.3683], deskripsi: "Hotel warisan kolonial bersejarah tinggi yang memadukan arsitektur Eropa-Jawa." },
            { nama: "RSUP Dr. Sardjito", kategori: "akomodasi", koordinat: [-7.7686, 110.3736], deskripsi: "Rumah sakit pusat rujukan kesehatan umum terbesar wilayah DIY dan Jawa Tengah." }
        ];

        // 5. Membuat dan Memetakan Struktur Popup Kandungan Info Tempat
        tempatWisata.forEach(tempat => {
            const htmlPopup = `
                <div class="popup-box">
                    <span class="popup-category">${tempat.kategori}</span>
                    <h3 class="popup-title">${tempat.nama}</h3>
                    <p class="popup-desc">${tempat.deskripsi}</p>
                </div>
            `;
            const marker = L.marker(tempat.koordinat).bindPopup(htmlPopup);
            if (layers[tempat.kategori]) {
                marker.addTo(layers[tempat.kategori]);
            }
        });

        // 6. Menyalin Struktur Item Filter ke Drawer/Laci Mobile secara Otomatis
        const desktopControlsHTML = document.querySelector('.map-legend-control').innerHTML;
        const cutIndex = desktopControlsHTML.indexOf('<div class="mt-6 pt-6');
        const contentForMobile = cutIndex !== -1 ? desktopControlsHTML.substring(0, cutIndex) : desktopControlsHTML;
        const filteredMobileHTML = contentForMobile.replace('<div class="legend-title">Filter Destinasi</div>', '');
        document.getElementById('mobileLegendContainer').innerHTML = filteredMobileHTML;

        // 7. Event Listener untuk Navigasi Zoom Kustom (Versi Desktop)
        document.getElementById('customZoomIn').addEventListener('click', function () { map.zoomIn(); });
        document.getElementById('customZoomOut').addEventListener('click', function () { map.zoomOut(); });
        document.getElementById('customZoomReset').addEventListener('click', function () { map.setView(defaultCenter, defaultZoom); });

        // 8. Event Listener untuk Navigasi Zoom Kustom Melayang (Versi Mobile)
        document.getElementById('mobileZoomIn').addEventListener('click', function () { map.zoomIn(); });
        document.getElementById('mobileZoomOut').addEventListener('click', function () { map.zoomOut(); });
        document.getElementById('mobileZoomReset').addEventListener('click', function () { map.setView(defaultCenter, defaultZoom); });

        // 9. Logika Sinkronisasi Checkbox Terpusat (Desktop & Mobile)
        document.addEventListener('change', function (e) {
            if (e.target && e.target.classList.contains('sync-chk')) {
                const targetKategori = e.target.getAttribute('data-target');
                const isChecked = e.target.checked;

                const semuaCheckboxKategori = document.querySelectorAll(`input[data-target="${targetKategori}"]`);
                semuaCheckboxKategori.forEach(checkbox => {
                    checkbox.checked = isChecked;
                });

                if (isChecked) {
                    map.addLayer(layers[targetKategori]);
                } else {
                    map.removeLayer(layers[targetKategori]);
                }
            }
        });

        // 10. Mekanisme Kontrol Drawer / Laci Mobile Samping
        const kontainerPetaLayout = document.getElementById('kontainer_peta_layout');
        const btnTogglePeta = document.getElementById('togglePetaSidebar');

        btnTogglePeta.addEventListener('click', function (e) {
            e.stopPropagation();
            kontainerPetaLayout.classList.toggle('sidebar-open');

            if (kontainerPetaLayout.classList.contains('sidebar-open')) {
                btnTogglePeta.innerHTML = `<i data-lucide="x" class="w-5 h-5"></i>`;
            } else {
                btnTogglePeta.innerHTML = `<i data-lucide="chevron-left" class="w-6 h-6"></i>`;
            }
            lucide.createIcons();
        });

        map.on('click', function () {
            if (kontainerPetaLayout.classList.contains('sidebar-open')) {
                kontainerPetaLayout.classList.remove('sidebar-open');
                btnTogglePeta.innerHTML = `<i data-lucide="chevron-left" class="w-6 h-6"></i>`;
                lucide.createIcons();
            }
        });