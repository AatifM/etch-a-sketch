const container = document.querySelector(".container");

function generateDivs(rows, cols) {
    for (let i = 0; i < rows * cols; i++) {
        let div = document.createElement("div");
        container.appendChild(div);
    }
}

document.addEventListener("DOMContentLoaded", (event) => {
    generateDivs(16, 16);
});