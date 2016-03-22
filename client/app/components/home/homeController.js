(function () {
	'use strict';

	angular
		.module('quizApp')
		.controller('HomeController', HomeController);

    HomeController.$inject = ['$window'];

  function HomeController($window){

    var vm = this;

    vm.submitted = false;

    vm.letters = ['A','B','C','D','E','F'];

    vm.correctAnswers = 0;

    vm.questions = [
          {
            "question": "What shape do hereditary spherocyte RBCs have?",
            "correct": true,
            "answers": [
              {
                "text": "Bi-concave"
              },
              {
                "text": "Triangular"
              },
              {
                "text": "Spherical",
                "correct" : true
              },
              {
                "text": "Pyramidal"
              },
              {
                "text": "Quadrangular"
              }
            ]
           },{
            "question": "The most common cause of hereditary spherocytosis is due to:",
            "correct": true,
            "answers": [
              {
                "text": "Autosomal Recessive"
              },
              {
                "text": "Autosomal Dominant",
                "correct": true
              },
              {
                "text": "X-linked Recessive"
              },
              {
                "text": "X-linked Dominant"
              },
              {
                "text": "Spontaneous Mutation"
              }
            ]
          },{
            "question": "What is a diagnostic test used for hereditary spherocytosis?",
            "correct": true,
            "answers": [
              {
                "text": "Western blot with PCR"
              },
              {
                "text": "A1C test"
              },
              {
                "text": "Chest x-ray"
              },
              {
                "text": "Reticulocyte count",
                "correct" : true
              },
              {
                "text": "Echocardiogram"
              }
            ]
          },{
            "question": "What are some signs/symptoms of hereditary spherocytosis?",
            "correct": true,
            "answers": [
              {
                "text": "Anemia, jaundice, splenomegaly, gall stones",
                "correct" : true
              },
              {
                "text": "Anemia, ulcers, jaundice, gall stones"
              },
              {
                "text": "Splenomegaly, hepatomegaly, jaundice, ulcers"
              },
              {
                "text": "Jaundice, gall stones, hepatomegaly, anemia"
              },
              {
                "text": "Splenomegaly, ulcers, anemia, gall stones"
              }
            ]
          },{
            "question": "Some treatments used for hereditary spherocytosis are:",
            "correct": true,
            "answers": [
              {
                "text": "Folic acid, iron, splenectomy"
              },
              {
                "text": "Splenectomy, anticoagulants, folic acid"
              },
              {
                "text": "Folic acid, cholecystectomy, splenectomy",
                "correct" : true
              },
              {
                "text": "Folic acid, phototherapy, hepatectomy"
              },
              {
                "text": "Iron, anticoagulants, folic acid"
              }
            ]
          },{
            "question": "What shape do hereditary spherocyte RBCs have?",
            "correct": true,
            "answers": [
              {
                "text": "Bi-concave"
              },
              {
                "text": "Triangular"
              },
              {
                "text": "Spherical",
                "correct" : true
              },
              {
                "text": "Pyramidal"
              },
              {
                "text": "Quadrangular"
              }
          ]
        }
        ];

    vm.showPercent = function() {

      var percent = (vm.correctAnswers / vm.questions.length ) * 100;

      return parseInt(percent)+ "%";

    };

    vm.refresh = function() {
      $window.location.reload();
    };

    vm.submit = function(){
      if(vm.quizForm.$invalid){
        return;
      }

      vm.submitted = true;
      vm.correctAnswers = 0;

      vm.questions.forEach(function(question){

        if (question.answers[question.selected].correct === true){
          question.correct = true;
          vm.correctAnswers += 1;
        } else {
          question.correct = false;
        }
      });

      scrollDown();
    };

    function scrollDown() {
      $("html, body").animate({ scrollTop: $(document).height() }, 1000);
    }
  }

})();
