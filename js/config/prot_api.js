var prot_api = angular.module("prot_api",['ngRoute','pascalprecht.translate','ngResource', 'ngStorage']);
 


prot_api.service('serveData', [function () 
{
	return {
	//Datos almacenados para funcionamiento
		lan:"en",
		us:"Home"
	};
}])
