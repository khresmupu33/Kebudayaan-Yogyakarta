const IMG = {
    hero: 'IMG/hero-upacara.png',
    ritual: 'IMG/ritual-utama.jpg',
    simbol: 'IMG/simbol-upacara.png',
    upacaraGrid: 'IMG/upacara-collection.png',
    process: 'IMG/ritual-process.jpg',
    keraton: 'IMG/keraton-adat.jpg',
    palette: 'IMG/elemen-palette.jpg',
    lifecycle: 'IMG/upacara-lifecycle.jpg',
    preservation: 'IMG/preservation-adat.png',
    center: 'IMG/center-upacara.png',
    quote: 'IMG/quote.png',

    // Daftar Upacara Adat
    upacaraGrebeg: 'IMG/grebeg.jpg',
    upacaraLabuhan: 'IMG/labuhan.jpg',
    upacaraSekaten: 'IMG/sekaten.jpg',
    upacaraSaparan: 'IMG/saparan.jpg',
    upacaraKirab: 'IMG/kirab.jpg',
    upacaraTumplakWajik: 'IMG/tumplak-wajik.jpg',
    upacaraMertiDusun: 'IMG/merti-dusun.jpg',
    upacaraJumenengan: 'IMG/jumenengan.jpg',
    upacaraSiraman: 'IMG/siraman-pusaka.jpg',
    upacaraMitoni: 'IMG/mitoni.jpeg',
    upacaraWiwitan: 'IMG/wiwitan.jpg',
    upacaraNyadran: 'IMG/nyadran.jpg',
    upacaraLuwaran: 'IMG/luwaran.jpg',
    upacaraSedekahLaut: 'IMG/sedekah-laut.jpg',
    upacaraKhotaman: 'IMG/khotaman.png',
    upacaraTedhakSiten: 'IMG/tedhak-siten.jpg',
    upacaraRasulan: 'IMG/rasulan.jpg',
    upacaraLampahBudaya: 'IMG/lampah-budaya.jpg',
    upacaraSlametan: 'IMG/slametan.jpg',
    upacaraSuran: 'IMG/suran.jpg',
    upacaraBancakan: 'IMG/bancakan.jpg',
    upacaraBrokohan: 'IMG/brokohan.jpeg',
    upacaraSepasaran: 'IMG/sepasaran.jpg',
    upacaraPanggih: 'IMG/panggih.jpg',
    upacaraTingkeban: 'IMG/tingkeban.jpg',
};

function setImg(id, url) {
    const el = document.getElementById(id);
    if (el) el.src = url;
}

setImg('img-ritual', IMG.ritual);
setImg('img-simbol', IMG.simbol);
setImg('img-upacara-grid', IMG.upacaraGrid);
setImg('img-process', IMG.process);
setImg('img-keraton', IMG.keraton);
setImg('img-palette', IMG.palette);
setImg('img-lifecycle', IMG.lifecycle);
setImg('img-preservation', IMG.preservation);

function setBg(selector, url) {
    const el = document.querySelector(selector)
    if (el) el.style.backgroundImage = `url("${url}")`;
}
setBg('.hero-bg', IMG.hero);
setBg('.cta-bg', IMG.center);
setBg('.quote-bg', IMG.quote);

