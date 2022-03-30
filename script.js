let container = document.getElementById("grid");
for (let i = 0; i < 16; ++i) {
    let row = document.createElement("div");
    row.className = "row";
    for (let j = 0; j < 16; ++j){
        let col = document.createElement("div");
        col.className = "column";
        row.appendChild(col);
    }
    container.appendChild(row);
}