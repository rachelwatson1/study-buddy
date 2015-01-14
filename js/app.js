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

  var switchButton = document.getElementById("study-buddy--switch");

  switchButton.addEventListener("click", function() {

    StudyBuddy.clear();

    var listItems = document.getElementById("study-buddy--questions").childNodes;

    for (var i = 0; i < listItems.length; i++) {

      var q = new StudyQuestion(
        listItems[i].childNodes[0].childNodes[0].value,
        listItems[i].childNodes[1].childNodes[0].value
      );

      StudyBuddy.addQuestion(q);
       
    }

    StudyBuddy.randomize();
    gui.draw(StudyBuddy, 500);

  });

});
