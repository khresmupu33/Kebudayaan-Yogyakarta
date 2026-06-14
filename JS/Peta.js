// Memastikan seluruh ikon lucide di halaman dimuat sempurna
lucide.createIcons();

// 1. Inisialisasi Peta Utama DIY Jogja 
const defaultCenter = [-7.8200, 110.4200];
const defaultZoom = 10.5;

const map = L.map('map', {
    zoomControl: false,
    scrollWheelZoom: false
}).setView(defaultCenter, defaultZoom);

L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: ''
}).addTo(map);

const layers = {
    budaya: L.layerGroup().addTo(map),
    sejarah: L.layerGroup().addTo(map),
    kuliner: L.layerGroup().addTo(map),
    alam: L.layerGroup().addTo(map),
    transportasi: L.layerGroup().addTo(map),
    akomodasi: L.layerGroup().addTo(map),
    fasilitas: L.layerGroup().addTo(map)
};

const tempatWisata = [
    // WISATA ALAM
    { id: "merapi", nama: "Lava Tour Merapi", kategori: "alam", koordinat: [-7.5947, 110.4457], deskripsi: "Petualangan ekstrem jalur lahar dingin." },
    { id: "parangtritis", nama: "Pantai Parangtritis", kategori: "alam", koordinat: [-8.0246, 110.3249], deskripsi: "Pantai ikonik pesisir selatan." },
    { id: "heha", nama: "HeHa Sky View", kategori: "alam", koordinat: [-7.8500, 110.4500], deskripsi: "Lanskap perbukitan kapur Gunungkidul." },
    { id: "kalibiru", nama: "Puncak Kalibiru", kategori: "alam", koordinat: [-7.8100, 110.1200], deskripsi: "Hutan pegunungan Menoreh." },

    // WISATA SEJARAH
    { id: "keraton", nama: "Keraton Ngayogyakarta Hadiningrat", kategori: "sejarah", koordinat: [-7.8052, 110.3642], deskripsi: "Pusat eksistensi peradaban kebudayaan Jawa." },
    { id: "tamansari", nama: "Istana Air Taman Sari", kategori: "sejarah", koordinat: [-7.8098, 110.3594], deskripsi: "Situs reruntuhan pemandian sultan." },
    { id: "vredeburg", nama: "Benteng Vredeburg", kategori: "sejarah", koordinat: [-7.7950, 110.3660], deskripsi: "Situs saksi bisu kolonialisme." },
    { id: "kotagede", nama: "Situs Tua Kotagede", kategori: "sejarah", koordinat: [-7.8276, 110.3994], deskripsi: "Kota tua pusat kerajinan perak." },

    // WISATA BUDAYA
    { id: "malioboro", nama: "Nadi Budaya Malioboro", kategori: "budaya", koordinat: [-7.7935, 110.3656], deskripsi: "Poros sumbu imajiner tempat bertemunya tradisi." },
    { id: "wijilan", nama: "Sentra Gudeg Wijilan", kategori: "budaya", koordinat: [-7.8045, 110.3678], deskripsi: "Kampung kuliner tradisional gudeg." },
    { id: "beringharjo", nama: "Pasar Beringharjo", kategori: "budaya", koordinat: [-7.7940, 110.3660], deskripsi: "Pusat transaksi budaya dan batik." },
    { id: "affandi", nama: "Museum Affandi", kategori: "budaya", koordinat: [-7.7800, 110.3900], deskripsi: "Kompleks rumah kubah maestro seni." },

    // EVENT & LOKASI KHUSUS
    { id: "prambanan", nama: "Candi Prambanan (Keroncong Plesiran)", kategori: "budaya", koordinat: [-7.7520, 110.4914], deskripsi: "Lokasi Keroncong Plesiran 1 Dekade." },
    { id: "jnm", nama: "Jogja National Museum (ARTJOG)", kategori: "budaya", koordinat: [-7.7940, 110.3580], deskripsi: "Lokasi perhelatan ARTJOG 2026." },
    { id: "kridosono", nama: "Stadion Kridosono", kategori: "transportasi", koordinat: [-7.7850, 110.3730], deskripsi: "Lokasi Jogja Rockphonic & Sarga Festival." },

    // TRANSPORTASI
    { nama: "Stasiun Tugu", kategori: "transportasi", koordinat: [-7.7891, 110.3634], deskripsi: "Stasiun utama pusat kota." },
    { nama: "Stasiun Lempuyangan", kategori: "transportasi", koordinat: [-7.7900, 110.3752], deskripsi: "Stasiun transit ekonomi." },
    { nama: "Bandara YIA", kategori: "transportasi", koordinat: [-7.9001, 110.0571], deskripsi: "Bandara Internasional Yogyakarta." },
    { nama: "Terminal Giwangan", kategori: "transportasi", koordinat: [-7.8341, 110.3924], deskripsi: "Terminal bus utama DIY." },
    { nama: "Halte Trans Jogja Malioboro", kategori: "transportasi", koordinat: [-7.7930, 110.3650], deskripsi: "Pusat koneksi bus perkotaan." },

    // AKOMODASI
    { nama: "Yogyakarta Marriott Hotel", kategori: "akomodasi", koordinat: [-7.7599, 110.3992], deskripsi: "Hotel bintang 5 premium." },
    { nama: "The Phoenix Hotel", kategori: "akomodasi", koordinat: [-7.7825, 110.3683], deskripsi: "Hotel warisan kolonial." },

    // FASILITAS (SPBU, RUMAH SAKIT)
    { nama: "SPBU Malioboro", kategori: "fasilitas", koordinat: [-7.7980, 110.3650], deskripsi: "SPBU area pusat kota." },
    { nama: "SPBU Kaliurang", kategori: "fasilitas", koordinat: [-7.6500, 110.4200], deskripsi: "SPBU jalur wisata Merapi." },
    { nama: "RSUP Dr. Sardjito", kategori: "fasilitas", koordinat: [-7.7686, 110.3736], deskripsi: "Rumah sakit pusat rujukan." },
    { nama: "Puskesmas Gedongtengen", kategori: "fasilitas", koordinat: [-7.7920, 110.3600], deskripsi: "Fasilitas kesehatan area kota." },

    // WISATA RELIGI
    { id: "masjid_gedhe", nama: "Masjid Gedhe Kauman", kategori: "budaya", koordinat: [-7.8035, 110.3620], deskripsi: "Masjid bersejarah kesultanan." },
    { id: "gereja_ganjuran", nama: "Gereja Hati Kudus Ganjuran", kategori: "budaya", koordinat: [-7.9150, 110.3120], deskripsi: "Gereja dengan arsitektur Jawa." },
    { id: "masjid_syuhada", nama: "Masjid Syuhada", kategori: "budaya", koordinat: [-7.7780, 110.3720], deskripsi: "Masjid ikonik Kotabaru." },

    // WISATA EDUKASI & MUSEUM
    { id: "museum_biologi", nama: "Museum Biologi UGM", kategori: "budaya", koordinat: [-7.7850, 110.3780], deskripsi: "Koleksi spesimen flora fauna." },
    { id: "taman_pintar", nama: "Taman Pintar", kategori: "budaya", koordinat: [-7.7950, 110.3680], deskripsi: "Wahana edukasi sains anak." },
    { id: "museum_geologi", nama: "Museum Geoteknologi", kategori: "budaya", koordinat: [-7.7610, 110.3800], deskripsi: "Edukasi bumi dan batuan." },
    { id: "museum_sonobudoyo", nama: "Museum Sonobudoyo", kategori: "budaya", koordinat: [-7.8020, 110.3645], deskripsi: "Museum kebudayaan Jawa." },

    // PUSAT BELANJA
    { id: "mal_ioboro_mall", nama: "Malioboro Mall", kategori: "kuliner", koordinat: [-7.7925, 110.3650], deskripsi: "Pusat perbelanjaan utama." },
    { id: "galeria_mall", nama: "Galeria Mall", kategori: "kuliner", koordinat: [-7.7800, 110.3750], deskripsi: "Mal ikonik utara kota." },
    { id: "hartono_mall", nama: "Pakuwon Mall Jogja", kategori: "kuliner", koordinat: [-7.7550, 110.3950], deskripsi: "Pusat gaya hidup modern." },
    { id: "pasar_kranggan", nama: "Pasar Kranggan", kategori: "kuliner", koordinat: [-7.7830, 110.3630], deskripsi: "Pasar tradisional legendaris." },

    // FASILITAS UMUM & SPBU TAMBAHAN
    { id: "spbu_gejayan", nama: "SPBU Gejayan", kategori: "fasilitas", koordinat: [-7.7750, 110.3900], deskripsi: "SPBU area kampus." },
    { id: "spbu_parangtritis", nama: "SPBU Parangtritis", kategori: "fasilitas", koordinat: [-7.9800, 110.3500], deskripsi: "SPBU jalur wisata selatan." },
    { id: "rs_bethesda", nama: "RS Bethesda", kategori: "fasilitas", koordinat: [-7.7800, 110.3700], deskripsi: "Rumah sakit swasta pusat." },
    { id: "stasiun_maguwo", nama: "Stasiun Maguwo", kategori: "transportasi", koordinat: [-7.7780, 110.4350], deskripsi: "Stasiun akses bandara lama." },
    // WISATA ALAM & TAMAN
    { id: "hutan_pinus", nama: "Hutan Pinus Mangunan", kategori: "alam", koordinat: [-7.9400, 110.4200], deskripsi: "Wisata hutan pinus ikonik Bantul." },
    { id: "gumuk_pasir", nama: "Gumuk Pasir Parangkusumo", kategori: "alam", koordinat: [-8.0200, 110.3150], deskripsi: "Padang pasir unik di pesisir selatan." },
    { id: "waduk_sermo", nama: "Waduk Sermo", kategori: "alam", koordinat: [-7.7850, 110.1200], deskripsi: "Bendungan asri Kulon Progo." },
    { id: "air_terjun_sri_gethuk", nama: "Air Terjun Sri Gethuk", kategori: "alam", koordinat: [-7.9550, 110.5100], deskripsi: "Air terjun di pinggir sungai Oyo." },
    { id: "taman_pelangi", nama: "Taman Pelangi Monjali", kategori: "alam", koordinat: [-7.7500, 110.3650], deskripsi: "Wisata lampion malam hari." },

    // WISATA BUDAYA & SEJARAH
    { id: "candi_ijo", nama: "Candi Ijo", kategori: "sejarah", koordinat: [-7.7800, 110.5100], deskripsi: "Candi tertinggi di Yogyakarta." },
    { id: "candi_sambisari", nama: "Candi Sambisari", kategori: "sejarah", koordinat: [-7.7600, 110.4500], deskripsi: "Candi bawah permukaan tanah." },
    { id: "museum_perjuangan", nama: "Museum Perjuangan", kategori: "sejarah", koordinat: [-7.8100, 110.3700], deskripsi: "Situs sejarah perjuangan RI." },
    { id: "makam_imogiri", nama: "Kompleks Makam Raja Imogiri", kategori: "sejarah", koordinat: [-7.9250, 110.3950], deskripsi: "Makam raja-raja Mataram." },

    // KULINER (TEMBAH BANYAK)
    { id: "bakmi_jowo_mbah_gito", nama: "Bakmi Jowo Mbah Gito", kategori: "kuliner", koordinat: [-7.8200, 110.3800], deskripsi: "Bakmi nuansa kayu tradisional." },
    { id: "mie_ayam_tumini", nama: "Mie Ayam Tumini", kategori: "kuliner", koordinat: [-7.8300, 110.3750], deskripsi: "Mie ayam legendaris Sari." },
    { id: "oseng_mercon_bu_numi", nama: "Oseng Mercon Bu Numi", kategori: "kuliner", koordinat: [-7.8000, 110.3600], deskripsi: "Kuliner super pedas." },
    { id: "jejamuran", nama: "Jejamuran", kategori: "kuliner", koordinat: [-7.7200, 110.3500], deskripsi: "Resto olahan jamur khas Sleman." },

    // TRANSPORTASI & FASILITAS TAMBAHAN
    { id: "terminal_jombor", nama: "Terminal Jombor", kategori: "transportasi", koordinat: [-7.7500, 110.3550], deskripsi: "Terminal bus utama utara." },
    { id: "spbu_jl_solo", nama: "SPBU Jl. Solo", kategori: "fasilitas", koordinat: [-7.7800, 110.4000], deskripsi: "SPBU akses utama Bandara." },
    { id: "rs_johar", nama: "RS Jogja International", kategori: "fasilitas", koordinat: [-7.7700, 110.3850], deskripsi: "Fasilitas kesehatan modern." },

    // TAMBAHKAN BERBAGAI TITIK POI LAINNYA
    { id: "kampus_ugm", nama: "Kampus UGM", kategori: "budaya", koordinat: [-7.7700, 110.3770], deskripsi: "Kawasan pendidikan pusat." },
    { id: "stadion_maguwoharjo", nama: "Stadion Maguwoharjo", kategori: "transportasi", koordinat: [-7.7580, 110.4250], deskripsi: "Stadion kebanggaan DIY." },
    { id: "desa_wisata_kasongan", nama: "Desa Wisata Kasongan", kategori: "budaya", koordinat: [-7.8400, 110.3500], deskripsi: "Pusat kerajinan gerabah." },
    // Tambahan untuk memetakan Event ke Lokasi
    { id: "winongo", nama: "Bantaran Sungai Winongo", kategori: "budaya", koordinat: [-7.8100, 110.3500], deskripsi: "Lokasi Winongo Art Festival 2026." },
    { id: "rocket_hall", nama: "Rocket Convention Hall", kategori: "fasilitas", koordinat: [-7.7500, 110.4000], deskripsi: "Lokasi Selarasa Fest 2026." },
    { id: "jec", nama: "Jogja Expo Center (JEC)", kategori: "budaya", koordinat: [-7.7900, 110.4100], deskripsi: "Lokasi INACRAFT & Jogja Fashion Week." },
    { id: "embung_giwangan", nama: "Taman Budaya Embung Giwangan", kategori: "budaya", koordinat: [-7.8300, 110.3900], deskripsi: "Lokasi Festival Sastra Yogyakarta." },
    { id: "museum_batik", nama: "Museum Batik Yogyakarta", kategori: "budaya", koordinat: [-7.7900, 110.3700], deskripsi: "Lokasi Pameran Batik." },
    { id: "pasar_seni_kotagede", nama: "Pasar Seni Kotagede", kategori: "budaya", koordinat: [-7.8270, 110.3990], deskripsi: "Lokasi Pameran Perak." },
    { id: "rocket_hall", nama: "Rocket Convention Hall", kategori: "fasilitas", koordinat: [-7.7500, 110.4000], deskripsi: "Lokasi Selarasa Fest 2026." },
    { id: "jec", nama: "Jogja Expo Center (JEC)", kategori: "budaya", koordinat: [-7.7900, 110.4100], deskripsi: "Lokasi INACRAFT & Jogja Fashion Week." },
    { id: "embung_giwangan", nama: "Taman Budaya Embung Giwangan", kategori: "budaya", koordinat: [-7.8300, 110.3900], deskripsi: "Lokasi Festival Sastra Yogyakarta." },
    { id: "museum_batik", nama: "Museum Batik Yogyakarta", kategori: "budaya", koordinat: [-7.7900, 110.3700], deskripsi: "Lokasi Pameran Batik." },
    { id: "pasar_seni_kotagede", nama: "Pasar Seni Kotagede", kategori: "budaya", koordinat: [-7.8270, 110.3990], deskripsi: "Lokasi Pameran Perak." }
];

