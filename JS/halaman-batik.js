const IMG = {
    hero: 'IMG/hero-batik.png',
    essence: 'IMG/essence.png',
    mori: 'IMG/mori.png',
    nusantara: 'IMG/nusantara.png',
    process: 'IMG/process.jpg',
    keraton: 'IMG/keraton1.png',
    palette: 'IMG/pallete.png',
    lifecycle: 'IMG/lifecycle.png',
    preservation: 'IMG/preservation-edu.png',
    center: 'IMG/center.png',
    quote: 'IMG/quote.png',
    
    // Daftar Motif Batik
    motifParang: 'IMG/parang.png',
    motifKawung: 'IMG/kawung.png',
    motifTruntum: 'IMG/truntum.png',
    motifSidomukti: 'IMG/sidomukti.png',
    motifParangRusak: 'IMG/parang-rusak.png',
    motifParangBarong: 'IMG/parang-barong.png',
    motifSidoluhur: 'IMG/sidoluhur.jpg',
    motifSidoasih: 'IMG/sidoasih.jpg',
    motifWahyu: 'IMG/wahyu-tumurun.jpg',
    motifSemenRama: 'IMG/semen-rama.jpg',
    motifGrompol: 'IMG/grompol.jpg',
    motifNitik: 'IMG/nitik.jpg',
    motifCeplok: 'IMG/ceplok.jpg',
    motifUdanLiris: 'IMG/udan-liris.jpg',
    motifParangKlitnik: 'IMG/parang-klitnik.jpg',
    motifSekarJagad: 'IMG/sekar-jagad.jpg',
    motifCakarAyam: 'IMG/cakar-ayam.jpg',
    motifSlobog: 'IMG/slobog.jpg',
    motifBabonAngrem: 'IMG/babon-angrem.jpg',
    motifSemenGedhe: 'IMG/semen-gedhe.jpg',
    motifParangPamo: 'IMG/parang-pamo.png',
    motifPamiluto: 'IMG/pamiluto.jpg',
    motifSemenRomosari: 'IMG/semen-romosari.png',
    motifGringsing: 'IMG/gringsing.jpg',
    motifLereng: 'IMG/lereng.jpg',
    motifSidoMulyo: 'IMG/sido-mulyo.jpg',
};

function setImg(id,url) {
    const el = document.getElementById(id);
    if (el) el.src = url;
}
setImg('img-essence', IMG.essence);
setImg('img-mori', IMG.mori);
setImg('img-nusantara', IMG.nusantara);
setImg('img-process', IMG.process);
setImg('img-keraton', IMG.keraton);
setImg('img-palette', IMG.palette);
setImg('img-lifecycle', IMG.lifecycle);
setImg('img-preservation', IMG.preservation);

function setBg(selector,url) {
    const el = document.querySelector(selector)
    if (el) el.style.backgroundImage = `url("${url}")`;
}
setBg('.hero-bg', IMG.hero);
setBg('.cta-bg', IMG.center);
setBg('.quote-bg', IMG.quote);

