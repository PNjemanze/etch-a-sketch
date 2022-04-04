
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

function reset(){
    // allows user to select tile size
    let dimension = window.prompt("How big do you want the board (4-100)? (eg. 70)");

    // clear grid and sets up new grid with new dimensions
    while (container.firstChild){
        container.removeChild(container.firstChild);
    }
    grid(dimension);

    // resets grid to original color
    let gridSq = document.querySelectorAll('div.gridBox');
    gridSq.forEach(square => {
            square.style.background = 'white';   
    });

}

let container = document.getElementById("grid");
let clear = document.getElementById("clearBtn");

// start etch-a-sketch with a 16 x 16 grid and black pen
grid(16);
hover();

// checks to see if user has clicked buttons
clear.addEventListener('click', reset);
clear.addEventListener('click', hover);