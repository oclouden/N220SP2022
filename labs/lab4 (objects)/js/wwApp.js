// Owen Louden, N220, 2/10/22 

//overall object
let movingCircle = {
        height: 50, //describe circles height
        color:(255,16,122), //describe circles color
        position: 0, //define circles starting position

    };
//variable to change position of circle



//setup function, canvas, background
function setup() {
    createCanvas(800,600)
    background(0);
}

//draw function
function draw() {


    //want to see smooth ball, replace background continuously
    background(0);


//draw a circle + position

//variable to change position of circle
//how will I increase the position of the circle ?
movingCircle.position += 5;

//add a color to make it more fun
fill (movingCircle.color);

//indicate the circle I want to move
circle(movingCircle.position,299,movingCircle.height);

//needs to meet a certain point and wrap itself back around.

//gotta reset the xpos variable in a loop when the xposition increases past a certain point
 if (movingCircle.position > 800) {

    //reset background to show it has restarted
background (0);

    //need to reset the xposition so it can increase again and loop
movingCircle.position = 0;}

}