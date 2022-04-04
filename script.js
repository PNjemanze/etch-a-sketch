
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

// changes colors of grid boxes that the mouse hovers over to color selected
function hover(){
    let gridSq = document.querySelectorAll('div.gridBox');
    gridSq.forEach(square => square.addEventListener('mouseenter', () => {
            square.style.background = color;
        
    }));
}

// takes input from color selector and changes paint color
function changeCol(event){
       color = event.target.value;
       hover();
}

// changes color of painter randomly as mouse hovers over boxes
function rgbColChange(){
    let gridSq = document.querySelectorAll('div.gridBox');
    gridSq.forEach(square => square.addEventListener('mouseenter', () => {
        let r = Math.floor((Math.random() * 255) + 1);
        let g = Math.floor((Math.random() * 255) + 1);
        let b = Math.floor((Math.random() * 255) + 1);
        
        square.style.background = `rgb(${r}, ${g}, ${b})`;
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

    // resets grid and painter to original color
    let gridSq = document.querySelectorAll('div.gridBox');
    gridSq.forEach(square => {
            square.style.background = 'white';   
    });
    color = '#000000';

}


// calls the needed variables from the HTML file
let container = document.getElementById("grid");
let oneCol = document.getElementById("colChoice");
let rgbCol = document.getElementById("rgbBtn");
let clear = document.getElementById("clearBtn");

// start etch-a-sketch with a 16 x 16 grid and black painter
grid(16);
let color = '#000000'
hover();

// checks to see if user has clicked buttons
clear.addEventListener('click', reset);
clear.addEventListener('click', hover);
oneCol.addEventListener('input',changeCol,false);
rgbCol.addEventListener('click', rgbColChange);