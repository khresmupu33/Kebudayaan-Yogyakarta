// Data destinasi 5 Kabupaten/Kota DIY
const destinations = [
{
        id: "region-kulonprogo",
        title: "Kulon Progo",
        desc: "Permata tersembunyi di Barat Yogyakarta. Nikmati ketenangan Waduk Sermo, kemegahan Perbukitan Menoreh, hingga ikon wisata Kalibiru yang menawarkan panorama alam hijau sejauh mata memandang.",
        image: "IMG/kulon-progo.jpg"
    },
    {
        id: "region-sleman",
        title: "Sleman",
        desc: "Bersemayam di bawah megahnya lereng Gunung Merapi. Sleman memadukan keagungan sejarah Candi Prambanan dengan keseruan petualangan Lava Tour yang memacu adrenalin.",
        image: "IMG/Sleman.jpg"
    },
    {
        id: "region-kota",
        title: "Kota Yogyakarta",
        desc: "Jantung budaya Jawa yang tak pernah tidur. Telusuri kemegahan Keraton Yogyakarta, nikmati denyut nadi Jalan Malioboro, dan selami rahasia sejarah di situs ikonik Taman Sari.",
        image: "IMG/Kota-Yogyakarta.jpg"
    },
    {
        id: "region-bantul",
        title: "Bantul",
        desc: "Surga eksotisme selatan Yogyakarta. Rasakan sensasi gurun di Gumuk Pasir Parangkusumo, deburan ombak Pantai Parangtritis, hingga sejuknya hutan pinus di perbukitan Mangunan.",
        image: "IMG/Bantul.jpg"
    },
    {
        id: "region-gunungkidul",
        title: "Gunungkidul",
        desc: "Negeri seribu surga di tepi samudra. Gunungkidul memanjakan Anda dengan deretan pantai pasir putih yang menawan serta kekayaan alam bawah laut yang luar biasa mempesona.",
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