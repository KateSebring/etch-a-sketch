const sketchContainer = document.querySelector('.sketch-container');

function createGrid() {
    const squareDiv = document.createElement('div');
    squareDiv.setAttribute('class', 'grid-square');
    sketchContainer.appendChild(squareDiv);
}

for (let i = 0; i < 256; i++) {
    createGrid();
}

const squareDiv = document.getElementsByClassName('grid-square');

for (let j = 0; j < squareDiv.length; j++) {
    squareDiv[j].addEventListener("mouseover", () => {
        squareDiv[j].style.backgroundColor = "black";
    })
}