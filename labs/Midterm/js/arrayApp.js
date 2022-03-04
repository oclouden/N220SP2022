//Owen Louden 3/1/22


//create array

let konami = ["up", "up", "down", "down", "down", "left", "right", "left", "right", "a", "b", "start"]

//create div

let newDiv1 = document.querySelector('#div1');




//lets me modify the text in the div1 HTML, and placing the values in konami
document.getElementById("div1").innerHTML = konami + "-";


//how to add the - in between? (Need the loop for this, right?)


//loop the array to show the values
for(i = 0; i < konami.length; i = i+1){
    console.log(konami[i]);
  }


