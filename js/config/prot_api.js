var prot_api = angular.module("prot_api",['ngRoute','ngResource', 'pascalprecht.translate']);


prot_api.controller('Ctrl', ['$scope', function ($scope){


}]);

prot_api.config(function($routeProvider, $translateProvider){
	$routeProvider.when("/", {
		templateUrl : "templates/index.html",
		
	})
	.when("/error", {
		templateUrl : "templates/listE.html",
		controller : "errorController"
	})
	.when("/lista", {
		templateUrl : "templates/listA.html",
		controller : "appController"		
	}).when("/login", {
		templateUrl : "templates/login.html",
		
	})
	.when("/version", {
		templateUrl : "templates/version.html",
		
	}).when("/meters", {
		templateUrl : "templates/meters.html",
	
	}).when("/meters_less", {
		templateUrl : "templates/meters_less.html",
		
	}).when("/meters_search", {
		templateUrl : "templates/meters_search.html",
		
	}).when("/meters_search_less", {
		templateUrl : "templates/meters_search_less.html",
		
	}).when("/meters_", {
		templateUrl : "templates/meters_.html",
		
	}).when("/meters_b_less", {
		templateUrl : "templates/meters_b_less.html",
		
	})
	//este es digamos, al igual que en un switch el default, en caso que 
	//no hayamos concretado que nos redirija a la página principal
	.otherwise({ reditrectTo : "/" });

	
	//$locationProvider.html5Mode(true);

	
});