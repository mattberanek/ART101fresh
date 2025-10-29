function askNumber(whatNumber) {
    // guess which number
    let userNumber = prompt("Guess a number 1-10");
    // check if number is right
    if (userNumber == whatNumber) {
        $("#output").html("Yay yay yay yay! The number was " + whatNumber + "!");
    } else {
        $("#output").html("NOPE! WRONG! you guessed " + userNumber + ", it was... " + whatNumber + ".");
 }
}

// change number
$("#good-button").click(function () { askNumber(6);});