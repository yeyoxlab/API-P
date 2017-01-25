

var prot_api = angular.module("prot_api",[]);
 

prot_api.config(function($routeProvider){
	$routeProvider.when("/", {
		templateUrl : "templates/index.html",
		
	})
	.when("/rest", {
		templateUrl : "templates/rest.html",
		//controller : "restController"
	})
	.when("/api", {
		templateUrl : "templates/api.html",
		//controller : "apiController"
	}).when("/login", {
		templateUrl : "templates/login.html",
		//controller : "apiController"
	})
	.when("/version", {
		templateUrl : "templates/version.html",
		//controller : "versionController"
	})
	//este es digamos, al igual que en un switch el default, en caso que 
	//no hayamos concretado que nos redirija a la página principal
	.otherwise({ reditrectTo : "/" });

	
});


