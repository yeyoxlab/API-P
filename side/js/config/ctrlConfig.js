config.controller("indexController", function indexController($scope){
	$scope.usuarios = 
		{
			nombre : "YeyoxLab",
			web : "https://fb.com/YeyoxLab",
			edad : "24 años",
			profesion : "programador web"
		};
		
	console.log("1");
})
 
//más de lo mismo, pero en este caso creamos una variable llamada saludo y una función
//que gracias al objeto location y al método url nos redirigirá al login al hacer uso de ella
config.controller("restController", function restController($scope, $location){
	$scope.saludo = "Hola desde el controlador home";
	$scope.toLogin = function(){
		$location.url("/login");
	}
	console.log("2");
});
 
config.controller("apiController", function apiController($scope, $location){
	$scope.saludo = "Hola desde el controlador login";
	$scope.toHome = function(){
		$location.url("/home");
	}
	console.log("3");
})