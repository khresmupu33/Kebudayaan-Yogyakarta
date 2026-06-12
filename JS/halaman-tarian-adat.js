const IMG = {
    hero: 'IMG/hero-tari.png',
    essence: 'IMG/essence-tari.jpg',
    nusantara: 'IMG/nusantara-tari.png',
    preservation: 'IMG/preservation-tari.png',
    process: 'IMG/process-tari.png',
    pementasan: 'IMG/pementasan.png',
    palletebusana: 'IMG/pallete-busana.png',
    lifecycletari: 'IMG/lifecycle-tari.jpg',
    center: 'IMG/center-tari.png',
    quote: 'IMG/quote.png',
    ragam: 'IMG/ragam.png',
    
    // Daftar Tarian Adat
    tariBedhaya: 'IMG/bedhaya.jpg',
    tariSrimpi: 'IMG/srimpi.jpg',
    tariGolek: 'IMG/golek.jpg',
    tariKlanaTopeng: 'IMG/klanatopeng.jpg',
    tariLawung: 'IMG/lawung.jpg',
    tariBeksan: 'IMG/beksan.jpg',
    tariEdanEdanan: 'IMG/edanedanan.jpg',
    tariJathilan: 'IMG/jathilan.jpg',
    tariAngguk: 'IMG/angguk.jpg',
    tariKethoprak: 'IMG/kethoprak.jpg',
    tariPrajurit: 'IMG/prajurit.jpg',
    tariLambangsari: 'IMG/lambangsari.jpg',
    tariMenak: 'IMG/menak.jpg',
    tariBondan: 'IMG/bondan.jpg',
    tariRetnoTinanding: 'IMG/retnotinanding.png',
    tariKuntulan: 'IMG/kuntulan.jpg',
    tariKudaLumping: 'IMG/kudalumping.jpg',
    tariBambanganCakil: 'IMG/cakil.jpg',
    tariGambyong: 'IMG/gambyong.jpg',
    tariPuspawresti: 'IMG/puspawresti.jpg',
    tariSrikandi: 'IMG/srikandi.jpg',
    tariWanara: 'IMG/wanara.jpg',
    tariTrunajaya: 'IMG/trunajaya.jpg',
    tariWireng: 'IMG/wireng.png',
    tariDadungAwuk: 'IMG/dadungawuk.jpg',
};

function setImg(id, url) {
    const el = document.getElementById(id);
    if (el) el.src = url;
}

// Update ID elemen sesuai dengan section di halaman tarian
setImg('img-preservation-tari', IMG.preservation)
setImg('img-hero-tari', IMG.hero)
setImg('img-ragam', IMG.ragam)
setImg('img-essence', IMG.essence);
setImg('img-nusantara', IMG.nusantara);
setImg('img-process', IMG.process);
setImg('img-pementasan', IMG.pementasan);
setImg('img-palletebusana', IMG.palletebusana);
setImg('img-lifecycletari', IMG.lifecycletari);

function setBg(selector, url) {
    const el = document.querySelector(selector)
    if (el) el.style.backgroundImage = `url("${url}")`;
}
setBg('.hero-bg', IMG.hero);
setBg('.cta-bg', IMG.center);
setBg('.quote-bg', IMG.quote);

