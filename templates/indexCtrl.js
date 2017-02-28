var moduleIndex = angular.module("moduleIndex", []);
var injectParams = [ "$scope" ];
var controllerIndex = function($scope) {
	console.log("prueba2");
};
controllerIndex.$inject = injectParams;
moduleIndex.controller("moduleIndex", controllerIndex);
