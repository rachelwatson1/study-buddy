/**
 * Author: Maximo Mena
 * GitHub: mmenavas
 * Twitter: @menamaximo
 * Project: Study Buddy
 * Description:
 */

define(function(require) {

  var QuestionBuilder = {
    init : function() {
      var addQuestionButton = document.getElementById("study-buddy--add-question");

      addQuestionButton.addEventListener("click", this.addQuestion);

    },

    addQuestion : function() {
      
      var questionsList = document.getElementById("study-buddy--questions");
      var listItem = document.createElement("li");
      var questionWrapper = document.createElement("div");
      var answerWrapper = document.createElement("div");
      var question = document.createElement("input");
      var answer = document.createElement("input");

      question.setAttribute("type", "text");
      question.setAttribute("placeholder", "Question");
      questionWrapper.appendChild(question);
      questionWrapper.setAttribute("class", "wrapper");

      answer.setAttribute("type", "text");
      answer.setAttribute("placeholder", "Answer");
      answerWrapper.appendChild(answer);
      answerWrapper.setAttribute("class", "wrapper");

      listItem.appendChild(questionWrapper);
      listItem.appendChild(answerWrapper);
      questionsList.appendChild(listItem);

    }
  }


  return QuestionBuilder;

});