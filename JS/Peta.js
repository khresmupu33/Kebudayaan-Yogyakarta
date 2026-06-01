// Memastikan seluruh ikon lucide di halaman dimuat sempurna
lucide.createIcons();

// 1. Inisialisasi Peta Utama DIY Jogja 
const defaultCenter = [-7.8200, 110.4200];
const defaultZoom = 10.5;

const map = L.map('map', {
    zoomControl: false,       // Mematikan tombol default bawaan Leaflet
    scrollWheelZoom: false    // KUNCI: Scroll mouse murni menggulirkan web, tidak men-zoom peta
}).setView(defaultCenter, defaultZoom);

// 2. Load Base Map Gaya Gelap Muted dari CartoDB (Kredit/Attribution Dihilangkan)
L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '' // Bagian cite kosong untuk menghilangkan teks kredit di pojok kanan bawah
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
    { nama: "Yogyakarta Marriott Hotel", kategori: "akomodasi", magnets: "akomodasi", koordinat: [-7.7599, 110.3992], deskripsi: "Akomodasi penginapan hotel bintang 5 premium mewah terintegrasi pusat perbelanjaan." },
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

// =========================================================================
// NAVIGASI DENGAN TITIK KOORDINAT (FLY TO WILAYAH KABUPATEN)
// =========================================================================
const dataTitikWilayah = {
    "kulonprogo":  { nama: "Kabupaten Kulon Progo", center: [-7.8500, 110.1600], zoom: 11 },
    "sleman":      { nama: "Kabupaten Sleman",      center: [-7.6800, 110.4000], zoom: 11 },
    "yogyakarta":  { nama: "Kota Yogyakarta",      center: [-7.8000, 110.3700], zoom: 13 },
    "bantul":      { nama: "Kabupaten Bantul",      center: [-7.9200, 110.3600], zoom: 11 },
    "gunungkidul": { nama: "Kabupaten Gunungkidul", center: [-8.0300, 110.6000], zoom: 11 }
};

// Fungsi Global pengarah peta (Fly To) sewaktu tombol HTML diklik
window.arahkannyaKeWilayah = function(key) {
    if (dataTitikWilayah[key]) {
        map.flyTo(dataTitikWilayah[key].center, dataTitikWilayah[key].zoom, {
            animate: true,
            duration: 1.5
        });
    }
};

// =========================================================================
// DATA GARIS REKAYASA SPASIAL DIY JOGJA (TERURUT - ANTI JALUR POTONG)
// HANYA RENDER DI DESKTOP LAYAR >= 768px
// =========================================================================
if (window.innerWidth >= 768) {
    const batasWilayahSempurna = {
        "yogyakarta": {
            nama: "Kota Yogyakarta",
            coords: [
                [-7.7692, 110.3612], [-7.7712, 110.3945], [-7.7950, 110.3980], 
                [-7.8256, 110.3956], [-7.8312, 110.3512], [-7.8120, 110.3480], 
                [-7.7945, 110.3456], [-7.7820, 110.3550]
            ]
        },
        "sleman": {
            nama: "Kabupaten Sleman",
            coords: [
                [-7.5412, 110.4412], [-7.5650, 110.4900], [-7.6010, 110.5180], [-7.6234, 110.5412],
                [-7.6650, 110.5150], [-7.7120, 110.5050], [-7.7423, 110.4934], [-7.7580, 110.4500],
                [-7.7612, 110.4212], [-7.7712, 110.3945], [-7.7692, 110.3612], [-7.7534, 110.3421],
                [-7.7912, 110.3312], [-7.7600, 110.3010], [-7.7212, 110.2104], [-7.6950, 110.2150],
                [-7.6534, 110.3121], [-7.5850, 110.3600]
            ]
        },
        "kulonprogo": {
            nama: "Kabupaten Kulon Progo",
            coords: [
                [-7.6711, 110.1256], [-7.6834, 110.1372], [-7.7021, 110.1741], [-7.7212, 110.2104],
                [-7.7600, 110.3010], [-7.7912, 110.3312], [-7.8112, 110.2215], [-7.8540, 110.2250],
                [-7.8934, 110.2111], [-7.9152, 110.1145], [-7.9230, 110.0520], [-7.8845, 110.0054],
                [-7.8420, 110.0120], [-7.7812, 110.0412], [-7.7400, 110.0580], [-7.6912, 110.0934]
            ]
        },
        "bantul": {
            nama: "Kabupaten Bantul",
            coords: [
                [-7.7912, 110.3312], [-7.7945, 110.3456], [-7.8120, 110.3480], [-7.8312, 110.3512],
                [-7.8256, 110.3956], [-7.7950, 110.3980], [-7.8212, 110.4412], [-7.8540, 110.4700],
                [-7.9145, 110.5012], [-7.9620, 110.4600], [-8.0212, 110.3412], [-8.0150, 110.2900],
                [-8.0123, 110.2612], [-7.9520, 110.2200], [-7.8934, 110.2111], [-7.8540, 110.2250],
                [-7.8112, 110.2215]
            ]
        },
        "gunungkidul": {
            nama: "Kabupaten Gunungkidul",
            coords: [
                [-7.7423, 110.4934], [-7.7850, 110.5800], [-7.8212, 110.7212], [-7.8640, 110.8100],
                [-7.9123, 110.8412], [-7.9850, 110.8500], [-8.1234, 110.8345], [-8.1812, 110.7012],
                [-8.1412, 110.5412], [-8.0650, 110.4200], [-8.0212, 110.3412], [-7.9620, 110.4600],
                [-7.9145, 110.5012], [-7.8540, 110.4700], [-7.8212, 110.4412], [-7.7423, 110.4934]
            ]
        }
    };

    // Render Poligon Bersih Tanpa Silang ke Peta
    Object.keys(batasWilayahSempurna).forEach(key => {
        const dataWilayah = batasWilayahSempurna[key];
        L.polygon(dataWilayah.coords, {
            color: '#d4af37',       // Garis pembatas elegan emas Mataram
            weight: 2,
            fillColor: 'rgba(212, 175, 55, 0.02)',
            fillOpacity: 0.15
        }).bindTooltip(dataWilayah.nama, { sticky: true }).addTo(map);
    });
}

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