const MOTIFS = [
    { name: 'Parang Rusak', img: IMG.motifParang, phil: 'Semangat pantang menyerah dan kesinambungan perjuangan.'},
    { name: 'Kawung', img: IMG.motifKawung, phil: 'Kesucian hati dan pengendalian diri menuju kesempurnaan.'},
    { name: 'Truntum', img: IMG.motifTruntum, phil: 'Cinta yang tumbuh kembali, tulus dan tanpa syarat.'},
    { name: 'Sidomukti', img: IMG.motifSidomukti, phil: 'Harapan akan kemakmuran dan kebahagiaan hidup.'},
    { name: 'Parang Barong', img: IMG.motifParangBarong, phil: 'Keagungan dan kewibawaan raja, pengendalian nafsu.'},
    { name: 'Sidoluhur', img: IMG.motifSidoluhur, phil: 'Cita-cita mencapai keluhuran budi dan martabat.'},
    { name: 'Sidoasih', img: IMG.motifSidoasih, phil: 'Doa agar hidup penuh kasih sayang antar sesama.'},
    { name: 'Wahyu Tumurun', img: IMG.motifWahyu, phil: 'Turunnya anugerah, petunjuk, dan berkah dari Tuhan.'},
    { name: 'Semen Rama', img: IMG.motifSemenRama, phil: 'Kepemimpinan bijaksana berdasarkan ajaran luhur.'},
    { name: 'Grompol', img: IMG.motifGrompol, phil: 'Berkumpulnya rezeki, keluarga, dan kebahagiaan.'},
    { name: 'Nitik', img: IMG.motifNitik, phil: 'Ketelitian dan kecermatan dalam menjalani hidup.'},
    { name: 'Ceplok', img: IMG.motifCeplok, phil: 'Keteraturan dan keseimbangan kosmis kehidupan.'},
    { name: 'Udan Liris', img: IMG.motifUdanLiris, phil: 'Ketabahan dan kesuburan, gerimis pembawa berkah.'},
    { name: 'Parang Klitnik', img: IMG.motifParangKlitnik, phil: 'Kelembutan dan kehalusan budi seorang putri.'},
    { name: 'Sekar Jagad', img: IMG.motifSekarJagad, phil: 'Keindahan dan keragaman dunia dalam satu kain.'},
    { name: 'Cakar Ayam', img: IMG.motifCakarAyam, phil: 'Simbol kemandirian, kerja keras dalam mencari rezeki, serta perlindungan dan kasih sayang orang tua' },
    { name: 'Slobog', img: IMG.motifSlobog, phil: 'Kelapangan jalan dan keikhlasan dalam perpisahan.'},
    { name: 'Babon Angrem', img: IMG.motifBabonAngrem, phil: 'Kasih induk, perlindungan, dan harapan kehidupan baru.'},
    { name: 'Semen Gedhe', img: IMG.motifSemenGedhe, phil: 'Tumbuhnya kehidupan dan keagungan semesta'},
    { name: 'Parang Pamo', img: IMG.motifParangPamo, phil: 'Simbol kekuasaan yang dipadukan dengan kelembutan budi pekerti'},
    { name: 'Pamiluto', img: IMG.motifPamiluto, phil: 'Perekat cinta dan keterikatan dua insan.'},
    { name: 'Semen Romosari', img: IMG.motifSemenRomosari, phil: 'Melambangkan keagungan kehidupan dan kisah kepahlawanan yang penuh kebajikan'},
    { name: 'Gringsing', img: IMG.motifGringsing, phil: 'Penolak bala dan penjaga dari segala penyakit.'},
    { name: 'Lereng', img: IMG.motifLereng, phil: 'Kesinambungan dan ketegasan langkah hidup.'},
    { name: 'Sido Mulyo', img: IMG.motifSidoMulyo, phil: 'Harapan akan kehidupan yang mulia dan terhormat.'},
];

function buildGallery() {
    const grid = document.getElementById("motif-grid");
    if (!grid) return;
    const frag = document.createDocumentFragment();

    MOTIFS.forEach((m,i) => {
        const fig = document.createElement('figure');
        fig.className = 'motif reveal';
        fig.style.setProperty('--d', `${(i % 5) * 0.05}s`);

        const img = document.createElement('img');
        img.src = m.img;
        img.alt = `Motif batik ${m.name}`
        img.loading = 'lazy';

        const name = document.createElement('figcaption');
        name.className = 'motif-name';
        name.textContent = m.name;

        const overlay = document.createElement('div');
        overlay.className = 'motif-overlay';
        const span = document.createElement('span');
        const strong = document.createElement('strong');
        strong.textContent = m.name;
        span.appendChild(strong);
        span.appendChild(document.createTextNode(`Motif yang melambangkan ${m.phil}`));
        overlay. appendChild(span);

        fig.appendChild(img);
        fig.appendChild(name);
        fig.appendChild(overlay);
        frag.appendChild(fig);
    });

    grid.appendChild(frag);
    document.querySelectorAll('.motif.reveal').forEach((el) => observer.observe(el));
}


function applyStagger() {
    document.querySelectorAll('.steps .step, .color-grid .color-card').forEach((el,i) => {
        el.style.setProperty('--d', `${(i % 5) * 0.08}s`);
    });
}

function initReveal() {
    applyStagger();
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
}

document.addEventListener('DOMContentLoaded', () => {
    buildGallery();
    initReveal();
});