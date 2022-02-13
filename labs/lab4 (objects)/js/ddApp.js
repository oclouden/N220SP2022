// Owen Louden, N220, 2/10/22 xxx

//create object that displays width,height,color, posX/Y for our object
let ourGraphic = {
width: 50,
height: 50,
color: (256,256,256),
posX: 600,
posY: 600,

}

//need setup function and canvas
function setup() {
    createCanvas(1200,1200)
}
//draw function
function draw() {
//give it some color to see our object
    fill(0,0,0)

    //our object we are filling... using the object descriptor we created earlier
    rect(ourGraphic.posX,ourGraphic.posY,ourGraphic.height,ourGraphic.width)
}


//create new function (take 1 argument)

function draw() {

}

//draw object to screen using argument

//pass object to that function as an argument, and have function draw object to the screen...
