function badWordCatch() {

    // create variable from input in HTML and recognize the value entered
    var wordInput = document.getElementById("wordInput").value;

    // create something that inputs all your words into lowercase
    wordInput = wordInput.toLowerCase();
  
    // split the words by spaces (" ")
    var arr = wordInput.split(" ");


    // bad words to look for, 
    var badWords = ["clear", "tires", "water"];
    
    // should filter out the bad words variable
    var foundBadWords = arr.filter(el => badWords.includes(el));
    
    //why won't this information be inserted into the div?
    //maybe I need a loop to increase the tally?
    document.getElementById("wordsFound").innerHTML = foundBadWords.join(", ");
    document.getElementById("wordAmount").innerHTML = foundBadWords.length();
    
    wordInput.value = '';
  }