// Owen Louden, Events ReDo, 5/2/22



//setting event listener for the click of the box 
element.addEventListener("click", beenClicked);




//function to run when the event is triggered that will display the answer to the flashcard
function showAnswer(event){



    //setting the variable for the information stored in the data-answer attribute
    let answer = event.target.getAttribute("data-answer")


    //using data attribute,display the response to our question

    event.target.innerHTML = answer;
}