const IMG = {
    hero: 'IMG/hero-wayang.jpg',
    dalang: 'IMG/dalang.jpg',
    tatah: 'IMG/tatah-detail.jpg',
    wayangGrid: 'IMG/wayang-collection.png',
    process: 'IMG/wayang-performance.jpg',
    keraton: 'IMG/keraton-wayang.jpg',
    palette: 'IMG/karakter-palette.png',
    lifecycle: 'IMG/wayang-lifecycle.jpg',
    preservation: 'IMG/preservation-wayang.png',
    center: 'IMG/center-wayang.png',
    quote: 'IMG/quote.png',
    
    // Daftar Tokoh Wayang
    tokohArjuna: 'IMG/arjuna.jpg',
    tokohBima: 'IMG/bima.jpg',
    tokohYudhistira: 'IMG/yudhistira.jpg',
    tokohGatotkaca: 'IMG/gatotkaca.jpg',
    tokohKresna: 'IMG/kresna.jpg',
    tokohHanoman: 'IMG/hanoman.jpg',
    tokohRahwana: 'IMG/rahwana.jpg',
    tokohSengkuni: 'IMG/sengkuni.jpg',
    tokohSemar: 'IMG/semar.jpg',
    tokohGareng: 'IMG/gareng.jpg',
    tokohPetruk: 'IMG/petruk.jpg',
    tokohBagong: 'IMG/bagong.jpg',
    tokohKarna: 'IMG/karna.jpg',
    tokohDuryudana: 'IMG/duryudana.jpg',
    tokohDrupadi: 'IMG/drupadi.jpg',
    tokohSrikandi: 'IMG/srikandi1.jpg',
    tokohNakula: 'IMG/nakula.jpg',
    tokohSadewa: 'IMG/sadewa.jpg',
    tokohAbimanyu: 'IMG/abimanyu.jpg',
    tokohDrona: 'IMG/drona.jpg',
    tokohBisma: 'IMG/bisma.jpg',
    tokohSubadra: 'IMG/subadra.jpg',
    tokohAntareja: 'IMG/antareja.jpg',
    tokohWisanggeni: 'IMG/wisanggeni1.jpg',
    tokohCakil: 'IMG/cakil1.jpg',
};

function setImg(id,url) {
    const el = document.getElementById(id);
    if (el) el.src = url;
}

// Menyesuaikan ID dengan struktur HTML baru
setImg('img-dalang', IMG.dalang);
setImg('img-tatah', IMG.tatah);
setImg('img-wayang-grid', IMG.wayangGrid);
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

const TOKOH = [
    { name: 'Arjuna', img: IMG.tokohArjuna, phil: 'ketenangan, fokus, dan kepiawaian dalam mencari kebenaran.'},
    { name: 'Bima', img: IMG.tokohBima, phil: 'keberanian luar biasa, kejujuran, dan kekuatan tekad.'},
    { name: 'Yudhistira', img: IMG.tokohYudhistira, phil: 'kebijaksanaan, kesabaran, dan keluhuran budi.'},
    { name: 'Gatotkaca', img: IMG.tokohGatotkaca, phil: 'kepahlawanan, otot kawat tulang besi, dan pengabdian.'},
    { name: 'Kresna', img: IMG.tokohKresna, phil: 'kecerdasan, strategi, dan petunjuk ilahi.'},
    { name: 'Hanoman', img: IMG.tokohHanoman, phil: 'kesetiaan tanpa batas dan pengabdian suci.'},
    { name: 'Rahwana', img: IMG.tokohRahwana, phil: 'sisi ambisius, nafsu duniawi, dan karakter yang kompleks.'},
    { name: 'Sengkuni', img: IMG.tokohSengkuni, phil: 'kelicikan, provokasi, dan simbol intrik politik.'},
    { name: 'Semar', img: IMG.tokohSemar, phil: 'kearifan rakyat, pengayom, dan perpaduan dewa-manusia.'},
    { name: 'Gareng', img: IMG.tokohGareng, phil: 'sikap mawas diri dan kerendahan hati.'},
    { name: 'Petruk', img: IMG.tokohPetruk, phil: 'keluwesan dalam pergaulan dan kecerdasan berpikir.'},
    { name: 'Bagong', img: IMG.tokohBagong, phil: 'kejujuran yang lugu dan keberanian bicara apa adanya.'},
    { name: 'Karna', img: IMG.tokohKarna, phil: 'pengabdian pada janji dan kesetiaan pada sahabat.'},
    { name: 'Duryudana', img: IMG.tokohDuryudana, phil: 'sifat angkara murka yang lahir dari rasa cemburu.'},
    { name: 'Drupadi', img: IMG.tokohDrupadi, phil: 'keteguhan hati wanita dan martabat yang suci.'},
    { name: 'Srikandi', img: IMG.tokohSrikandi, phil: 'keberanian wanita, ketangkasan, dan emansipasi.'},
    { name: 'Nakula', img: IMG.tokohNakula, phil: 'ketampanan dan keahlian dalam memelihara hewan.'},
    { name: 'Sadewa', img: IMG.tokohSadewa, phil: 'kecerdasan dalam meramal dan ketulusan.'},
    { name: 'Abimanyu', img: IMG.tokohAbimanyu, phil: 'semangat kesatria muda yang penuh dedikasi.'},
    { name: 'Drona', img: IMG.tokohDrona, phil: 'ilmu pengetahuan, namun terperangkap dalam pilihan loyalitas.'},
    { name: 'Bisma', img: IMG.tokohBisma, phil: 'sumpah setia, kebijaksanaan, dan integritas hidup.'},
    { name: 'Subadra', img: IMG.tokohSubadra, phil: 'kelembutan hati, kesetiaan, dan ketenangan.'},
    { name: 'Antareja', img: IMG.tokohAntareja, phil: 'kesaktian yang luar biasa dan ketenangan batin.'},
    { name: 'Wisanggeni', img: IMG.tokohWisanggeni, phil: 'jiwa pemberontak yang membela kebenaran.'},
    { name: 'Cakil', img: IMG.tokohCakil, phil: 'simbol nafsu jahat yang harus dikalahkan oleh ketenangan.'},
];

function buildGallery() {
    const grid = document.getElementById("motif-grid");
    if (!grid) return;
    const frag = document.createDocumentFragment();

    TOKOH.forEach((t, i) => {
        const fig = document.createElement('figure');
        fig.className = 'motif reveal';
        fig.style.setProperty('--d', `${(i % 5) * 0.05}s`);

        const img = document.createElement('img');
        img.src = t.img;
        img.alt = `Tokoh wayang ${t.name}`;
        img.loading = 'lazy';

        const name = document.createElement('figcaption');
        name.className = 'motif-name';
        name.textContent = t.name;

        const overlay = document.createElement('div');
        overlay.className = 'motif-overlay';
        const span = document.createElement('span');
        const strong = document.createElement('strong');
        strong.textContent = t.name;
        span.appendChild(strong);
        span.appendChild(document.createTextNode(` adalah tokoh yang melambangkan ${t.phil}`));
        overlay.appendChild(span);

        fig.appendChild(img);
        fig.appendChild(name);
        fig.appendChild(overlay);
        frag.appendChild(fig);
    });

    grid.appendChild(frag);
    document.querySelectorAll('.motif.reveal').forEach((el) => observer.observe(el));
}

// Observer & Init tetap sama agar fungsionalitas scroll tetap berjalan
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px'}
);

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