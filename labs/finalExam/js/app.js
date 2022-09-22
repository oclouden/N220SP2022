//create an array

let arr = ["cars", "bikes", "vans", "trucks", "velocipedes"];

//set the length based on the arr variable
var arrayLength = arr.length;

//for index being 1, and less than the length of the array string, add each on to each other
for (var i = 1; i < arrayLength; i++) {
    //then display results into innerHTML
var results = document.getElementById('results');
results.innerHTML = arr;
}

