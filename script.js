let container = document.getElementById("grid");

// creates square grid with specified dimensions
function grid(length){
    
    for (let i = 0; i < length; ++i) {
        for (let i = 0; i < length; ++i) {
            let box = document.createElement('div');
            box.classList.add('gridBox');

            // sets grid boxes to equal sizes within the grid
            container.style.gridTemplateRows = `repeat(${length}, 1fr)`;
            container.style.gridTemplateColumns = `repeat(${length}, 1fr)`;

            container.appendChild(box);
        }
    }
}

// changes colors of grid boxes that the mouse hovers over to black
function hover(){
    let gridSq = document.querySelectorAll('div.gridBox');
    gridSq.forEach(square => square.addEventListener('mouseenter', () => {
            square.style.background = 'black';
        
    }));
}



// start etch-a-sketch with a 16 x 16 grid and black pen
grid(16);
hover();