
let totalNumber = 0;

// add a button titled "Click Me!!!" to the page

$("#needy-button").click(function() {

    totalNumber = totalNumber + 1;

    let sentence = "I was clicked ";
    let totalNumbers= sentence + totalNumber;

    $("#needy-button").html (totalNumbers + " times");
}); 

// when it is clicked
// add one to the total number of clicks

// show the total number of clicks
// on the button 
// show "clicked total number of times"

// a top limit