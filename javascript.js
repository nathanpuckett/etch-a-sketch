const gridContainer = document.querySelector('#grid-container');

function createGrid(resolution) {
  for (let i = 1; i <= resolution; i++) {
    const gridRow = document.createElement('div');
    gridRow.classList.add(`grid-row`);
    gridContainer.appendChild(gridRow);
  
    for (let j = 1; j <= resolution; j++) {
      const gridColumn = document.createElement('div');
      gridColumn.classList.add(`grid-column`);
      // gridColumn.textContent = `${i}`;
      gridRow.appendChild(gridColumn);
    }
  }  
};

function hover() {
  const hoverSquares = document.querySelectorAll('.grid-column');
  hoverSquares.forEach(square => {
    square.addEventListener('mouseover', () => {
      square.classList.add('grid-hover');
    });
    square.addEventListener('mouseout', () => {
      square.classList.remove('grid-hover');
    });
  });
};

createGrid(16);
hover();

function clearGrid() {
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }
};

const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', () => {
  clearGrid();
  const resolution = prompt('number of squares per side?');
  if (resolution <= 100) {
    createGrid(resolution);
  } else {
    createGrid(16);
  }
  hover();
});