// A. Definisi warna untuk setiap kategori
const warnaKategori = {
    'budaya': '#ff9f43',
    'sejarah': '#5f27cd',
    'kuliner': '#ee5253',
    'alam': '#10ac84',
    'transportasi': '#54a0ff',
    'akomodasi': '#feca57',
    'fasilitas': '#c8d6e5'
};

// B. Fungsi untuk membuat ikon berwarna (tanpa mengubah CSS)
function getMarkerIcon(kategori) {
    const warna = warnaKategori[kategori] || '#ffffff';
    return L.divIcon({
        className: 'custom-pin',
        html: `<div style="background-color: ${warna}; width: 20px; height: 20px; border-radius: 50% 50% 50% 0; transform: rotate(-45deg); border: 2px solid white; box-shadow: 0 0 5px rgba(0,0,0,0.5);"></div>`,
        iconSize: [20, 20],
        iconAnchor: [10, 20],
        popupAnchor: [0, -20]
    });
}
// 5. Membuat dan Memetakan Struktur Popup
tempatWisata.forEach(tempat => {
    // Membuat link Google Maps rute
    const gmapsLink = `https://www.google.com/maps/dir/?api=1&destination=${tempat.koordinat[0]},${tempat.koordinat[1]}`;

    const htmlPopup = `
        <div class="popup-box">
            <span class="popup-category">${tempat.kategori.toUpperCase()}</span>
            <h3 class="popup-title">${tempat.nama}</h3>
            <p class="popup-desc">${tempat.deskripsi}</p>
            <a href="${gmapsLink}" target="_blank" class="popup-link">Buka di Google Maps</a>
        </div>
    `;

    // Menggunakan ikon dinamis yang warnanya disesuaikan kategori
    const marker = L.marker(tempat.koordinat, {
        icon: getMarkerIcon(tempat.kategori)
    }).bindPopup(htmlPopup);

    // Memasukkan ke layer yang sesuai
    if (layers[tempat.kategori]) {
        marker.addTo(layers[tempat.kategori]);
    } else {
        marker.addTo(map);
    }
});

