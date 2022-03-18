let color = "black";
let size = document.querySelector("input");
const btnBlack = document.getElementById("black").onclick = function() {changeColor("black")};
const btnErasor = document.getElementById("erasor").onclick = function() {changeColor("white")};
const btnReset = document.getElementById("reset").onclick = function() {location.reload();}
const btnRainbow = document.getElementById("rainbow").onclick = function() {changeColor("rainbow")};

// Setting Size of Board
function boardSize(size) {
    let grid = document.querySelector(".grid");
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
    for (let i = 0; i < size*size; i++) {
        let square = document.createElement("div");
        square.addEventListener("mouseover", colorSquare); // when mouse is over a square, the square will change color depending on colorSquare
        square.style.backgroundColor = "white";
        grid.append(square);
    }
}

// Displays Board
boardSize(size.value);

// Change Size of Board
function changeSize(input) {
    if (input >= 2 && input <= 100) { // only allows grid to be bigger than 1x1 or smaller than 101x101
        boardSize(input);
    }
    else {
        alert("too less/many squares");
    }
}

// Determine the Color of Each Square
function colorSquare() {
    if (color === "rainbow") {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`; // displays random colours/rainbow
    }
    else {
        this.style.backgroundColor = color;
    }
}

// Change the Color of Each Square
function changeColor(choice) {
    color = choice;
}

// Removes all Drawings in Board
function resetGrid() {
    location.reload(); // reloads web page
}



