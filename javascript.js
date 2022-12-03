// Create a 16x16 grid of square divs

const gridContainer = document.querySelector('#grid-container');

for (let i = 1; i <= 16; i++) {
  const gridRow = document.createElement('div');
  gridRow.classList.add(`grid-row`);
  gridContainer.appendChild(gridRow);

  for (let j = 1; j <= 16; j++) {
    const gridColumn = document.createElement('div');
    gridColumn.classList.add(`grid-column`);
    gridColumn.textContent = `${j}`;
    gridRow.appendChild(gridColumn);
  }
}

const hoverSquares = document.querySelectorAll('.grid-column');

hoverSquares.forEach(square => {
  square.addEventListener('mouseover', () => {
    square.classList.add('grid-hover');
  });
  
  square.addEventListener('mouseout', () => {
    square.classList.remove('grid-hover');
  });
  
});


