

var prot_api = angular.module("prot_api",['ngResource']);
 

prot_api.config(function($routeProvider){
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
		
	})
	//este es digamos, al igual que en un switch el default, en caso que 
	//no hayamos concretado que nos redirija a la página principal
	.otherwise({ reditrectTo : "/" });

	
});


