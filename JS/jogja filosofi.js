document.addEventListener("DOMContentLoaded", function () {
    const nodeCards = document.querySelectorAll(".philosophy-node-card");
    const dynamicFrame = document.getElementById("philosophyDynamicFrame");
    const targetImg = document.getElementById("philosophyTargetImg");
    
    // Element text overlay di atas gambar
    const overlayTitle = document.getElementById("overlayTitle");
    const overlayDesc = document.getElementById("overlayDesc");

    function aktifkanPilar(cardElement) {
        if (!cardElement) return;
        nodeCards.forEach(c => c.classList.remove("active"));
        cardElement.classList.add("active");

        const newImgSrc = cardElement.getAttribute("data-img");
        if (targetImg && newImgSrc) {
            targetImg.setAttribute("src", newImgSrc);
        }

        // Memasukkan teks data-title dan data-desc ke overlay gambar
        if (overlayTitle && overlayDesc) {
            overlayTitle.textContent = cardElement.getAttribute("data-title");
            overlayDesc.textContent = cardElement.getAttribute("data-desc");
        }

        if (dynamicFrame) {
            dynamicFrame.classList.add("lift-up");
        }
    }

    function resetKeDefault() {
        nodeCards.forEach(c => c.classList.remove("active"));
        
        // Kembali ke default pilar pertama (budaya)
        const defaultCard = document.querySelector('[data-node="budaya"]');
        if (defaultCard) {
            defaultCard.classList.add("active");
            if (targetImg) targetImg.setAttribute("src", defaultCard.getAttribute("data-img"));
            if (overlayTitle && overlayDesc) {
                overlayTitle.textContent = defaultCard.getAttribute("data-title");
                overlayDesc.textContent = defaultCard.getAttribute("data-desc");
            }
        }
        
        if (dynamicFrame) {
            dynamicFrame.classList.remove("lift-up");
        }
    }

    nodeCards.forEach(card => {
        card.addEventListener("mouseenter", function () {
            aktifkanPilar(this);
        });

        card.addEventListener("mouseleave", function () {
            resetKeDefault();
        });
    });
});