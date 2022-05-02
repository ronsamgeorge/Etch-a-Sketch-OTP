

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
function onHover(e,from){
    
    console.log("draw");
    const targetDivId = this.id;
    const targetDiv = document.querySelector('#'+targetDivId);
    //console.log(targetDiv);

    if (mode === "erase"){
        targetDiv.classList.remove('row-hover');
    }else {
    targetDiv.classList.add('row-hover');
    }
}


//onReset will clear the canvas when reset button is clicked. By removing class
function onReset(e){

    const allCells = document.querySelectorAll(".row");
    allCells.forEach(cell => cell.classList.remove("row-hover"));
}


//Function executes when Change Grid Dimension is clicked
function onChangeGrid(e){
    const newGridSize = prompt("Enter new Grid Size(<=100)");

    if((newGridSize > 100) || (newGridSize == null) || (newGridSize.length === 0)){
        alert("Grid Size should be between 0 and 100.");
        return;
    }

    mode = "draw";
    const gridContainer = document.querySelector('.container');

    while(gridContainer.hasChildNodes()){
        gridContainer.removeChild(gridContainer.firstChild);
    }
    createGrid(newGridSize);
    return;
}




function onErase(e){
    mode = "erase";
    const hoveredCells = document.querySelectorAll(".row");
    hoveredCells.forEach(cell => cell.addEventListener('mouseover',onHover));
}



function onDraw(e){
   mode ='draw';
   const hoveredCells = document.querySelectorAll(".row");
    hoveredCells.forEach(cell => cell.addEventListener('mouseover',onHover));
}



let mode = 'draw';
createGrid();

//functionality for buttons
const resetButton = document.querySelector(".reset-btn");
resetButton.addEventListener('click',onReset);

const gridChange = document.querySelector(".change-grid-btn");
gridChange.addEventListener('click', onChangeGrid);

const randomColor = document.querySelector(".eraser-btn");
randomColor.addEventListener('click', onErase);

const drawButton = document.querySelector('.draw-btn');
drawButton.addEventListener('click', onDraw);





