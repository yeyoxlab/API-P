prot_api.config($routeProvider, $locationProvider, $translateProvider) {

	

	 $locationProvider.html5Mode({
		enabled : true,
		requireBase : false
	}).hashPrefix('!');

	 $translateProvider.translations('en', {
		TITLE_LOGIN : 'Login or Create an Account'
	});
	$translateProvider.translations('es', {
		TITLE_LOGIN : 'Iniciar Sessi\u00F3n'
	});
	$translateProvider.preferredLanguage('es');
	$translateProvider.useSanitizeValueStrategy('escape');

	$locationProvider.html5Mode(true);

})



	