(function() {
	'use strict';

	angular.module('routes.module', ['ngRoute'])

	.config(function( $routeProvider) {

		$routeProvider
    .otherwise("/");


	});

})();
