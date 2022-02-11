// Owen Louden, N220, 2/10/22 


let virtualPet = {
    xpos: mouseX,
    ypos: mouseY,
    width: 50,
    offsetX: 0,
    // mousemoveX()
    // mousemoveY()
};

function setup() {
    createCanvas(1200,1200);
}


function draw() {
    background(210);

    //this should be how I get my pet friend to follow my mouse position right?
    Element.onmousemove = mouseMoveEventHandler;

    
    //if mouse down
if (mousePressed) 
{offsetx -=1; 
}
//if mouse is up
else() {  //what does that error mean??? '=>' expected why???
offsetx +=1;
}
//draw circle
fill(256,256,256)
circle((mouseX -= offsetx), mouseY, width)
}

Element.onmousemove = null;
