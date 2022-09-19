const etchContainer = document.getElementById("container");

let gridRow = 16;
let gridCol = 16;

function makeGrid(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        cell.innerText = " ";
        container.appendChild(cell).className = "gridItem";
    };
  };

  makeGrid(gridRow, gridCol);
  