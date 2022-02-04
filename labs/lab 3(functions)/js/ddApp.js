// Owen Louden, N220, 2/3/22 
//setup function
function setup() {

    createCanvas(1200, 1200);
    
}

//function definition (my arrow)
 function draw() {
    background(204);

    drawArrow(mouseX,mouseY);  

 }

//function I need to invoke and move
function drawArrow() {

    beginShape();
    vertex(180,82);
    vertex(207,36);
    vertex(214,63);
    vertex(407,11);
    vertex(412,30);
    vertex(219,82);
    vertex(226,109);
    endShape(CLOSE);
}
