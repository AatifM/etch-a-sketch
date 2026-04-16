const container = document.querySelector(".container");
const sizeModal = document.getElementById("size-modal");
const openButton = document.getElementById("open-modal");
const closeButton = document.getElementById("close-modal");

function generateDivs(rows, cols) {
    for (let i = 0; i < rows * cols; i++) {
        let div = document.createElement("div");
        container.appendChild(div);
        div.addEventListener("mouseenter", (event) => {
            event.target.classList.add("hovered");
        });
    }
}

document.addEventListener("DOMContentLoaded", () => {
    generateDivs(16, 16);
});

openButton.addEventListener("click", () => {
    sizeModal.classList.add("open");
});

closeButton.addEventListener("click", () => {
    sizeModal.classList.remove("open");
});