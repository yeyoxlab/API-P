prot_api.controller("appController", function ($scope, $http, dataResource) {
	$http.get('json/ListA.json').then(function (dataA) {
	 	$scope.datosA = dataA;
	});
    
    $scope.datosResource = dataResource.get();
})
 

prot_api.factory("dataResource", function ($resource) {
    return $resource("json/ListA.json",
        {}, 
        { get: { method: "GET", isArray: true }
    })
})
