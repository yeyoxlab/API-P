var moduleProtApi = angular.module("moduleProtApi", []);
var injectParams = [ "$scope" ];
var controllerProtApi = function($scope) {
	console.log("prueba2");
};
controllerProtApi.$inject = injectParams;
moduleProtApi.controller("prot_api", controllerProtApi);
