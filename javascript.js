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

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};


function hover(color = 'regular') {
  const hoverSquares = document.querySelectorAll('.grid-column');
  hoverSquares.forEach(square => {
    square.addEventListener('mouseover', () => {
      if (color === 'regular') {
        square.classList.add('grid-hover');
      } else if (color === 'rainbow') {
        square.style.backgroundColor = getRandomColor();
      } else {
        console.log('ERROR');
      }
    });
    /*
    square.addEventListener('mouseout', () => {
      square.classList.remove('grid-hover');
    });
    */
  });
};

createGrid(100);
hover();

function clearGrid() {
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }
};

function resetGrid() {
  clearGrid();
  const resolution = prompt('How many squares per side? (Max: 100)');
  if (resolution <= 100 && resolution > 0) {
    createGrid(resolution);
  } else {
    createGrid(100);
  }
};

const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', () => {
  resetGrid();
  hover();
});


const rainbowButton = document.querySelector('#rainbow');
rainbowButton.addEventListener('click', () => {
  resetGrid();
  hover('rainbow');
});