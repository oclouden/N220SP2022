// Owen Louden, Intro Media Apps, 3/3/22
//Make an application with six divs on the screen, each with a different word.

// When any of the divs is clicked,

// highlight that that div by changing its background color and making the text bold
// remove the bold/background highlight from any other divs
// add the clicked div's text into a seperate div at the top of the screen


let newDiv1 = document.querySelector('#div1');
    newDiv1.innerHTML = "1st Div"

let newDiv2 = document.querySelector('#div2');
newDiv2.innerHTML = "2nd Div"


let newDiv3 = document.createElement("div");

let newDiv4 = document.createElement("div");

let newDiv5 = document.createElement("div");

let newDiv6 = document.createElement("div");

function div1Function() {

    div1.style.backgroundColor = "rgb(34, 214, 34)";
    div1.style.fontWeight = "bold";
}
function div2Function() {

    div2.style.backgroundColor = "rgb(34, 214, 34)";
    div2.style.fontWeight = "bold";
}

if (div1Function = True) {
    div2Function.SetVar("newDiv2","newDiv2")
}

// newDiv1.appendChild(newContent1);

//create the divs

//onclick of any div
//     function 

// //highlight div by changing color, text bold
// newDiv1.style.backgroundColor = "rgb(34, 214, 34)";

// //reset highlight/bold on other divs

// //add click divs text at top of screen