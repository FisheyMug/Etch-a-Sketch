const container = document.getElementById("container");

function makeRows(rows, cols) {
  reset();
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  };
};
function reset() {
  let grids =  document. querySelectorAll(".grid-item");
  grids.forEach(grid => {
  grid.remove();
});
};

  
makeRows(16,16);
let grids =  document.querySelectorAll(".grid-item");


grids.forEach(grid => {
    grid.addEventListener('onmouseover', function() {
  grid.style.backgroundColor="black";
})});