function config($routeProvider, $locationProvider, $httpProvider,
		$translateProvider, $stateProvider , notyProvider, cfpLoadingBarProvider,datetimepickerProvider) {
	
	/*
	Á	&Aacute;	\u00C1
	á	&aacute;	\u00E1
	É	&Eacute;	\u00C9
	é	&eacute;	\u00E9
	Í	&Iacute;	\u00CD
	í	&iacute;	\u00ED
	Ó	&Oacute;	\u00D3
	ó	&oacute;	\u00F3
	Ú	&Uacute;	\u00DA
	ú	&uacute;	\u00FA
	Ü	&Uuml;		\u00DC
	ü	&uuml;		\u00FC
	Ṅ	&Ntilde;	\u00D1
	ñ	&ntilde;	\u00F1
	*/
	
	
	$routeProvider.when('/', {
		templateUrl : '/apps/partials/dashboard/dashboard.html',
		controller : 'ctrlDashboard',
		controllerAs : 'dashboard'
	}).when('/admin', {
		templateUrl : '/apps/partials/admin/admin.html',
		controller : 'ctrlAdmin',
	}).when('/areas', {
		templateUrl : '/apps/partials/areas/areas.html',
		controller : 'ctrlAreas',
	}).when('/areas/:uuid', {
		templateUrl : '/apps/partials/areas/area.html',
		controller : 'ctrlArea',
		controllerAs : 'vm'
	}).when('/concentrator', {
		templateUrl : '/apps/partials/concentrator/concentrators.html',
		controller : 'ctrlConcentrators',
	}).when('/concentrator/:uuid', {
		templateUrl : '/apps/partials/concentrator/concentrator.html',
		controller : 'ctrlConcentrator',
	}).when('/dashboard', {
		templateUrl : '/apps/partials/dashboard/dashboard.html',
		controller : 'ctrlDashboard'
	}).when('/meters', {
		templateUrl : '/apps/partials/meter/meters.html',
		controller : 'ctrlMeters',
	}).when('/meters/:uuid', {
		templateUrl : '/apps/partials/meter/meter.html',
		controller : 'ctrlMeter',
	}).when('/profile/:uuid', {
		templateUrl : '/apps/partials/profile/profile.html',
		controller : 'ctrlProfile',
	}).when('/services', {
		templateUrl : '/apps/partials/service/services.html',
		controller : 'ctrlServices',
	})
	.when('/permissions', {
		templateUrl : '/apps/partials/permission/permission.html',
		controller : 'ctrlPermission',
	}).when('/services/:uuid', {
		templateUrl : '/apps/partials/service/service.html',
		controller : 'ctrlService',
	}).otherwise('/');

	notyProvider.settings = {
		theme : 'relax',
		text : 'Custom default message',
		layout : 'topCenter',
		force : true,
		easing : 'swing',
		timeout : 5000,
		animation : {
			open : 'animated  fadeInUp',
			close : 'animated fadeOutDown',
			easing : 'swing'
		}
	};
	$locationProvider.html5Mode({
		enabled : true,
		requireBase : false
	}).hashPrefix('!');

	$translateProvider.translations('en', {
		TITLE_LOGIN : 'Login or Create an Account',
		NAME : 'User',
		PASSWORD : "Password",
		RE_PASSWORD : 'Repeat Password',
		REMEMBER_PASS : 'Remember password',
		LOGIN : 'Login',
		CREATE_ACCONT : 'Crear cuenta',
		MI_ACCOUNT : 'My account',
		FORGOT_PASSWORD : 'Forgot Your Password\u00BF',
		LOG_OUT : 'Log out',
		RECOVERY_LINK : 'Send password reset link',
		FIRT_NAME : 'First Name',
		LAST_NAME : 'Last Name',
		TERMS : 'I agree with terms and conditions',
		TASKS : 'Task',
		MESSAGES : 'messages',
		PENDING_TASKS : 'Pending tasks',
		HOME : 'Home',
		SEARCH : 'Search',
		YES : 'Yes',
		NO : 'No',
		CHARACTERS : 'characters',
		MINIMUM : 'Minumim',
		MAXIMUM : 'Maximmum',
		CONCENTRATORS : 'Concentrator',
		METERS : 'SmartMeters',
		AREAS : 'Areas',
		SERVICES : 'Services',
		PERMISSION : 'permission'
	});
	$translateProvider.translations('es', {
		TITLE_LOGIN : 'Iniciar Sessi\u00F3n',
		NAME : 'User',
		PASSWORD : 'contrase\u00f1a',
		RE_PASSWORD : 'Escriba de nuevo su contrase\u00f1a',
		REMEMBER_PASS : 'Recordarme',
		LOGIN : 'Entrar',
		CREATE_ACCONT : 'Crear cuenta',
		MI_ACCOUNT : 'Mi cuenta',
		FORGOT_PASSWORD : '\u00BF Olvidaste tu contrase\u00f1a \u003F',
		LOG_OUT : 'Salir',
		RECOVERY_LINK : 'Recuperar clave',
		FIRT_NAME : 'Apellidos',
		LAST_NAME : 'Nombre',
		TERMS : 'Estoy de acuerdo con los t\u00E9rminos',
		TASKS : 'Tareas',
		MESSAGES : 'mensajes',
		PENDING_TASKS : 'Tareas pendientes',
		HOME : 'Inicio',
		SEARCH : 'B\u00fasqueda',
		YES : 'Si',
		NO : 'No',
		CHARACTERS : 'car\u00e1cteres',
		MINIMUM : 'M\u00ednimo',
		MAXIMUM : 'M\u00e1ximo',
		CONCENTRATORS : 'Colectores',
		METERS : 'Medidores',
		AREAS : '\u00C1reas',
		SERVICES : 'Servicios',
		PERMISSION : 'permisos'
	});
	$translateProvider.preferredLanguage('es');
	$translateProvider.useSanitizeValueStrategy('escape');

	$locationProvider.html5Mode(true);

	$httpProvider.interceptors.push(['$q','$location','$localStorage',function($q, $location, $localStorage) {
		var request = function(config) {
			config.headers = config.headers || {};
			if ($localStorage.token && $localStorage.nick ) {
				config.headers.Authorization = $localStorage.token;
			} else {
				delete $localStorage.token;
			}
				return config;
		};
		var responseError = function(response) {
			if (response.status === 401 || response.status === 403) {
				console.log(response);
				if(response.status === 403){
					$localStorage.$reset();
					window.location.href = "/login.html";
				}
			}
			return $q.reject(response);
		};
		return {
			'request' : request ,
			'responseError' : responseError
		};
	}]);
}