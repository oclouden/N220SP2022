
var w = 10;
var h = 10;

function setup() {
createCanvas(800,600);
}


function draw() {
background(200)

    ellipse(mouseX, mouseY, w, [h])
   if (mouseIsPressed == true) {
       w += 1;
     h += 1;
   } 
}
