const mainBlock = document.querySelector('.main-block');
mainBlock.style.display = 'flex';
mainBlock.style.flexDirection = 'column';
let n = prompt('Write number');
function choseColor(){
    let r =Math.floor(Math.random() * 256);
    let g =Math.floor(Math.random() * 256);
    let b =Math.floor(Math.random() * 256);
    let color = 'rgb(' + r + ',' + g + ',' + b +')';
    return color;
}
function createCells(p){
    for (let i = 0; i < p; i++){
        const divRow = document.createElement('div');
        mainBlock.prepend(divRow);
        divRow.className = 'row';
        divRow.style.display = 'flex';
        divRow.style.flexDirection = 'row';
        for (let j = 0; j < p; j++){
            const divCell = document.createElement('div');
            divRow.prepend(divCell);
            divCell.style.height = `calc(100vh/${p})`;
            divCell.style.width = `calc(100vw/${p})`;
            divCell.style.backgroundColor = choseColor();
        }
    }
    const colorInerval = document.querySelectorAll('.row > div');
    setInterval(() => { 
        for(i = 0; i < (colorInerval.length-1); i++){
            colorInerval[i].style.backgroundColor = choseColor()
        }}, 500);
}
createCells(n);