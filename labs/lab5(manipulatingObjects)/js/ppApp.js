//  Owen Louden, 2/15/22, N220-20816 


//make an element

let newEl = document.createElement("div");

newEl.onclick = myFunction
let click = document.querySelector("#greenDiv")

//suppose I'm confused as to whether I need to mess with the div element or the greenDiv ID


//set individual square numerical value
let squareHeWi = 100

//variable that'll affect the square size with "px" identifying it as numerical
let squareSize = squareHeWi + "px"



//customize styles

//change height
greenDiv.style.height = squareSize;

//change width
greenDiv.style.width = squareSize;

//change color to green
greenDiv.style.backgroundColor = "rgb(34, 214, 34)";

//place object on page

document.body.appendChild(newEl);

//notice click input
//which of these is the proper function?
function myFunction() {
    document.getElementById(greenDiv);
    squareSize = squareHeWi * 1.1;
}


click.addEventListener('click', event => {
    function myFunction() {
    squareSize = squareHeWi * 1.1;}
} )
// console.log(squareSize);
//change the objects size

