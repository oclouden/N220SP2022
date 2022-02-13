//Owen Louden, 1/27/22, N220-20816

//set beginning global variable
let counter = 0;


//setup function w canvas
function setup() {

    createCanvas(1000, 1000)

}

//draw function
function draw() {

    //want to increase variable "counter" per frame per second
    counter = counter + 1;

    //output into the console
    console.log(counter);
}