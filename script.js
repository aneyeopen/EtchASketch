const etchContainer = document.getElementById("container");

let gridRow = 16;
let gridCol = 16;

const ClearButton = document.getElementById('clearButton');

let activeColor =  document.getElementById("color").value;

function colorCheck(activeColor) {
    let selectedColor = document.getElementById("color").value;
    console.log(selectedColor)
    if (selectedColor = 'Red') {
        activeColor = 'Red';
    }else {
        activeColor = "Black";
    } return activeColor;
}

function makeGrid(rows, cols, activeColor) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    colorCheck(activeColor);
    let color = activeColor;
    console.log(color);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        cell.innerText = " ";
        container.appendChild(cell).className = "gridItem unPainted";
        cell.addEventListener('mouseover', 
        e => e.target.classList.add(color))
    };
  };


  function reloadGrid() {
    clearGrid();
    makeGrid(gridRow, gridCol, activeColor);
  }
  
  function clearGrid() {
    etchContainer.innerHTML = ''
  }

  makeGrid(gridRow, gridCol, activeColor);

  clearButton.addEventListener('click', (event) => {reloadGrid()});


  


  