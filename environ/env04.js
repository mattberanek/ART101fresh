// header and ocean info
let title = "Welcome to the Ocean!";
let description = "life moves gently underwater.";

// print info
$("#output").append("<h1>" + title + "</h1>");
$("#output").append("<p>" + description + "</p>");

// main function
function changeEnvironment(mode) {
  if (mode === "day") {
    $("body").css({
      "background-image": "url('ocean.jpg')",
      "background-size": "cover",
      "background-repeat": "no-repeat"
    });
    $("#output").html("<h2>It's bright and calm under the sea.</h2>");
  } 
  else if (mode === "night") {
    $("body").css({
      "background-image": "url('nightocean.png')",
      "background-size": "cover",
      "background-repeat": "no-repeat"
    });
    $("#output").html("<h2>The ocean is dark and quiet now.</h2>");
  }
}

// buttons
$(document).ready(function() {
  $("body").append('<button id="dayBtn">Day</button>');
  $("body").append('<button id="nightBtn">Night</button>');

  $("#dayBtn").click(function() {
    changeEnvironment("day");
  });

  $("#nightBtn").click(function() { changeEnvironment("night");
  });
});