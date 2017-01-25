prot_api.controller("errorController", function ($scope, $http, dataResource) {
	$http.get('json/ListE.json').success(function (dataE) {
	 	$scope.datosE = dataE;
	});
    
    $scope.datosResource = dataResource.get();
})
 

prot_api.factory("dataResource", function ($resource) {
    return $resource("json/ListE.json",
        {}, 
        { get: { method: "GET", isArray: true }
    })
})
