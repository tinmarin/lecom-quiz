(function(app){

  'use strict';

  app.factory('questionsService', questionsService);

  function questionsService() {

    var service = {
      getQuestions: getQuestions
    };

    function getQuestions(){

      var data = {
        "questions": [
          {
            "question": "What shape do hereditary spherocyte RBCs have?",
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
            "answers": [
              {
                "text": "Autosomal Recessive – 20%"
              },
              {
                "text": "Autosomal Dominant – 75%",
                "correct": true
              },
              {
                "text": "X-linked Recessive"
              },
              {
                "text": "X-linked Dominant"
              },
              {
                "text": "Spontaneous Mutation – 5%"
              }
            ]
          },{
            "question": "What is a diagnostic test used for hereditary spherocytosis?",
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
          }
        ]
      };

      return data;
    }

  return service;

}


})(angular.module('core.module'));
