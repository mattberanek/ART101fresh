//header stuff
let title = "Welcome to the Ocean!";
let description = "Under the waves, colorful sea life moves gently in the water.";

// list of life in the ocean
let seaThings = ["Fish", "Jellyfish", "Seaweed", "Starfish", "Dory", "Nemo"];

// two sea creatures friends
let nemo = {
  name: "Nemo",
  type: "Clownfish",
  action: "swims around the coral"
};

let jelly = {
  name: "Jelly",
  type: "Jellyfish",
  action: "floats softly in the water"
};

// print stuff on the page
$("#output").append("<h1>" + title + "</h1>");
$("#output").append("<p>" + description + "</p>");
$("#output").append("<h2>Ocean Creatures:</h2>");

// the little list all sea things
$("#output").append("<ul>");

for (let i = 0; i < seaThings.length; i++) {
  $("#output").append("<li>" + seaThings[i] + "</li>");
}
$("#output").append("</ul>");

// add object info
$("#output").append("<p>" + nemo.name + " the " + nemo.type + " " + nemo.action + ".</p>");
$("#output").append("<p>" + jelly.name + " the " + jelly.type + " " + jelly.action + ".</p>");

