//  Owen Louden, 2/15/22, N220-20816 


//unsure of how to do this by altering this div when it's not in the HTML
let newEl = document.createElement("div");

//counter variable to determine when it's been clicked 3x
var count = 0;

//change function carried out when button in HTML is clicked 3x
function change() {

    //add 1 to the count variable
  count++;
  //when it is clicked 3x
  if (count == 3)

  //change the text in the HTML
    document.getElementById("changeText").innerHTML = "divdivdiv";
}