/**
 * Author: Maximo Mena
 * GitHub: mmenavas
 * Twitter: @menamaximo
 * Project: Study Buddy
 * Description:
 */

define(function() {

  var StudyBuddy = {

    questions: [],

    addQuestion: function(obj) {
      this.questions.push(obj);
    },

    clear: function() {
      this.questions = [];
    },

    randomize: function() {
      if (this.questions.length < 2) {
        return;
      }

      var questions = this.questions;
      var shuffledQuestions = [];
      var randomIndex = 0;

      // Shuffle questions
      while (shuffledQuestions.length < questions.length) {

        // Random value between 0 and questions.length - 1
        randomIndex  = Math.floor(Math.random() * questions.length);

        // If element isn't false, add element to shuffled questions
        if(questions[randomIndex]) {

          // Add new element to shuffle questions
          shuffledQuestions.push(questions[randomIndex]);

          // Set element to false to avoid being reused
          questions[randomIndex] = false;
        }

      }

      this.questions = shuffledQuestions;

    },

  } 

  return  StudyBuddy;

});
