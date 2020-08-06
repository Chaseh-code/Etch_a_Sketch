/*trying to figure out how to add DOM tags with Javascript.
How to add multiple divs (i believe just a for loop) and how 
to also add p tags to the divs before adding them.*/
/*let rowSize = window.prompt("How many rows?");
let columnSize = window.prompt("How man columns?");*/

/* https://alvin-isai.github.io/ 
This is my ref*/

const container = document.querySelector('#container');
const resetbtn = document.querySelector('#reset');
//const rgbbtn = document.querySelector('#rgb');
const rgbbtn = document.getElementById('rgb');
function makeGrid(rowSize, columnSize){
    /*let rowSize = 16;
    let columnSize = 16;*/
    let gridSize = rowSize * columnSize;
    //console.log(rowSize);
    //console.log(isNaN(rowSize));
    container.setAttribute('style', `--grid-rows: ${rowSize}; --grid-cols: ${columnSize};`);
    container.classList.add('grid-container');
    for(i =0; i < gridSize;i++){
        let div = document.createElement('div');
        //div.setAttribute('style','background: lightblue;');
        div.classList.add('grid-item');
        //var para = document.createElement('p');
        //var node = document.createTextNode('butts');
        //para.appendChild(node);
        //div.appendChild(para);
        container.appendChild(div);
        draw(div);
        reset(div);
        rgbbtn.addEventListener('click', () => {
            console.log("cry");
            drawLitty(div);
            //drawRgb(div)
        });
    };
}

function draw(e) {
    e.addEventListener('mouseover', () => {
        e.classList.add('draw');
    });
}

function reset(e) {
    resetbtn.addEventListener('click', () => {
        e.remove('draw');
        //e.setAttribute('style','color: white;');
        e.style.style = 'white';
    });
}

function userGrid() {
    let rowSize = window.prompt("How many rows?", '16');
    let columnSize = window.prompt("How man columns?", '16');
    makeGrid(rowSize, columnSize);
}

function litty(e) {
    const colour = () => {
        const rando = Math.floor(Math.random()*16777215).toString(16);
        e.setAttribute('style',`background: ${'#' + rando};`);
        //e.style.background = '#' + rando;
        console.log("my random number: " + rando);
        //e.setAttribute('style', 'background: red');
    }
    return colour();
}
/*function randomRgb(element) {
    const setBg = () => {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        element.style.background = '#' + randomColor;
    }
    return setBg()//picks a random color
}*/

function drawLitty(e){
    //console.log("farts");
    //const rando = Math.floor(Math.random()*16777215).toString(16);
    //console.log(rando);
    e.addEventListener('mouseover', () => {
        console.log("i did it mom!")
        //e.setAttribute('style',`color: ${litty(e)};`);
        e.style.color = litty(e)
        //const rando = Math.floor(Math.random()*16777215).toString(16);
        //e.style.background = '#' + rando;

        //console.log("can you hear me??");
    });
}
/*function drawRgb(element) {
    //console.log("shit");
    element.addEventListener('mouseover', () => {
        console.log("shit");
        element.style.color = randomRgb(element)
    }); //draws colors on divs
}*/

makeGrid(16,16);