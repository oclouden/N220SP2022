//  Owen Louden, 2/15/22, N220-20816 
//create new Div, not quite sure how to interact when in JS
let newEl = document.createElement("div");

//understand if these objects are being affected by mouseover and mouseout
document.getElementById("newEl").onmouseover = function() {mouseOver()};
document.getElementById("newEl").onmouseout = function() {mouseOut()};


//for mouseover, change color
function mouseOver() {
  document.getElementById("newEl").style.color = "#000000";
}

//for mouseout, change color
function mouseOut() {
  document.getElementById("newEl").style.color = "#87ceeb";
}


//paste div, if I knew how to play with it.
document.body.appendChild(newEl);

