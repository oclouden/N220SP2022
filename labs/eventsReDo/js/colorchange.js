// Owen Louden, Events ReDo, 5/2/22


// Struggling on how to just include it in the one event handler, maybe I'd need the event.target to do that?




const red = document.getElementById('redSquare');

red.addEventListener('click', function onClick(event) {

  // change background color
  event.target.style.backgroundColor = 'FF0000';
});





const green = document.getElementById('greenSquare');

green.addEventListener('click', function onClick(event) {
  // 👇️ change background color
  event.target.style.backgroundColor = '00FF00';
});




const blue = document.getElementById('blueSquare');

blue.addEventListener('click', function onClick(event) {
  // 👇️ change background color
  event.target.style.backgroundColor = '0000FF';
});




// Second Attempt using arrays, I don't get very far...

// let clicked = document.getElementsByClassName('square').addEventListener('click', changedColor);

// let changedColor = ["red", "green", "blue"];

// if (id='redSquare') {
//     event.target.style.backgroundColor = 'red';
// }