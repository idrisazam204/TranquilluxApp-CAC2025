var questions = [
  ["Good1", "Fair1", "Bad1"],
  ["Good2", "Fair2", "Bad2"],
  ["Good3", "Fair3", "Bad3"],
  ["Good4", "Fair4", "Bad4"],
  ["Good5", "Fair5", "Bad5"]
];
var points = {
  "Good": 2,
  "Fair": 1,
  "Bad": 0
};
var totalScore = 0;
var homeLogos = ["homelogo1","homelogo2","homelogo3","homelogo4","homelogo5","homelogo6","homelogo7","homelogo8"];
var statsLogos = ["statslogo1","statslogo2","statslogo3","statslogo4","statslogo5","statslogo6","statslogo7","statslogo8"];
var moodLogos = ["moodlogo1","moodlogo2","moodlogo3","moodlogo4","moodlogo5","moodlogo6","moodlogo7","moodlogo8"];
var helpLogos = ["helplogo1","helplogo2","helplogo3","helplogo4","helplogo5","helplogo6","helplogo7","helplogo8"];
var messageLogos = ["messagelogo1","messagelogo2","messagelogo3","messagelogo4","messagelogo5","messagelogo6","messagelogo7","messagelogo8"];
function setLogoEvents(ids, screenName) {
  for (var i = 0; i < ids.length; i++) {
    onEvent(ids[i], "click", function() {
      setScreen(screenName);
    });
  }
}
for (var i = 0; i < questions.length; i++) {
  for (var j = 0; j < 3; j++) {
    var btn = questions[i][j];
    attachListener(btn);
  }
}
function attachListener(id) {
  onEvent(id, "click", function() {
    var type = getType(id);
    totalScore += points[type];
  });
}
function getType(id) {
  if (id.includes("Good")) return "Good";
  if (id.includes("Fair")) return "Fair";
  if (id.includes("Bad")) return "Bad";
  return "";
}
onEvent("submitButtonn", "click", function() {
  if (totalScore <= 3) {
    setScreen("BadPage");
  } else if ((totalScore <= 7)) {
    setScreen("DecentPage");
  } else {
    setScreen("AmazingPage");
  }
});
function randomMessage() {
  var random;
  var message;
  onEvent("button1", "click", function( ) {
    random = randomNumber(1, 5);
    if (random == 1) {
      message = "Even the darkest clouds can’t stop the sun from finding its way back.";
      setText("text_area41", message);
    }
    if (random == 2) {
      message = "You’ve made it through every bad day so far...That’s a perfect record of strength.";
      setText("text_area41", message);
    }
    if (random == 3) {
      message = "Every setback is just a seed for your next growth spurt.";
      setText("text_area41", message);
    }
    if (random == 4) {
      message = "You don’t have to shine every day; just showing up is enough sometimes.";
      setText("text_area41", message);
    }
    if (random == 5) {
      message = "The way you keep going, even when it’s hard, is proof that brighter days are coming.";
      setText("text_area41", message);
    }
  });
}
setLogoEvents(homeLogos, "HomePage");
setLogoEvents(statsLogos, "StatPage");
setLogoEvents(moodLogos, "MoodPage");
setLogoEvents(messageLogos, "MessagePage");
setLogoEvents(helpLogos, "HelpPage");
randomMessage();
