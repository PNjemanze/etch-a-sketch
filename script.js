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

// start etch-a-sketch with a 16 x 16 grid
grid(16);