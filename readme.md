# Jogja Culture - Web Edukasi & Informasi Kebudayaan Yogyakarta

![Status Proyek](https://img.shields.io/badge/Project-Tugas%20Besar%20Webdas-brown)
![Tahun Proyek](https://img.shields.io/badge/Year-2026-gold)


---

## 👥 Tim Pengembang & Pembagian Tugas Utama

Proyek Tugas Besar (TUBES) Pemrograman Web Dasar ini dikembangkan secara kolaboratif oleh tim kami dengan pembagian halaman sebagai berikut:

### 1. Khresmupu (Lead Developer / Core Layout)
Bertanggung jawab atas arsitektur halaman utama, pemetaan, sejarah dasar, dan integrasi modernitas Jogja:
* `halaman-beranda.html` (Pusat Hub / Beranda Utama)
* `halaman-sejarah.html` (Menu Utama Sejarah Mataram & Yogyakarta)
* `halaman-peta-jogja.html` (Menu Peta Navigasi Interaktif)
* `halaman-teknologi.html` (Menu Utama & Sub-Halaman Teknologi):
  * `halaman-smart-city.html`
  * `halaman-kota-pelajar.html`
  * `halaman-industri-modern.html`
* `halaman-info.html` (Menu Tentang Kami / Profil Anggota Kelompok)

### 2. stseven77 (Content & Culture Specialist)
Bertanggung jawab atas visualisasi kebudayaan, agenda kota, destinasi, dan profil informasi kelompok:
* `halaman-budaya.html` (Menu Utama & Sub-Halaman Kebudayaan):
  * `halaman-batik.html` 
  * `halaman-tarian-adat.html` 
  * `halaman-wayang.html` 
  * `halaman-upacara-adat.html`
* `halaman-destinasi.html` (Menu Utama & Sub-Halaman Pariwisata):
  * `halaman-wisata-alam.html` 
  * `halaman-wisata-sejarah.html` 
  * `halaman-wisata-budaya.html`
* `halaman-event.html` (Agenda & Pagelaran Seni)

### 3. RolandMF (Culinary Curator)
Bertanggung jawab atas kurasi kuliner legendaris dan jajanan autentik Yogyakarta:
* `halaman-kuliner.html` (Menu Utama & Sub-Halaman Kuliner):
  * `halaman-makanan-tradisional.html` 
  * `halaman-jajanan-khas.html` 
  * `halaman-minuman-khas.html`
* `halaman-beranda.html` (konsep awal)

---

## Eksplorasi Isi Konten Utama (Ringkasan Data Beranda & Detail Halaman)

Seluruh data teks dan konten di dalam website ini diambil langsung dari narasi otentik kebudayaan Yogyakarta:

### A. Rangkuman Konten di Halaman Beranda (`halaman-beranda.html`)
* **Filosofi Tiga Poros (Seribu Wajah Jogja):**
  * **Culture & Heritage:** Keagungan arsitektur istana (Keraton), kelembutan tarian klasik, alunan gamelan, serta kawasan pusaka seperti Malioboro.
  * **Culinary & Hospitality:** Kehangatan wedang ronde, angkringan pinggir jalan, serta kuliner legendaris yang dimasak tradisional.
  * **Nature & Landscape:** Bentang alam dramatis mulai dari puncak Merapi, tebing karst Gunungkidul, hingga matahari terbenam di Parangtritis.
* **Lintasan Sejarah & Sumbu Imajiner:** * Sejarah berdirinya Yogyakarta sejak Perjanjian Giyanti (1755) di bawah Sri Sultan Hamengkubuwono I.
  * Penjelasan Garis Kosmis Sumbu Imajiner (1756) yang menghubungkan Gunung Merapi (Utara), Keraton (Tengah), dan Pantai Parangtritis (Selatan).
  * Peran Yogyakarta sebagai Ibu Kota Perjuangan RI (1946–1950).
* **Warisan Kuliner:** Ringkasan resep keraton asli abad ke-19 seperti Gudeg, camilan legendaris Bakpia Pathuk, dan keunikan Sate Klathak Imogiri yang dibakar menggunakan jeruji besi sepeda.
* **Mosaik Pariwisata Terpadu:** Pengelompokan destinasi menjadi Wisata Alam (Lava Tour, HeHa Sky View), Wisata Sejarah (Taman Sari, Kotagede, Vredeburg), dan Wisata Budaya (Pasar Beringharjo, Museum Affandi).

### B. Isi Khusus Halaman Info / Tentang Kami (`halaman-info.html`)
* **Profil Tim Pengembang:** Berisi kartu identitas digital (Developer Cards) dari Khresmupu, Steven, dan Roland lengkap dengan foto profil, peran, serta tautan sosial media interaktif (LinkedIn, Instagram, GitHub).
* **Latar Belakang Proyek:** Dokumentasi mengenai alasan pembuatan website **Jogja Culture** sebagai pemenuhan Tugas Besar Webdas sekaligus media digital pelestarian warisan budaya Mataram.
* **Kontribusi & Visi:** Penjelasan mengenai dedikasi kelompok dalam merancang antarmuka web yang responsif, estetik, dan ramah pengguna untuk mengenalkan Yogyakarta ke kancah internasional.

---

##  Aturan Pengembangan & Ketentuan Kode Proyek

Untuk menjaga konsistensi kode agar tidak bentrok saat proses penggabungan (*merging*), seluruh anggota tim wajib mematuhi standar baku berikut:

1. **Format Penamaan File:** Wajib menggunakan format lowercase `halaman-[nama-fitur].html` dan file style pendukung `[Fitur].css` yang selaras (contoh: `halaman-sejarah.html` pasangan dari `Sejarah.css`).
2. **Arsitektur CSS Modular:** Jika baris kode CSS untuk suatu halaman sudah mendekati atau melebihi 100 baris, wajib dipecah berdasarkan fiturnya (seperti `navbar.css`, `footer.css`, `hero.css`, `responsive.css`), lalu dikelompokkan ke dalam folder khusus di dalam direktori `CSS/`.
3. **Sistem Pewarnaan (CSS Variables):** Pengaturan warna elemen wajib merujuk pada variabel tema etnik Mataram yang dideklarasikan di `:root`:
   ```css
   :root {
       --brown-dark: #2C1A0E;      /* Latar belakang gelap / teks utama */
       --brown-mid: #6B3A1F;       /* Warna dasar / background standar */
       --brown-warm: #A0522D;      /* Aksen hangat */
       --brown-light: #C8885A;     /* Highlight sekunder */
       --gold: #D4A250;            /* Warna emas khas ornamen keraton */
       --cream: #FFF8F0;           /* Background konten terang */
       --cream-dark: #F0E0CC;      /* Elemen sekunder terang */
       --cream-border: #E8C9A8;    /* Garis tepi komponen */
       --text-dark: #1C0F06;       /* Teks kontras tinggi */
       --text-mid: #5A3020;        /* Teks sekunder */
       --zinc: #18181b;            /* Elemen gelap netral */
   }

##  Struktur Repositori 

Arsitektur direktori proyek ini disusun secara modular agar rapi saat di-deploy atau dipresentasikan:

```text
├── CSS/
│   ├── Beranda/            # CSS Khusus Pecahan Beranda (Modular)
│   │   ├── destinasi.css
│   │   ├── event.css
│   │   ├── hero.css
│   │   └── ...
│   ├── Dasar HTML.css      # Base style global
│   ├── Navigasi.css        # Style Navbar & Dropdown global
│   ├── footer.css          # Style Footer global
│   └── ...
├── JS/
│   ├── Navigasi.js         # Logika interaktif mobile menu & desktop
│   ├── Map Destinasi.js    # Interaktivitas SVG Peta Jogja
│   └── ...
├── IMG/                    # Asset gambar dan ikon pendukung
├── halaman-beranda.html    # Halaman Utama (Pusat Hub Fitur)
├── halaman-sejarah.html
├── halaman-budaya.html
└── ... (halaman lainnya sesuai pembagian tugas)
