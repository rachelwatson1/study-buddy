/**
 * Author: Maximo Mena
 * GitHub: mmenavas
 * Twitter: @menamaximo
 * Project: Study Buddy
 * Description:
 */

define(function(require) {

  var gui = {

    draw: function(StudyBuddy, answerTime) {

      if (StudyBuddy.questions.length < 1) {
        alert("You need to enter a few questions.");
        return "fail";
      }

      var index = 0;
      var app = document.getElementById("study-buddy--app");
      var statusBar = document.getElementById("study-buddy--status-bar");
      var card = document.createElement('p');
      var link = document.createElement('a');
      var question = document.createTextNode(StudyBuddy.questions[index].question);

      link.appendChild(question);
      link.setAttribute("href", "#");
      card.appendChild(link);
      app.appendChild(card);
      statusBar.innerHTML = (index + 1) + " of " + StudyBuddy.questions.length;

      link.addEventListener("click", function(){

        link.innerHTML = StudyBuddy.questions[index].answer;
        link.setAttribute('class', 'answer');

        if (StudyBuddy.questions.length <= ++index) {
          StudyBuddy.randomize();
          index = 0;
        }

        setTimeout(function() {
          link.innerHTML = StudyBuddy.questions[index].question;
          link.removeAttribute('class');
          statusBar.innerHTML = (index + 1) + " of " + StudyBuddy.questions.length;
        }, answerTime);

      });

    },

    clear: function() {
      var app = document.getElementById("study-buddy--app");
      app.innerHTML = "";
    }
  }


  return gui;

});