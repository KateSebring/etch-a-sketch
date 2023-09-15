const sketchContainer = document.querySelector('.sketch-container');

let gridSize = 16;

createGrid();

const btn = document.querySelector('button');
btn.addEventListener('click', () => {
    gridSize = prompt("What size would you like your grid to be?");
    if (gridSize > 100) {
        alert("Value cannot be over 100. Please try again.");
        gridSize = 16;
    } else {
        createGrid();
    }
});

function addEventListenerToTiles() {
    const allGrid = document.querySelectorAll('.grid-square');

    allGrid.forEach (element => {
        element.addEventListener('mouseover', () => {
            element.style.backgroundColor = 'black'
        });
    })
}

function createGrid() {
    sketchContainer.innerHTML = "";
    for (let i = 0; i < (gridSize * gridSize); i++) {
        const squareDiv = document.createElement('div');
        squareDiv.setAttribute('class', 'grid-square');
        squareDiv.style.width = 960 / gridSize + 'px';
        squareDiv.style.height = 960 / gridSize + 'px';
        sketchContainer.appendChild(squareDiv);
    }
    addEventListenerToTiles();
}