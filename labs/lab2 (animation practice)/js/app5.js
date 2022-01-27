//Owen Louden, 1/27/22, N220-20816


//set globale variable for radius
let radius = 1;

//setup function, canvas, background
function setup() {

    createCanvas(800,800);
    background(0)
}


//start draw function
function draw() {

    //want to increase radius before dictating where circle is located
    radius += 1

    //position circle with x,y, radius function
    circle(399,399, radius);


    //start loop to determine when radius hits 200 so we can reset
if (radius == 200) {
    //when it gets to this number, reset background
    background(0)
    //and reset radius
    radius = 1;
}

}