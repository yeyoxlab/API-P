prot_api.controller("appController", function ($scope, $http) {
	 $http.get("json/ListA.json").then(function(response) {
        $scope.myData = response.data;
        
    });
});
prot_api.controller("errorController", function ($scope, $http) {
	 $http.get("json/ListE.json").then(function(response) {
        $scope.myData = response.data;
        
    });
});
 



