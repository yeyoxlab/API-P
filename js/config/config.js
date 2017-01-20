

var config = angular.module("config", []);
 
//realizamos la configuración del enrutado dependiendo de la url
//con el objeto $routeProvider haciendo uso de when
//en este caso, cuando estemos en la página principal, le decimos que
//cargue el archivo templates/index.html y que haga uso del controlador
//indexController, así en todos los casos
config.config(function($routeProvider){
	$routeProvider.when("/", {
		templateUrl : "templates/index.html",
		controller : "indexController"
	})
	.when("/rest", {
		templateUrl : "templates/rest.html",
		controller : "restController"
	})
	.when("/api", {
		templateUrl : "templates/api.html",
		controller : "apiController"
	}).when("/login", {
		templateUrl : "templates/login.html",
		controller : "apiController"
	})
	//este es digamos, al igual que en un switch el default, en caso que 
	//no hayamos concretado que nos redirija a la página principal
	.otherwise({ reditrectTo : "/" });
})