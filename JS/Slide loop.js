document.addEventListener("DOMContentLoaded", function () {
                    const kulinerCards = document.querySelectorAll('.menu-item-card');
                    const totalKulinerSlides = kulinerCards.length;
                    let currentKulinerIndex = 0;
                    let kulinerSlideInterval;
                    const kulinerIntervalTime = 8000; // Putaran otomatis 8 Detik

                    const kulinerPrevBtn = document.getElementById('kulinerPrevBtn');
                    const kulinerNextBtn = document.getElementById('kulinerNextBtn');
                    const kulinerDotsContainer = document.getElementById('kulinerDotsContainer');

                    // 1. Generate Titik Indikator dengan nama class unik kuliner
                    for (let i = 0; i < totalKulinerSlides; i++) {
                        const dot = document.createElement('div');
                        dot.classList.add('kuliner-single-dot');
                        if (i === 0) dot.classList.add('kuliner-dot-active');
                        dot.addEventListener('click', () => {
                            jumpToKulinerSlide(i);
                            restartKulinerTimer();
                        });
                        kulinerDotsContainer.appendChild(dot);
                    }
                    const kulinerDots = document.querySelectorAll('.kuliner-single-dot');

                    // 2. Mengatur Posisi Kelas Kartu (Sirkular Loop)
                    function refreshKulinerCarousel() {
                        kulinerCards.forEach((card, index) => {
                            card.classList.remove('kuliner-status-active', 'kuliner-status-prev', 'kuliner-status-next');

                            if (index === currentKulinerIndex) {
                                card.classList.add('kuliner-status-active');
                            } else if (index === (currentKulinerIndex - 1 + totalKulinerSlides) % totalKulinerSlides) {
                                card.classList.add('kuliner-status-prev');
                            } else if (index === (currentKulinerIndex + 1) % totalKulinerSlides) {
                                card.classList.add('kuliner-status-next');
                            }
                        });

                        // Sinkronisasi status aktif titik indicator
                        kulinerDots.forEach((dot, index) => {
                            dot.classList.toggle('kuliner-dot-active', index === currentKulinerIndex);
                        });
                    }

                    function jumpToKulinerSlide(index) {
                        currentKulinerIndex = index;
                        refreshKulinerCarousel();
                    }

                    function shiftKulinerNext() {
                        currentKulinerIndex = (currentKulinerIndex + 1) % totalKulinerSlides;
                        refreshKulinerCarousel();
                    }

                    function shiftKulinerPrev() {
                        currentKulinerIndex = (currentKulinerIndex - 1 + totalKulinerSlides) % totalKulinerSlides;
                        refreshKulinerCarousel();
                    }

                    // 3. Trigger Navigasi Klik Manual
                    kulinerNextBtn.addEventListener('click', () => {
                        shiftKulinerNext();
                        restartKulinerTimer();
                    });

                    kulinerPrevBtn.addEventListener('click', () => {
                        shiftKulinerPrev();
                        restartKulinerTimer();
                    });

                    // Klik langsung kartu kiri/kanan yang sedang mengintip
                    kulinerCards.forEach((card) => {
                        card.addEventListener('click', () => {
                            if (card.classList.contains('kuliner-status-next')) {
                                shiftKulinerNext();
                                restartKulinerTimer();
                            } else if (card.classList.contains('kuliner-status-prev')) {
                                shiftKulinerPrev();
                                restartKulinerTimer();
                            }
                        });
                    });

                    // 4. Pengatur Putaran Otomatis (Autoplay)
                    function startKulinerTimer() {
                        kulinerSlideInterval = setInterval(shiftKulinerNext, kulinerIntervalTime);
                    }

                    function restartKulinerTimer() {
                        clearInterval(kulinerSlideInterval);
                        startKulinerTimer();
                    }

                    // Jalankan sistem untuk pertama kali
                    refreshKulinerCarousel();
                    startKulinerTimer();
                });