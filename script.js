

function createGrid(gridSize=16){

    const container = document.querySelector('.container');
    
    for(let i = 0; i<gridSize;i++){
        const createDiv = document.createElement('div');
        createDiv.classList.add("grid", "g"+i);
        console.log(createDiv);
        container.appendChild(createDiv);

        createGridColumn(gridSize,i);
    }
}

function createGridColumn(Rows,i){

    const gridColumn = document.querySelector(".g"+i);
    
    for(let j = 0; j<Rows; j++){
        const createDiv = document.createElement('div');
        createDiv.classList.add("row", "row"+i+j);
        console.log(createDiv);
        gridColumn.appendChild(createDiv);
    }
}


createGrid();

