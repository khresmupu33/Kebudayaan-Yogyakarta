// Data destinasi 5 Kabupaten/Kota DIY
const destinations = [
    {
        id: "region-kulonprogo",
        title: "Kulon Progo",
        desc: "The Jewel of Java. Menawarkan keasrian Waduk Sermo, pesona perbukitan Menoreh, serta spot foto alam ikonik Kalibiru dengan pemandangan hijau yang membentang luas.",
        image: "IMG/kulon-progo.jpg"
    },
    {
        id: "region-sleman",
        title: "Sleman",
        desc: "Berada di bawah lereng Gunung Merapi yang megah. Sleman kaya akan wisata budaya kuno seperti Candi Prambanan serta keseruan petualangan alam Lava Tour Merapi.",
        image: "IMG/Sleman.jpg"
    },
    {
        id: "region-kota",
        title: "Kota Yogyakarta",
        desc: "Pusat budaya dan sejarah Javanese heritage. Mulai dari keagungan istana Keraton Yogyakarta, denyut nadi Jalan Malioboro, hingga situs bersejarah Taman Sari.",
        image: "IMG/Kota-Yogyakarta.jpg"
    },
    {
        id: "region-bantul",
        title: "Bantul",
        desc: "Rumah bagi fenomena alam langka Gumuk Pasir Parangkusumo, eksotisme Pantai Parangtritis, serta keasrian alam perbukitan Mangunan.",
        image: "IMG/Bantul.jpg"
    },
    {
        id: "region-gunungkidul",
        title: "Seribu Island / Gunungkidul",
        desc: "The Thousand Islands are rich in marine tourist attractions, the panorama on land to under the sea displays extraordinary charm.",
        image: "IMG/gunung-kidul.png"
    }
];

let currentIndex = 4; // Aktif default di posisi ke-5 (Gunungkidul)

const imgEl = document.getElementById('dest-image');
const titleEl = document.getElementById('dest-title');
const descEl = document.getElementById('dest-desc');
const dotsContainer = document.getElementById('dots-container');

// Fungsi inisialisasi dots menggunakan class custom yang sinkron dengan gaya #sejarah tanpa shadow
function initDots() {
    dotsContainer.innerHTML = '';
    destinations.forEach((_, idx) => {
        const dot = document.createElement('div');
        
        // Memakai class dasar .dest-dot, jika aktif ditambahkan class .active
        if (idx === currentIndex) {
            dot.className = 'dest-dot active';
        } else {
            dot.className = 'dest-dot';
        }
        
        dot.onclick = () => changeDestination(idx);
        dotsContainer.appendChild(dot);
    });
}

function changeDestination(index) {
    currentIndex = index;
    const data = destinations[currentIndex];

    const card = document.getElementById('destination-card');
    card.style.opacity = 0;

    setTimeout(() => {
        imgEl.style.backgroundImage = `url('${data.image}')`;
        titleEl.textContent = data.title;
        descEl.textContent = data.desc;
        card.style.opacity = 1;
    }, 180);

    // Perbarui class active pada Path Peta SVG sesuai CSS global baru
    document.querySelectorAll('.map-region').forEach(path => path.classList.remove('active'));
    
    const activePath = document.getElementById(data.id);
    if (activePath) {
        activePath.classList.add('active');
    }

    initDots();
}

function nextSlide() {
    let next = (currentIndex + 1) % destinations.length;
    changeDestination(next);
}

function prevSlide() {
    let prev = (currentIndex - 1 + destinations.length) % destinations.length;
    changeDestination(prev);
}

// Jalankan inisialisasi awal saat halaman dimuat
changeDestination(currentIndex);