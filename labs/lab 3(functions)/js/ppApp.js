// Owen Louden, N220, 2/3/22 

//setup function
function setup() {

    createCanvas(800,800)
}


//draw function, need the other polar point function inside?
function draw(){
res == polarPoint()
    circle (res.x,res.y,10)

}

//polar point function creation
function polarPoint() {
let x =r * Math.sin(mouseX); 
let y =r * Math.cos(mouseX)


//last aspect, to get results
return createVector(x,y)
}