// FUNGSI NAVIGASI GLOBAL (Digunakan untuk link dari luar)
window.arahkannyaKeLokasi = function (lat, lng, zoom = 15) {
    map.flyTo([lat, lng], zoom, { animate: true, duration: 1.5 });
};

window.arahkannyaKeWilayah = function (key) {
    if (dataTitikWilayah[key]) {
        map.flyTo(dataTitikWilayah[key].center, dataTitikWilayah[key].zoom, { animate: true, duration: 1.5 });
    }
};


// =========================================================================
// NAVIGASI DENGAN TITIK KOORDINAT (FLY TO WILAYAH KABUPATEN)
// =========================================================================
const dataTitikWilayah = {
    "kulonprogo": { nama: "Kabupaten Kulon Progo", center: [-7.8500, 110.1600], zoom: 11 },
    "sleman": { nama: "Kabupaten Sleman", center: [-7.6800, 110.4000], zoom: 11 },
    "yogyakarta": { nama: "Kota Yogyakarta", center: [-7.8000, 110.3700], zoom: 13 },
    "bantul": { nama: "Kabupaten Bantul", center: [-7.9200, 110.3600], zoom: 11 },
    "gunungkidul": { nama: "Kabupaten Gunungkidul", center: [-8.0300, 110.6000], zoom: 11 }
};

