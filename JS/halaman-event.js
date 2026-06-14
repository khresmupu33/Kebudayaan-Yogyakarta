const EVENTS = [
    { nama: "Keroncong Plesiran 1 Dekade", tanggal: "2026-06-13", lokasi: "Plataran Candi Prambanan, Sleman", kategori: "Musik", deskripsi: "Keroncong Plesiran 1 Dekade adalah perayaan 10 tahun festival Keroncong Plesiran, salah satu festival musik keroncong modern paling populer di Yogyakarta yang menggabungkan musik, budaya, wisata, dan suasana alam terbuka. Tema tahun ini adalah Wander with the Rhythm of Keroncong.", gambar: "../IMG/keroncong-plesiran.jpg", idMap: "prambanan" },
    { nama: "Winongo Art Festival 2026", tanggal: "2026-06-13", lokasi: "Bantaran Sungai Winongo, Kasihan, Bantul", kategori: "Seni", deskripsi: "Winongo Art Festival 2026 merupakan festival seni berbasis masyarakat yang diselenggarakan di kawasan Sungai Winongo, Yogyakarta. Festival ini menghadirkan pertunjukan seni tradisional dan kontemporer, pameran karya kreatif warga, workshop budaya, serta berbagai kegiatan edukatif yang mengangkat pentingnya pelestarian lingkungan sungai dan pemberdayaan masyarakat lokal.", gambar: "../IMG/winongo-art-festival.jpg", idMap: "winongo" },
    { nama: "Jogja Rockphonic 2026", tanggal: "2026-06-13", lokasi: "Stadion Kridosono, Kota Yogyakarta", kategori: "Musik", deskripsi: "Jogja Rockphonic 2026 merupakan konser musik spektakuler yang menghadirkan kolaborasi musik rock dengan aransemen orkestra megah. Festival ini menampilkan deretan band legendaris Indonesia seperti Dewa 19, God Bless, dan Burgerkill yang tampil dalam satu panggung dengan konsep pertunjukan orkestra, menciptakan pengalaman musik lintas generasi yang epik dan penuh energi.", gambar: "../IMG/jogja-rockphonic.jpg", idMap: "kridosono" },
    { nama: "ARTJOG 2026", tanggal: "2026-06-19", lokasi: "Jogja National Museum (JNM), Wirobrajan", kategori: "Seni", deskripsi: "ARTJOG 2026 adalah pameran seni kontemporer terbesar di Yogyakarta yang menghadirkan karya seniman Indonesia dan internasional. Festival ini menampilkan instalasi interaktif, performance art, diskusi kreatif, serta program edukasi yang mendorong apresiasi masyarakat terhadap perkembangan seni kontemporer dan budaya visual.", gambar: "../IMG/artjog.jpg", idMap: "jnm" },
    { nama: "Sayembara Puisi Nasional FSY", tanggal: "2026-06-23", lokasi: "Online / Festival Sastra Yogyakarta", kategori: "Literasi", deskripsi: "Sayembara Puisi Nasional FSY merupakan program tahunan dalam rangka Festival Sastra Yogyakarta yang mengajak masyarakat luas untuk berpartisipasi dalam penulisan puisi. Karya terpilih akan dipresentasikan dalam rangkaian festival dan berkesempatan dipublikasikan.", gambar: "../IMG/sayembara-puisi-fsy.jpg" },
    { nama: "Selarasa Fest 2026", tanggal: "2026-06-26", lokasi: "Rocket Convention Hall, Sleman", kategori: "Festival", deskripsi: "Selarasa Fest 2026 merupakan festival kreatif yang memadukan budaya lokal, musik, kuliner, dan pemberdayaan UMKM dalam satu perayaan yang meriah. Acara ini menghadirkan berbagai penampilan musisi, pertunjukan seni tradisional, bazar produk kreatif, serta ragam kuliner khas Nusantara yang dapat dinikmati oleh seluruh kalangan.", gambar: "../IMG/selarasa-fest.jpg", idMap: "rocket_hall" },
    { nama: "Prambanan Jazz Festival 2026", tanggal: "2026-07-03", lokasi: "Pelataran Candi Prambanan, Sleman", kategori: "Musik", deskripsi: "Prambanan Jazz Festival 2026 merupakan festival musik internasional yang memadukan pertunjukan jazz, pop, dan berbagai genre musik lainnya dengan latar megah Candi Prambanan yang merupakan warisan budaya dunia.", gambar: "../IMG/prambanan-jazz.jpeg", idMap: "prambanan" },
    { nama: "INACRAFT Festival 2026", tanggal: "2026-07-15", lokasi: "Jogja Expo Center (JEC), Bantul", kategori: "Pameran", deskripsi: "INACRAFT Festival 2026 merupakan festival kriya dan kerajinan terbesar yang mempertemukan perajin, UMKM, desainer, pelaku industri kreatif, dan masyarakat dalam satu rangkaian acara berskala nasional maupun internasional.", gambar: "../IMG/inacraft.jpg", idMap: "jec" },
    { nama: "Festival Kesenian Yogyakarta (FKY)", tanggal: "2026-07-20", lokasi: "Taman Budaya Yogyakarta & Sepanjang Jalan Malioboro", kategori: "Budaya", deskripsi: "Festival Kesenian Yogyakarta (FKY) merupakan festival budaya tahunan yang menjadi salah satu agenda seni terbesar di Daerah Istimewa Yogyakarta. Acara ini menghadirkan beragam pertunjukan tari, musik tradisional, teater, wayang, seni rupa, kriya, hingga kuliner khas daerah.", gambar: "../IMG/fky.jpg", idMap: "tamansari" },
    { nama: "Yogyakarta Gamelan Festival 2026", tanggal: "2026-07-20", lokasi: "Panggung Terbuka Ramayana, Candi Prambanan", kategori: "Musik", deskripsi: "Yogyakarta Gamelan Festival 2026 merupakan festival gamelan berskala internasional yang mempertemukan seniman, akademisi, komunitas, dan pecinta gamelan dari berbagai daerah maupun negara.", gambar: "../IMG/yogyakarta-gamelan-festival.jpg", idMap: "prambanan" },
    { nama: "Sarga Festival 2026", tanggal: "2026-07-20", lokasi: "Yogyakarta (venue menyesuaikan)", kategori: "Musik & Budaya", deskripsi: "Sarga Festival 2026 adalah festival musik dan budaya yang menggabungkan pertunjukan musik modern, seni pertunjukan, serta aktivitas komunitas kreatif. Festival ini menghadirkan pengalaman ruang interaktif yang merayakan keberagaman budaya lokal Yogyakarta dengan sentuhan modern, serta menjadi wadah kolaborasi antara musisi, seniman, dan pelaku kreatif.", gambar: "../IMG/sarga-festival.jpg", idMap: "kridosono" },
    { nama: "Pasar Kangen", tanggal: "2026-07-25", lokasi: "Taman Budaya Yogyakarta (TBY), Danurejan", kategori: "Budaya", deskripsi: "Pasar Kangen merupakan festival budaya tahunan yang menghadirkan suasana Yogyakarta tempo dulu melalui kuliner tradisional, permainan rakyat, pertunjukan seni, serta berbagai kerajinan khas Jawa. Acara ini menjadi sarana pelestarian budaya sekaligus memperkenalkan warisan lokal kepada generasi muda dan wisatawan.", gambar: "../IMG/pasar-kangen.jpeg", idMap: "tamansari" },
    { nama: "Pasar Buku Sastra FSY", tanggal: "2026-07-30", lokasi: "Taman Budaya Embung Giwangan, Yogyakarta", kategori: "Literasi", deskripsi: "Pasar Buku Sastra merupakan bagian dari Festival Sastra Yogyakarta yang menghadirkan ratusan penerbit dan komunitas literasi. Pengunjung dapat menemukan berbagai buku sastra, mengikuti diskusi, dan bertemu langsung dengan penulis.", gambar: "../IMG/pasar-buku-sastra.jpg", idMap: "embung_giwangan" },
    { nama: "Pembukaan Festival Sastra Yogyakarta", tanggal: "2026-07-30", lokasi: "Grha Budaya, Taman Budaya Embung Giwangan", kategori: "Literasi", deskripsi: "Acara pembukaan Festival Sastra Yogyakarta menampilkan pertunjukan puisi, musik, dan seni kolaboratif sebagai tanda dimulainya rangkaian festival sastra tahunan di Yogyakarta.", gambar: "../IMG/pembukaan-fsy.jpg", idMap: "embung_giwangan" },
    { nama: "Festival Sastra Yogyakarta (FSY)", tanggal: "2026-07-30", lokasi: "Taman Budaya Embung Giwangan, Yogyakarta", kategori: "Literasi", deskripsi: "Festival Sastra Yogyakarta (FSY) adalah festival sastra tahunan yang diselenggarakan oleh Dinas Kebudayaan Kota Yogyakarta. Acara ini menghadirkan penulis, penyair, akademisi, dan komunitas sastra dengan kegiatan seperti diskusi buku, sayembara puisi, peluncuran karya, pasar buku sastra, serta pertunjukan seni lintas medium.", gambar: "../IMG/festival-sastra-yogyakarta.jpg", idMap: "embung_giwangan" },
    { nama: "Pameran Batik Yogyakarta", tanggal: "2026-08-05", lokasi: "Museum Batik Yogyakarta, Danurejan", kategori: "Pameran", deskripsi: "Pameran Batik Yogyakarta merupakan ajang budaya yang menampilkan keindahan dan keberagaman motif batik khas Yogyakarta, seperti Parang, Kawung, Nitik, dan berbagai karya batik tulis maupun batik cap lainnya.", gambar: "../IMG/pameran-batik.jpg", idMap: "museum_batik" },
    { nama: "Pameran Kerajinan Perak Kotagede", tanggal: "2026-08-10", lokasi: "Pasar Seni Kotagede, Yogyakarta", kategori: "Pameran", deskripsi: "Pameran Kerajinan Perak Kotagede merupakan kegiatan budaya yang menampilkan berbagai karya kerajinan perak khas Kotagede yang telah menjadi identitas dan kebanggaan Yogyakarta selama berabad-abad.", gambar: "../IMG/perak-kotagede.jpg", idMap: "pasar_seni_kotagede" },
    { nama: "Jogja Fashion Week 2026", tanggal: "2026-08-13", lokasi: "Jogja Expo Center (JEC), Bantul", kategori: "Fashion", deskripsi: "Jogja Fashion Week 2026 merupakan ajang mode terbesar di Yogyakarta yang menghadirkan karya desainer lokal dan nasional dengan mengangkat kekayaan budaya Indonesia sebagai sumber inspirasi utama.", gambar: "../IMG/jogja-fashion-week.jpg", idMap: "jec" },
    { nama: "Merti Desa", tanggal: "2026-08-15", lokasi: "Desa Wisata Candirejo, Magelang/Sleman", kategori: "Tradisi", deskripsi: "Merti Desa merupakan tradisi budaya masyarakat Jawa yang dilaksanakan sebagai bentuk rasa syukur kepada Tuhan atas hasil panen, keselamatan, dan kesejahteraan yang diterima oleh warga desa.", gambar: "../IMG/merti-desa.jpg" },
    { nama: "Miyos Gangsa", tanggal: "2026-08-19", lokasi: "Pagelaran Keraton Yogyakarta", kategori: "Tradisi", deskripsi: "Miyos Gangsa merupakan prosesi budaya sakral Keraton Yogyakarta yang menandai keluarnya gamelan pusaka keraton menuju Masjid Gedhe Kauman sebagai bagian dari rangkaian tradisi Sekaten.", gambar: "../IMG/miyos-gangsa.jpg", idMap: "keraton" },
    { nama: "Pertunjukan Wayang Kulit Tradisional", tanggal: "2026-08-20", lokasi: "Bangsal Sri Manganti, Keraton Yogyakarta", kategori: "Seni Pertunjukan", deskripsi: "Pertunjukan Wayang Kulit Tradisional merupakan pagelaran seni budaya Jawa yang menampilkan kisah-kisah epik seperti Mahabharata dan Ramayana melalui permainan wayang yang dibawakan oleh seorang dalang.", gambar: "../IMG/wayang-kulit.jpg", idMap: "keraton" },
    { nama: "Pameran Keris Nusantara", tanggal: "2026-08-25", lokasi: "Museum Sonobudoyo, Yogyakarta", kategori: "Pameran", deskripsi: "Pameran Keris Nusantara merupakan ajang budaya yang menampilkan koleksi keris, karya para empu, serta berbagai warisan tosan aji dari seluruh Indonesia. Kegiatan ini bertujuan memperkenalkan nilai sejarah, filosofi, dan keindahan seni keris sebagai bagian penting dari identitas budaya Nusantara.", gambar: "../IMG/pameran-keris.jpg", idMap: "museum_sonobudoyo" },
    { nama: "Festival Jathilan Yogyakarta", tanggal: "2026-09-10", lokasi: "Amphitheater Taman Budaya Yogyakarta", kategori: "Budaya", deskripsi: "Festival Jathilan Yogyakarta merupakan ajang pelestarian seni tradisional yang menampilkan berbagai kelompok jathilan dari seluruh Daerah Istimewa Yogyakarta. Festival ini menghadirkan pertunjukan budaya yang memadukan unsur tari, musik tradisional, dan nilai-nilai warisan budaya Jawa yang masih lestari hingga saat ini.", gambar: "../IMG/festival-jathilan.jpg", idMap: "tamansari" },
    { nama: "Festival Budaya Desa Wisata", tanggal: "2026-09-15", lokasi: "Desa Wisata Pentingsari, Sleman", kategori: "Budaya", deskripsi: "Festival Budaya Desa Wisata merupakan kegiatan yang menampilkan kekayaan seni, tradisi, dan kehidupan masyarakat dari berbagai desa wisata di Daerah Istimewa Yogyakarta.", gambar: "../IMG/desa-wisata.jpg" },
    { nama: "Festival Gejog Lesung", tanggal: "2026-09-18", lokasi: "Lapangan Paseban, Bantul", kategori: "Musik", deskripsi: "Festival Gejog Lesung adalah perayaan seni musik tradisional Jawa yang menggunakan alat penumbuk padi sebagai instrumen utama. Festival ini menampilkan berbagai kelompok seni dari berbagai daerah yang berkolaborasi dalam melestarikan warisan budaya sekaligus memperkenalkan musik tradisional kepada generasi muda.", gambar: "../IMG/gejog-lesung.png" },
    { nama: "Labuhan Merapi", tanggal: "2026-09-20", lokasi: "Petilasan Mbah Maridjan, Kinahrejo, Sleman", kategori: "Tradisi", deskripsi: "Labuhan Merapi merupakan upacara adat Keraton Yogyakarta yang dilaksanakan sebagai bentuk persembahan kepada alam, khususnya Gunung Merapi, sebagai simbol keseimbangan, keselamatan, dan rasa syukur.", gambar: "../IMG/labuhan-merapi.jpg", idMap: "merapi" },
    { nama: "Wayang Jogja Night Carnival 2026", tanggal: "2026-10-01", lokasi: "Kawasan Tugu Pal Putih, Yogyakarta", kategori: "Festival", deskripsi: "Wayang Jogja Night Carnival 2026 merupakan karnaval budaya malam hari yang mengangkat tema pewayangan dengan kemasan visual modern yang spektakuler.", gambar: "../IMG/wjnc.jpeg" },
    { nama: "Bedog Arts Festival 2026", tanggal: "2026-10-03", lokasi: "Studio Banjarmili, Bantul", kategori: "Seni", deskripsi: "Bedog Arts Festival 2026 merupakan festival seni yang memadukan pertunjukan seni kontemporer, tradisi, dan kepedulian lingkungan dalam satu ruang kreatif di kawasan Sungai Bedog.", gambar: "../IMG/bedog-arts-festival.jpeg" },
    { nama: "Malioboro Literary Festival", tanggal: "2026-10-10", lokasi: "Teras Malioboro, Yogyakarta", kategori: "Literasi", deskripsi: "Malioboro Literary Festival merupakan festival literasi yang mempertemukan penulis, penyair, akademisi, dan komunitas literasi dalam satu ruang budaya di kawasan Malioboro.", gambar: "../IMG/malioboro-literary-festival.jpg", idMap: "malioboro" },
    { nama: "Sendratari Ramayana", tanggal: "2026-10-15", lokasi: "Panggung Terbuka Candi Prambanan", kategori: "Seni Pertunjukan", deskripsi: "Sendratari Ramayana merupakan pertunjukan seni kolosal yang menggabungkan tari, drama, dan musik gamelan untuk menceritakan kisah epik Ramayana.", gambar: "../IMG/ramayana.jpg", idMap: "prambanan" },
    { nama: "Festival Desa Budaya DIY", tanggal: "2026-10-20", lokasi: "Desa Budaya Candran, Bantul", kategori: "Budaya", deskripsi: "Festival Desa Budaya DIY merupakan ajang tahunan yang menampilkan kekayaan budaya, tradisi, dan kearifan lokal dari berbagai desa budaya di Daerah Istimewa Yogyakarta. Festival ini menghadirkan pertunjukan seni tradisional, pameran kerajinan, kuliner khas daerah, serta berbagai atraksi budaya yang mencerminkan identitas masyarakat setempat.", gambar: "../IMG/festival-desa-budaya.jpg" },
    { nama: "Festival Kuliner Tradisional Jogja", tanggal: "2026-11-15", lokasi: "Area Parkir Senopati, Yogyakarta", kategori: "Kuliner", deskripsi: "Festival Kuliner Tradisional Jogja merupakan perayaan kuliner khas Yogyakarta yang menghadirkan berbagai makanan tradisional seperti gudeg, kipo, yangko, geplak, cenil, dan aneka jajanan pasar lainnya.", gambar: "../IMG/festival-kuliner-jogja.jpg" },
    { nama: "Sekaten 2026", tanggal: "2026-11-20", lokasi: "Alun-Alun Utara Keraton Yogyakarta", kategori: "Tradisi", deskripsi: "Sekaten merupakan perayaan budaya dan keagamaan di Keraton Yogyakarta yang digelar untuk memperingati Maulid Nabi Muhammad SAW.", gambar: "../IMG/sekaten.jpg", idMap: "keraton" },
    { nama: "Wayang Kulit Sekaten", tanggal: "2026-11-25", lokasi: "Bangsal Pagelaran Keraton Yogyakarta", kategori: "Seni Pertunjukan", deskripsi: "Wayang Kulit Sekaten merupakan pertunjukan wayang kulit yang menjadi bagian dari rangkaian tradisi Sekaten di Keraton Yogyakarta.", gambar: "../IMG/wayang-sekaten.jpg", idMap: "keraton" },
    { nama: "Grebeg Maulud 2026", tanggal: "2026-12-01", lokasi: "Alun-Alun Utara & Masjid Gedhe Kauman", kategori: "Tradisi", deskripsi: "Grebeg Maulud merupakan upacara adat Keraton Yogyakarta yang digelar untuk memperingati kelahiran Nabi Muhammad SAW dengan prosesi kirab gunungan hasil bumi.", gambar: "../IMG/grebeg-maulud.jpg", idMap: "masjid_gedhe" },
    { nama: "Nguras Enceh", tanggal: "2026-12-05", lokasi: "Kompleks Makam Raja-Raja Imogiri, Bantul", kategori: "Tradisi", deskripsi: "Nguras Enceh merupakan tradisi membersihkan gentong atau air suci peninggalan Keraton Yogyakarta yang berada di kompleks makam raja-raja Imogiri.", gambar: "../IMG/nguras-enceh.jpg", idMap: "makam_imogiri" },
    { nama: "Jamasan Pusaka", tanggal: "2026-12-10", lokasi: "Kompleks Kedhaton Keraton Yogyakarta", kategori: "Tradisi", deskripsi: "Jamasan Pusaka merupakan upacara tradisional Keraton Yogyakarta yang dilakukan untuk membersihkan dan merawat pusaka-pusaka keraton seperti keris, tombak, dan benda-benda bersejarah lainnya.", gambar: "../IMG/jamasan-pusaka.jpg", idMap: "keraton" }
];

