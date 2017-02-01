var prot_api = angular.module("prot_api",['ngRoute','pascalprecht.translate','ngResource']);
 


prot_api.service('serveData', [function () 
{
	return {
	//Datos almacenados para funcionamiento
		qty : 'ng-repeat="x in myDataes"',
		qyp:'ListE.json',
		lan:"es"
	};
}])
