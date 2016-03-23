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
            "question": "Where is the defective rbc undergoing hemolysis?",
            "correct": true,
            "answers": [
              {
                "text": "In the bone marrow as the reticulocyte is being formed"
              },
              {
                "text": "In the capillaries, because the shape is not flexible and the rbc becomes lodged",
                correct: true
              },
              {
                "text": "In the alveoli of the lungs because it doesn’t carry enough hemoglobin for gas exchange"
              },
              {
                "text": "in the liver sinusoids by Kupffer cells"
              }
          ]
        },{
            "question": "How does the aplastic crisis arise?",
            "correct": true,
            "answers": [
              {
                "text": "As the immature red blood cell is released into the circulation"
              },
              {
                "text": "When the spleen has destroyed enough red blood cells to create anemia"
              },
              {
                "text": "After the hematopoietic cells of the bone marrow reach their full capacity to regenerate reticulocytes and still cannot maintain homeostasis",
                correct: true
              },
              {
                "text": "Because the liver is destroying red blood cells faster than they can be produced"
              }
          ]
        },{
            "question": "Where is the megaloblastic crisis occurring?",
            "correct": true,
            "answers": [
              {
                "text": "In the liver sinusoids, where rbc’s are being destroyed and causing hepatomegaly"
              },
              {
                "text": "In the hematopoietic cells of the bone marrow"
              },
              {
                "text": "In the yellow bone marrow"
              },
              {
                "text": "In the sinusoids of the spleen, causing splenomegaly due to chronic inflammation secondary to the increased rate of rbc destruction",
                correct: true
              }
          ]
        },{
            "question": "What forms the gallstones seen in Moderate to Severe Spherocytosis?",
            "correct": true,
            "answers": [
              {
                "text": "High levels of bilirubin in the peripheral blood due to red blood cell hemolysis",
                correct: true
              },
              {
                "text": "High blood levels of calcium secondary to red blood cell hemolysis"
              },
              {
                "text": "High blood levels of free hemoglobin released from lysed red blood cells"
              },
              {
                "text": "The spleen releasing large amounts of phospholipids derived from destroyed red blood cell membranes"
              }
          ]
        },{
            "question": "How is bone marrow function assessed?",
            "correct": true,
            "answers": [
              {
                "text": "By ordering a complete blood cell count (CBC)"
              },
              {
                "text": "With a lymphocyte and platelet count"
              },
              {
                "text": "With a reticulocyte count to look for immature red blood cells",
                correct: true
              },
              {
                "text": "By drawing a bone marrow sample from the pelvis"
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