// Nama Bulan
const namaBulan = {
    1: "Januari",
    2: "Februari",
    3: "Maret",
    4: "April",
    5: "Mei",
    6: "Juni",
    7: "Juli",
    8: "Agustus",
    9: "September",
    10: "Oktober",
    11: "November",
    12: "Desember"
};

function formatTanggal(tanggalISO) {
    const date = new Date(tanggalISO);

    const hari = date.getDate();
    const bulan = namaBulan[date.getMonth() + 1];
    const tahun = date.getFullYear();

    return `${hari} ${bulan} ${tahun}`;
}

function getBulan(tanggalISO) {
    return new Date(tanggalISO).getMonth() + 1;
}

function getKategori(event) {
    const nama = event.nama.toLowerCase();

    if (nama.includes("wayang"))
        return "Wayang";

    if (nama.includes("pameran") || nama.includes("artjog"))
        return "Pameran";

    if (nama.includes("fashion"))
        return "Fashion";

    if (nama.includes("sastra") || nama.includes("literary"))
        return "Sastra";

    if (nama.includes("kuliner") || nama.includes("pasar kangen"))
        return "Kuliner";

    if (nama.includes("jazz"))
        return "Musik";

    if (nama.includes("festival"))
        return "Festival Budaya";

    if (nama.includes("sekaten") ||
        nama.includes("grebeg") ||
        nama.includes("labuhan") ||
        nama.includes("merti") ||
        nama.includes("jamasan") ||
        nama.includes("nguras") ||
        nama.includes("miyos"))
        return "Upacara Adat";

    return "Budaya";
}

