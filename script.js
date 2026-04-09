const container = document.querySelector(".container");
const button = document.querySelector(".size-button");

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

button.addEventListener("click", () => {
    window.prompt("Enter grid length");
});