prot_api.controller("appController", function ($scope, $http, dataResource) {
	$http.get('json/ListA.json').success(function (dataA) {
	 	$scope.datosA = dataA;
	});
    
    $scope.datosAResource = dataResource.get();
})
 

prot_api.factory("dataResource", function ($resource) {
    return $resource("json/ListA.json",
        {}, 
        { get: { method: "GET", isArray: true }
    })
})
