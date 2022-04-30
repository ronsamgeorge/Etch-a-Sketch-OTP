

function createGrid(gridSize=16){


    const container = document.querySelector('.container');
    
   for(let i = 0; i<gridSize;i++){
        const createDiv = document.createElement('div');
        createDiv.classList.add("draw-border", "grid"+i);
        console.log(createDiv);
        container.appendChild(createDiv);

        //createGridRow(gridSize,i);
    }

    

}



createGrid();

