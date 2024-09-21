let previewContainer = document.querySelector(".product-preview");
let previewBox = previewContainer.querySelectorAll(".preview");

document.querySelectorAll(".product-container .product").forEach(product => {
    product.onclick = () => {
        previewContainer.style.display = "flex"
        previewContainer.classList.add("active");
        let name = product.querySelector("img").getAttribute("data-name");
        previewBox.forEach(preview => {
            let target = preview.getAttribute("data-target");
            if (name === target) {
                preview.classList.add("active");
            } else {
                preview.classList.remove("active");
            }
        });
    };
});

// Optional: Add functionality to close the modal
previewContainer.onclick = () => {
    previewContainer.style.display = 'none'
    previewContainer.classList.remove("active");
    previewBox.forEach(preview => {
        preview.classList.remove("active");
    });
};