// Data Tarian
const DANCES = [
    { name: 'Bedhaya', img: 'IMG/bedhaya.jpg', phil: 'kesakralan, ketenangan, dan keseimbangan semesta.' },
    { name: 'Srimpi', img: 'IMG/srimpi.jpg', phil: 'kehalusan budi, kesabaran, dan pengendalian diri.' },
    { name: 'Golek Menak', img: 'IMG/golek.jpg', phil: 'keanggunan gerak wanita yang sedang bersolek.' },
    { name: 'Klana Topeng', img: 'IMG/klanatopeng.jpg', phil: 'ekspresi watak keras dan penuh amarah yang terkendali.' },
    { name: 'Lawung', img: 'IMG/lawung.jpg', phil: 'latihan ketangkasan prajurit dengan tombak.' },
    { name: 'Beksan', img: 'IMG/beksan.jpg', phil: 'jiwa kepahlawanan dan kesetiaan pada tugas.' },
    { name: 'Edan-Edanan', img: 'IMG/edanedanan.jpg', phil: 'simbol penolak bala dan kegembiraan dalam upacara.' },
    { name: 'Jathilan', img: 'IMG/jathilan.jpg', phil: 'semangat kegagahan prajurit berkuda.' },
    { name: 'Angguk', img: 'IMG/angguk.jpg', phil: 'perpaduan gerak tari dengan lantunan zikir.' },
    { name: 'Kethoprak', img: 'IMG/kethoprak.jpg', phil: 'drama kehidupan yang sarat akan pesan moral.' },
    { name: 'Prajurit', img: 'IMG/prajurit.jpg', phil: 'disiplin dan kekuatan militer keraton.' },
    { name: 'Lambangsari', img: 'IMG/lambangsari.jpg', phil: 'kecantikan wanita yang mekar dan mempesona.' },
    { name: 'Menak', img: 'IMG/menak.jpg', phil: 'epos perjuangan yang penuh dengan keagungan.' },
    { name: 'Bondan', img: 'IMG/bondan.jpg', phil: 'kasih sayang seorang ibu kepada anaknya.' },
    { name: 'Retno Tinanding', img: 'IMG/retnotinanding.png', phil: 'pertarungan kesetaraan antara dua prajurit wanita.' },
    { name: 'Kuntulan', img: 'IMG/kuntulan.jpg', phil: 'pemujaan syukur kepada Sang Pencipta.' },
    { name: 'Kuda Lumping', img: 'IMG/kudalumping.jpg', phil: 'ketangguhan jiwa manusia di atas keterbatasan fisik.' },
    { name: 'Bambangan Cakil', img: 'IMG/cakil.jpg', phil: 'perlawanan kebaikan melawan keserakahan.' },
    { name: 'Gambyong', img: 'IMG/gambyong.jpg', phil: 'keluwesan gerak sebagai simbol kesuburan.' },
    { name: 'Puspawresti', img: 'IMG/puspawresti.jpg', phil: 'tarian penyambutan yang penuh dengan keindahan.' },
    { name: 'Srikandi', img: 'IMG/srikandi.jpg', phil: 'kemandirian dan ketangkasan wanita dalam bertindak.' },
    { name: 'Wanara', img: 'IMG/wanara.jpg', phil: 'kelincahan dan kesetiaan pasukan kera.' },
    { name: 'Trunajaya', img: 'IMG/trunajaya.jpg', phil: 'jiwa muda yang bergejolak dan penuh semangat.' },
    { name: 'Wireng', img: 'IMG/wireng.png', phil: 'keberanian dan ketangkasan prajurit tanpa senjata.' },
    { name: 'Dadung Awuk', img: 'IMG/dadungawuk.jpg', phil: 'kepemimpinan dan wibawa dalam mengelola rakyat.' },
];

function buildDanceGallery() {
    const grid = document.getElementById("motif-grid");
    if (!grid) return;
    
    const frag = document.createDocumentFragment();

    DANCES.forEach((d, i) => {
        const fig = document.createElement('figure');
        fig.className = 'motif reveal';
        fig.style.setProperty('--d', `${(i % 5) * 0.05}s`);

        const img = document.createElement('img');
        img.src = d.img;
        img.alt = `Tari ${d.name}`;
        img.loading = 'lazy';

        const name = document.createElement('figcaption');
        name.className = 'motif-name';
        name.textContent = d.name;

        const overlay = document.createElement('div');
        overlay.className = 'motif-overlay';
        
        const span = document.createElement('span');
        const strong = document.createElement('strong');
        strong.textContent = d.name;
        
        span.appendChild(strong);
        span.appendChild(document.createTextNode(` Tarian ini melambangkan ${d.phil}`));
        overlay.appendChild(span);

        fig.appendChild(img);
        fig.appendChild(name);
        fig.appendChild(overlay);
        frag.appendChild(fig);
    });

    grid.appendChild(frag);
    document.querySelectorAll('.motif.reveal').forEach((el) => observer.observe(el));
}

document.addEventListener('DOMContentLoaded', () => {
    buildDanceGallery();
});