const RITUAL = [
    { name: 'Grebeg', img: IMG.upacaraGrebeg, phil: 'wujud syukur raja kepada rakyat melalui sedekah gunungan.' },
    { name: 'Labuhan', img: IMG.upacaraLabuhan, phil: 'permohonan keselamatan dengan melarung sesaji ke alam semesta.' },
    { name: 'Sekaten', img: IMG.upacaraSekaten, phil: 'dakwah kultural melalui iringan gamelan yang sarat nilai spiritual.' },
    { name: 'Saparan', img: IMG.upacaraSaparan, phil: 'tata cara memohon berkah di bulan Sapar agar terhindar dari mara bahaya.' },
    { name: 'Kirab', img: IMG.upacaraKirab, phil: 'prosesi arak-arakan pusaka sebagai simbol perlindungan masyarakat.' },
    { name: 'Tumplak Wajik', img: IMG.upacaraTumplakWajik, phil: 'simbol gotong royong dan kesiapan lahir-batin menyambut hajatan besar.' },
    { name: 'Merti Dusun', img: IMG.upacaraMertiDusun, phil: 'wujud syukur atas kesuburan tanah dan kesejahteraan warga desa.' },
    { name: 'Jumenengan', img: IMG.upacaraJumenengan, phil: 'penghormatan pada legitimasi takhta sebagai penjaga stabilitas budaya.' },
    { name: 'Siraman Pusaka', img: IMG.upacaraSiraman, phil: 'perawatan sejarah sebagai cara merawat keberkahan leluhur.' },
    { name: 'Mitoni', img: IMG.upacaraMitoni, phil: 'doa harapan agar sang anak tumbuh menjadi pribadi yang luhur.' },
    { name: 'Wiwitan', img: IMG.upacaraWiwitan, phil: 'penghormatan kepada Dewi Sri atas berkah panen yang melimpah.' },
    { name: 'Nyadran', img: IMG.upacaraNyadran, phil: 'merajut tali silaturahmi dengan leluhur dalam penghormatan kasih.' },
    { name: 'Luwaran', img: IMG.upacaraLuwaran, phil: 'penanda selesainya sebuah laku sebagai simbol kematangan jiwa.' },
    { name: 'Sedekah Laut', img: IMG.upacaraSedekahLaut, phil: 'pengakuan manusia atas kekuasaan laut dan permohonan keselamatan.' },
    { name: 'Khotaman', img: IMG.upacaraKhotaman, phil: 'syukur atas selesainya pengembaraan menuntut ilmu spiritual.' },
    { name: 'Tedhak Siten', img: IMG.upacaraTedhakSiten, phil: 'pemberian bekal hidup bagi anak dalam menapaki jalan duniawi.' },
    { name: 'Rasulan', img: IMG.upacaraRasulan, phil: 'pembersihan desa dari noda dan permohonan rahmat Tuhan.' },
    { name: 'Lampah Budaya', img: IMG.upacaraLampahBudaya, phil: 'perjalanan batin menelusuri jejak sejarah untuk memetik hikmah.' },
    { name: 'Slametan', img: IMG.upacaraSlametan, phil: 'upacara paling dasar dalam menjaga keselamatan diri dan komunitas.' },
    { name: 'Suran', img: IMG.upacaraSuran, phil: 'refleksi diri dan introspeksi di awal tahun baru Jawa.' },
    { name: 'Bancakan', img: IMG.upacaraBancakan, phil: 'kebersamaan dalam berbagi rezeki untuk kebahagiaan sesama.' },
    { name: 'Brokohan', img: IMG.upacaraBrokohan, phil: 'syukur atas hadirnya kehidupan baru di dunia.' },
    { name: 'Sepasaran', img: IMG.upacaraSepasaran, phil: 'tasyakuran usia lima hari kehidupan bayi yang penuh berkah.' },
    { name: 'Panggih', img: IMG.upacaraPanggih, phil: 'penyatuan dua jiwa dalam ikatan suci yang direstui semesta.' },
    { name: 'Tingkeban', img: IMG.upacaraTingkeban, phil: 'permohonan doa agar proses kelahiran berjalan selamat dan lancar.' },
];

function buildGallery() {
    const grid = document.getElementById("motif-grid");
    if (!grid) return;
    const frag = document.createDocumentFragment();

    RITUAL.forEach((t, i) => {
        const fig = document.createElement('figure');
        fig.className = 'motif reveal';
        fig.style.setProperty('--d', `${(i % 5) * 0.05}s`);

        const img = document.createElement('img');
        img.src = t.img;
        img.alt = `Upacara ${t.name}`;
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
        span.appendChild(document.createTextNode(` adalah upacara yang melambangkan ${t.phil}`));
        overlay.appendChild(span);

        fig.appendChild(img);
        fig.appendChild(name);
        fig.appendChild(overlay);
        frag.appendChild(fig);
    });

    grid.appendChild(frag);
    document.querySelectorAll('.motif.reveal').forEach((el) => observer.observe(el));
}


function applyStagger() {
    document.querySelectorAll('.steps .step, .color-grid .color-card').forEach((el, i) => {
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