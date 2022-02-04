// Owen Louden, N220, 2/3/22 

//setup function
function setup() {

    createCanvas(1400, 1400);
}

//take drawn function and manipulate it, then repond with output

function draw() {

    drawCircle();

}
function removeRed () {
}


//variable I don't understand
let noRed = removeRed(setColor)
//need function that'll draw circle
 function drawCircle() {
    fill(noRed);
    circle (200,200,200);
 }