

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
		
	}).when("/meters_search_less", {
		templateUrl : "templates/meters_search_less.html",
		
	}).when("/meters_", {
		templateUrl : "templates/meters_.html",
		
	}).when("/meters_b_less", {
		templateUrl : "templates/meters_b_less.html",
		
	}).when("/meters_2", {
		templateUrl : "templates/meters_2.html",
	
	}).when("/meters_b_1", {
		templateUrl : "templates/meters_b_1.html",
	
	}).when("/meters_b_2", {
		templateUrl : "templates/meters_b_2.html",
	
	}).when("/meters_state_relay", {
		templateUrl : "templates/meters_state_relay.html",
	
	}).when("/meters_reset_meter", {
		templateUrl : "templates/meters_reset_meter.html",
	
	}).when("/alarms_startDate_endDate", {
		templateUrl : "templates/alarms_startDate_endDate.html",
	
	})
	//este es digamos, al igual que en un switch el default, en caso que 
	//no hayamos concretado que nos redirija a la página principal
	.otherwise({ reditrectTo : "/" });

	
});


prot_api.service('serveData', [function () 
{
	return {
	//Datos almacenados para funcionamiento
		qty : 'ng-repeat="x in myDataes"',
		qyp:'ListE.json',
		lan:"es"
	};
}])
