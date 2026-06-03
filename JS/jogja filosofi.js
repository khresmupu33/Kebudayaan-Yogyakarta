document.addEventListener("DOMContentLoaded", function () {
    const nodeCards = document.querySelectorAll(".philosophy-node-card");
    const dynamicFrame = document.getElementById("philosophyDynamicFrame");
    const targetImg = document.getElementById("philosophyTargetImg");
    
    // Element text overlay di atas gambar
    const overlayTitle = document.getElementById("overlayTitle");
    const overlayDesc = document.getElementById("overlayDesc");

    function aktifkanPilar(cardElement) {
        if (!cardElement) return;
        
        // Hapus class active dari semua, tambahkan ke yang di-hover
        nodeCards.forEach(c => c.classList.remove("active"));
        cardElement.classList.add("active");

        // Update gambar
        const newImgSrc = cardElement.getAttribute("data-img");
        if (targetImg && newImgSrc) {
            targetImg.setAttribute("src", newImgSrc);
        }

        // Update teks overlay
        if (overlayTitle && overlayDesc) {
            overlayTitle.textContent = cardElement.getAttribute("data-title");
            overlayDesc.textContent = cardElement.getAttribute("data-desc");
        }

        // Trigger animasi frame
        if (dynamicFrame) {
            dynamicFrame.classList.add("lift-up");
            // Hapus class lift-up setelah animasi selesai agar bisa terpicu lagi
            setTimeout(() => dynamicFrame.classList.remove("lift-up"), 500);
        }
    }

    // Menghapus fungsi resetKeDefault dan event mouseleave
    nodeCards.forEach(card => {
        card.addEventListener("mouseenter", function () {
            aktifkanPilar(this);
        });
        
        // Event mouseleave dihapus agar kondisi terakhir tetap bertahan
    });
});