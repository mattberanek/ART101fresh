// declaring an array with name myCommutes
let myCommutes = ["metro bus", "UCSC taps bus", "personal bike", , "my car", "uber"];

// declaring an object with name myFavouriteCommute
let myFavouriteCommute = {
    type: "Bus",
    route: 19,
    print: "Downtown to UCSC",
    hasMiddleDoor: true,
    drivers: ["Joe", "Will", "the guy with a yellow hat"],
};

let megaSentence;

megaSentence = "<p>My two top commutes from the array are: " + myCommutes[0] + ", " + myCommutes[5] + "</p>";

megaSentence += "<p>My favourite commute is the " + myFavouriteCommute.type + " number " + myFavouriteCommute.route + " called " + myFavouriteCommute.print;

$("#output").html(megaSentence);