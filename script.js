const container = document.getElementById("container");

function makeRows(rows, cols) {
    resetGrid();
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
    };
    draw();
};


function resetGrid() {
    let boxes = document.querySelectorAll(".grid-item");
    boxes.forEach(box => {
        box.remove();
    });
};

function draw() {
    let boxes = document.querySelectorAll(".grid-item");
    boxes.forEach(box => {
        box.addEventListener('mouseover', function () {
            box.style.backgroundColor = "black";
        })
    });
}

makeRows(16, 16);




let resetBtn = document.getElementById("Reset");
resetBtn.addEventListener('click', reset);

function reset() {
        let num = prompt("Please enter the desired number of squares per side.", "16")
        makeRows(num, num);
};