// Fungsi Global pengarah peta (Fly To) sewaktu tombol HTML diklik
window.arahkannyaKeWilayah = function (key) {
    if (dataTitikWilayah[key]) {
        map.flyTo(dataTitikWilayah[key].center, dataTitikWilayah[key].zoom, {
            animate: true,
            duration: 1.5
        });
    }
};
// Tambahkan ini di bagian bawah Peta.js
window.addEventListener('load', () => {
    const params = new URLSearchParams(window.location.search);
    const lat = params.get('lat');
    const lng = params.get('lng');

    if (lat && lng) {
        setTimeout(() => {
            arahkannyaKeLokasi(parseFloat(lat), parseFloat(lng), 15);
        }, 500); // Delay agar peta siap dimuat dulu
    }
});
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
                /* Bagian Atas Sleman */
                [-7.5412, 110.4412], [-7.5650, 110.4900], [-7.6010, 110.5180], [-7.6234, 110.5412],
                [-7.6650, 110.5150], [-7.7120, 110.5050],

                /* 1. Titik Temu Gunungkidul (Kiri Atas GK) */
                [-7.7423, 110.4934],

                /* 2. Titik PUSAT PERTEMUAN Sleman-Gunungkidul-Yogya */
                [-7.7712, 110.47],

                [-7.7700, 110.3800], // Titik belokan 1
                [-7.7680, 110.3700], // Titik belokan 2
                [-7.7692, 110.362], // Titik belokan 3 (ujung)

                /* 4. Titik TEMU Sleman-Yogya-Bantul */
                [-7.7947, 110.3456],

                /* 5. Menutup kembali ke arah Barat/Utara */
                [-7.7912, 110.3312], [-7.7600, 110.3010], [-7.7212, 110.2104],
                [-7.6950, 110.2150], [-7.6534, 110.3121], [-7.5850, 110.3600]
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
        const targetKategori = e.target.getAttribute('data-target'); // Mengambil kategori (contoh: 'alam')
        const isChecked = e.target.checked; // Status apakah dicentang atau tidak

        // Sinkronisasi status checkbox (jika ada checkbox yang sama di mobile/desktop)
        const semuaCheckboxKategori = document.querySelectorAll(`input[data-target="${targetKategori}"]`);
        semuaCheckboxKategori.forEach(checkbox => {
            checkbox.checked = isChecked;
        });

        // INI BAGIAN UTAMA FILTERINGNYA:
        if (isChecked) {
            map.addLayer(layers[targetKategori]); // Menampilkan layer
        } else {
            map.removeLayer(layers[targetKategori]); // Menyembunyikan layer
        }
    }
});
// Fungsi untuk memproses perubahan status layer
function updateAllFilters(status) {
    const checkboxes = document.querySelectorAll('.sync-chk');
    checkboxes.forEach(chk => {
        // Update checkbox
        chk.checked = status;

        // Update layer di peta
        const targetKategori = chk.getAttribute('data-target');
        const layer = layers[targetKategori];

        if (layer) {
            if (status) {
                if (!map.hasLayer(layer)) map.addLayer(layer);
            } else {
                if (map.hasLayer(layer)) map.removeLayer(layer);
            }
        }
    });
}

// Menangani tombol "Pilih Semua" (mendukung banyak tombol sekaligus)
document.querySelectorAll('.btn-check-all').forEach(btn => {
    btn.addEventListener('click', () => updateAllFilters(true));
});

// Menangani tombol "Hapus Semua" (mendukung banyak tombol sekaligus)
document.querySelectorAll('.btn-uncheck-all').forEach(btn => {
    btn.addEventListener('click', () => updateAllFilters(false));
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

// Navigasi Otomatis berdasarkan URL Hash (contoh: peta.html#prambanan)
window.addEventListener('load', () => {
    const hash = window.location.hash.substring(1); // Mengambil teks setelah #
    if (hash) {
        const target = tempatWisata.find(t => t.id === hash);
        if (target) {
            setTimeout(() => {
                map.flyTo(target.koordinat, 15, {
                    animate: true,
                    duration: 1.5
                });
                // Opsional: Buka popup otomatis
                // L.marker(target.koordinat).openPopup();
            }, 800);
        }
    }
});
