/**
 * Author: Maximo Mena
 * GitHub: mmenavas
 * Twitter: @menamaximo
 * Project: Study Buddy
 * Description:
 */

define(function(require) {

  var StudyBuddy = require("StudyBuddy");
  var StudyQuestion = require("StudyQuestion");
  var QuestionBuilder = require("QuestionBuilder");
  var gui = require("gui");

  QuestionBuilder.init();

  /* How a question is created
  var q1 = new StudyQuestion(
    "A",
    "La"
  );

  StudyBuddy.addQuestion(q1);
  StudyBuddy.randomize();
  */

  var appContainer = document.getElementById("study-buddy--app");
  var settingsButton = document.getElementById("study-buddy--app-name");
  var settings = document.getElementById("study-buddy--settings");
  var startButton = document.getElementById("study-buddy--start");
  var hasQuizzStarted = false;

  // Settings
  settingsButton.addEventListener("click", function() {

    if (!hasQuizzStarted) {
      return;
    }

    if (settings.className == "show") {
      settings.className = "hide";
      appContainer.className = "show";
    }
    else {
      settings.className = "show";
      appContainer.className = "hide";
    }

  });

  // Start quizz
  startButton.addEventListener("click", function() {

    StudyBuddy.clear();
    gui.clear();

    var listItems = document.getElementById("study-buddy--questions").childNodes;

    for (var i = 0; i < listItems.length; i++) {

      if (listItems[i].childNodes[0].childNodes[0].value !== "" &&
          listItems[i].childNodes[1].childNodes[0].value !== "") {
        var q = new StudyQuestion(
          listItems[i].childNodes[0].childNodes[0].value,
          listItems[i].childNodes[1].childNodes[0].value
        );
        StudyBuddy.addQuestion(q);
      }

    }

    StudyBuddy.randomize();
    
    if (gui.draw(StudyBuddy, 1500) != "fail") {
      settings.className = "hide";
      appContainer.className = "show";
      hasQuizzStarted = true;
    }

  });

});
