(function() {
	'use strict';

	angular.module('quizApp', ['ngRoute','ngAnimate', 'ngMaterial'])
  .config(config);

  config.$inject = ['$routeProvider'];

  function config( $routeProvider) {
    $routeProvider.otherwise("/");
  }

})();
