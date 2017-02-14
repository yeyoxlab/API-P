//lista de api
prot_api.controller("appController", function ($scope, $http) {
	 $http.get("json/ListA"+$scope.objetoP.lan+".json").then(function(response) {
        $scope.myData = response.data;
       // console.log($scope.objetoP.lan);
        
    });
	
	 
});

//lista de errores
prot_api.controller("errorController", function ($scope, $http) {
	 $http.get("json/ListE"+$scope.objetoP.lan+".json").then(function(response) {
        $scope.myData= response.data;
       $scope.activeMenu="error";
       // $scope.activeMenu="Home";
         console.log($scope.activeMenu);
    });
	 
});
 



