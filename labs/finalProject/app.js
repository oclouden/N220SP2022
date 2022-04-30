//Owen Louden, Intro Media Apps, Final Project, 4/20/22

// creating card variable allows for .card class be recognized every time it's interacted with
var cards = document.querySelectorAll(".card");

    //use this as a basis to then calculate if all matchedCard cards have been collected
let matchedCard = 0;

    //creating variables for each card to match whether they're the same or not
let cardOne, cardTwo;

//start this out as false unless both cards flipped are the same
let disableDeck = false;


function flipCard({target: clickedCard}) {  //specifically targeting and running flipCard function when clickedCard is selected
    if(cardOne !== clickedCard && !disableDeck) { //disallowFlip will be ran if and only if cardOne and clickedCard are both selected, prevents from user clicking same cards twice
        clickedCard.classList.add("flip"); //add flip class degree on cards that've been flipped
        if(!cardOne) {
            return cardOne = clickedCard; //cardOne valye returns to clickedCard
        }
        cardTwo = clickedCard; //set cardTwo as this value
        disableDeck = true; //prevents flipping from happening again

    //how to see if cards are matching! src will determine if it's from the same source, clarifying if they're the same or not
        let cardOneImg = cardOne.querySelector(".viewBack img").src,
        cardTwoImg = cardTwo.querySelector(".viewBack img").src;

        //send to run whether or not cards match
        matchCards(cardOneImg, cardTwoImg);
    }
}


//function now to determine if they're matching
function matchCards(img1, img2) {
    //time to make the img1 and img2 required to be same source
    if(img1 === img2) {
        matchedCard++;  //increament the value of matchedCard pairs by 1
        
    //if matchedCard value equals 8 all cards have been matchedCard, then reshuffle cards afterwards, no need to have replay/refres button
        if(matchedCard == 8) {
            setTimeout(() => {
                return shuffleCard();
            }, 1000);
        }
        //finish off and remove click related to flipCard
        cardOne.removeEventListener("click", flipCard);
        cardTwo.removeEventListener("click", flipCard);
        cardOne = cardTwo = ""; //setting card values both to blank
        return disableDeck = false;
    }

     //timout after 2 seconds
    setTimeout(() => {
            //remove the tag for flipped, set back to normal
        cardOne.classList.remove("flip");
        cardTwo.classList.remove("flip");
        //rinse and repeat
        cardOne = cardTwo = ""; //setting card values both to blank
        disableDeck = false;
    }, 2000);
}

//need function to shuffle the cards
function shuffleCard() {

     //value of matchedCards being 0 so increment can work
    matchedCard = 0;
    disableDeck = false;

     //reset variable values to default
    cardOne = cardTwo = "";

    //setting array of 16 items, each repeated twice
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
     //ACTUAL RANDOMIZAITON
    arr.sort(() => Math.random() > 0.5 ? 1 : -1); //sorting array items randomly, set between 1 and -1, randomized by 0.5
   
   
    // removing flip class from all cards, pass random image to each card
    cards.forEach((card, i) => {
        card.classList.remove("flip");
        
          //image tag settings, looks through all images to determine which to randomize from in the array. Uses SQL type language
        let imgTag = card.querySelector(".viewBack img");
        imgTag.src = `images/img-${arr[i]}.png`; //using SQL to randomize the values in the array based on each image, having different numbers but same beginning can help make this a lot easier
       
         //when click, flip that card
        card.addEventListener("click", flipCard);
    });
}

//then shuffle all cards
shuffleCard();
    
cards.forEach(card => {
    card.addEventListener("click", flipCard);
});