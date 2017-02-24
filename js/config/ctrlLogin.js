// q = promesas

prot_api.controller('ctrlLogin', ['$scope', '$http', '$q', function ($scope, $http, $q, $sessionStorage, $location){
var config = {
		headers : {
			'Content-Type' : 'application/x-www-form-urlencoded;charset=utf-8;'
		}
	};

	$scope.calln = function (){
		//sessionStorage.txtUser = $scope.txtUser;		
		//sessionStorage.txtPass = $scope.txtPass;

		$scope.data = $.param({
			"name_app": $scope.txtUser,
			"secret_key": $scope.txtPass
		});

		$http.post("http://192.168.1.3/api/v1/login",$scope.data,config).success(function(result) {
			sessionStorage.isLogin = true;
			console.log(sessionStorage.isLogin);
			//window.location.href = 'index.html';
		}).error(function(error) {
			$scope.result = JSON.stringify(error);
			window.location.href = 'login.html';
			//alert("Usuario o contraseña incorrectos");
			//console.log($scope.result); //<- Si no es éxitoso, mostrará un error y no el token
		});	
	};
}]);