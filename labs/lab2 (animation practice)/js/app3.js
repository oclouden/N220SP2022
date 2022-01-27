//Owen Louden, 1/27/22, N220-20816

//variable to change position of circle
xpos = 0


//setup function, canvas, background
function setup() {

    createCanvas(800,600)
    background(0);
}


//draw function
function draw() {
//draw a circle + position

//how will I increase the position of the circle ?
xpos += 5;

//add a color to make it more fun
fill (235, 64, 52)

//indicate the circle I want to move
ellipse(xpos,299,50,50);

//needs to meet a certain point and wrap itself back around.

//gotta reset the xpos variable in a loop when the xposition increases past a certain point
 if (xpos > 800) {

    //reset background to show it has restarted
background (0);

    //need to reset the xposition so it can increase again and loop
xpos = 0;}

}