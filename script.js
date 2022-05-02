

function createGrid(gridSize=16){

    const container = document.querySelector('.container');
    
    for(let i = 0; i<gridSize;i++){
        const createDiv = document.createElement('div');
        createDiv.classList.add("grid", "g"+i);
        //console.log(createDiv);
        container.appendChild(createDiv);

        createGridColumn(gridSize,i);
    }

    //to get the new DOM cells
    const hoveredCells = document.querySelectorAll(".row");
    hoveredCells.forEach(cell => cell.addEventListener('mouseover',onHover));
}

function createGridColumn(Rows,i){

    const gridColumn = document.querySelector(".g"+i);
    
    for(let j = 0; j<Rows; j++){
        const createDiv = document.createElement('div');
        createDiv.classList.add("row");
        createDiv.id  = "r"+i+"c"+j;
        //console.log(createDiv);
        gridColumn.appendChild(createDiv);
    }
}


//Adds the row-hover class, which adds the color class to the cell
function onHover(e){
    //console.log(this.id);
    const targetDivId = this.id;
    const targetDiv = document.querySelector('#'+targetDivId);
    targetDiv.classList.add('row-hover');
}


//onReset will clear the canvas when reset button is clicked. By removing class
function onReset(e){

    const allCells = document.querySelectorAll(".row");

    console.log(allCells[1]);
    allCells.classList.remove("row-hover");
    
}


//Function executes when Change Grid Dimension is clicked
function onChangeGrid(e){
    const newGridSize = prompt("Enter new Grid Size(<=100)");
    console.log(newGridSize);

    if(newGridSize > 100){
        alert("Grid Size can't be more than 100.");
        return;
    }

    const gridContainer = document.querySelector('.container');

    while(gridContainer.hasChildNodes()){
        gridContainer.removeChild(gridContainer.firstChild);
    }
    createGrid(newGridSize);
    return;
}



//EraserFunction
function onEraseHover(){
    const targetDivId = this.id;
    const targetDiv = document.querySelector('#'+targetDivId);
    targetDiv.classList.remove('row-hover');
}

function onErase(e){
    const hoveredCells = document.querySelectorAll(".row");
    hoveredCells.forEach(cell => cell.addEventListener('mouseover',onEraseHover));
}

createGrid();



const resetButton = document.querySelector(".reset-btn");
resetButton.addEventListener('click',onReset);

const gridChange = document.querySelector(".change-grid-btn");
gridChange.addEventListener('click', onChangeGrid);

const randomColor = document.querySelector(".eraser-btn");
randomColor.addEventListener('click', onErase);

/* Initially the hoverevent was handled here but since has been tranferred to the
createGrid function because each time the grid is changed, we need to update the NodeList as well

const hoveredCells = document.querySelectorAll(".row");
hoveredCells.forEach(cell => cell.addEventListener('click',onHover));*/




