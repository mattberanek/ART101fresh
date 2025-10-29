var count = 0;
var colors = ["Orchid", "Coral", "HotPink", "Plum"];

$("#needy-button").click(function () {
    count++;

    let reminder = count % colors.length;
    let mood = "";

    if (count < 7) {
        mood = "Fresh & Happy!";
    } else if (count >= 7 && count < 12) {
        mood = "Keep Going!";
    } else {
        mood = "So Tired...";
    }

    $("#needy-button").html(
        "Clicks: " + count + " | Color: " + colors[reminder] + " | Mood: " + mood
    );

    $("body").css("background-color", colors[reminder]);
});