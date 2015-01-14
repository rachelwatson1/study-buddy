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

      var index = -1;
      var app = document.getElementById("study-buddy--app");
      var card = document.createElement('p');
      var link = document.createElement('a');
      var question = document.createTextNode("Begin Test");

      link.appendChild(question);
      link.setAttribute("href", "#");
      card.appendChild(link);
      app.appendChild(card);


      link.addEventListener("click", function(){
        if (index == -1) {
            link.innerHTML = StudyBuddy.questions[++index].question
        }
        else if (StudyBuddy.questions.length > index ) {

          link.innerHTML = StudyBuddy.questions[index].answer;
          link.setAttribute('class', 'answer');

          if  (StudyBuddy.questions.length <= ++index) {
            StudyBuddy.randomize();
            index = 0;
            console.log("End of Questions. Starting over.");
          }

          setTimeout(function() {
            link.innerHTML = StudyBuddy.questions[index].question;
            link.removeAttribute('class');
          }, answerTime);
        }
      });

    }
  }


  return gui;

});