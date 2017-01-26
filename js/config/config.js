
var config = angular.module("config", [ 'pascalprecht.translate' ]);

// realizamos la configuración del enrutado dependiendo de la url
// con el objeto $routeProvider haciendo uso de when
// en este caso, cuando estemos en la página principal, le decimos que
// cargue el archivo templates/index.html y que haga uso del controlador
// indexController, así en todos los casos
config
		.config(
				'$translateProvider',
				function($routeProvider, $translateProvider) {
					$routeProvider.when("/", {
						templateUrl : "templates/index.html",
						controller : "indexController"
					}).when("/rest", {
						templateUrl : "templates/rest.html",
						controller : "restController"
					}).when("/api", {
						templateUrl : "templates/api.html",
						controller : "apiController"
					}).when("/login", {
						templateUrl : "templates/login.html",
						controller : "apiController"
					}).when("/version", {
						templateUrl : "templates/version.html",
						controller : "apiController"
					})
					// este es digamos, al igual que en un switch el default, en
					// caso que
					// no hayamos concretado que nos redirija a la página
					// principal
					.otherwise({
						reditrectTo : "/"
					});

					var translations = {
						TITLE_ONE : "REST APIs",
						PARAGRAPH_ONE : "Una REST API proporciona acceso mediante programaci\u00F3n para leer y escribir datos de Protcloud. A\u00F1adir un nuevo medidor inteligente, eliminar un medidor inteligente, actualizar un medidor inteligente, leer y escribir informaci\u00F3n del sistema, y m\u00E1s. La REST API identifica aplicaciones PROTCLOUD y los usuarios usan JWE; las respuestas est\u00E1n disponibles en JSON.",
						TITLE_TWO : "Autenticaci\u00F3n JWE",
					};

				})