function buatKartuEvent(event) {
    // Logika untuk menampilkan tombol jika ada idMap
    const mapLink = event.idMap
        ? `<a href="halaman-peta-jogja.html#${event.idMap}" class="btn-maps">Lihat Rute Map</a>`
        : '';

    return `
        <article class="event-card">
            <img class="event-card-image" src="${event.gambar}" alt="${event.nama}" loading="lazy">
            <p class="event-card-date">${formatTanggal(event.tanggal)}</p>
            <h3 class="event-card-title">${event.nama}</h3>
            <p class="event-card-location">${event.lokasi}</p>
            <p class="event-card-description">${event.deskripsi}</p>
            <span class="event-card-category">${getKategori(event)}</span>
            
            ${mapLink} 
        </article>
    `;
}

function renderEvents(daftarEvent) {
    const grid = document.getElementById("eventsGrid");
    const noEvents = document.getElementById("noEvents");

    if (daftarEvent.length === 0) {
        grid.innerHTML = "";
        noEvents.style.display = "block";
        return;
    }

    noEvents.style.display = "none";

    grid.innerHTML = daftarEvent
        .map(event => buatKartuEvent(event))
        .join("");
}

function filterEventByBulan(bulan) {
    if (bulan === "all") {
        return EVENTS;
    }

    return EVENTS.filter(event => {
        return getBulan(event.tanggal) === Number(bulan);
    });
}

function handleFilterClick(e) {
    const btn = e.target.closest(".filter-btn");

    if (!btn) return;

    document.querySelectorAll(".filter-btn").forEach(button => {
        button.classList.remove("active");
    });

    btn.classList.add("active");

    const bulan = btn.dataset.month;

    const hasilFilter = filterEventByBulan(bulan);

    renderEvents(hasilFilter);
}

document.addEventListener("DOMContentLoaded", () => {

    renderEvents(EVENTS);

    const filterContainer = document.getElementById("filterButtons");

    if (filterContainer) {
        filterContainer.addEventListener("click", handleFilterClick);
    }

});