prot_api.config(function($routeProvider,$translateProvider,$locationProvider){
	$routeProvider.when("/", {
		templateUrl : "templates/index.html",
		
		
	})
	.when("/error", {
		templateUrl : "templates/listE.html",
		controller : "errorController"
	})
	.when("/lista", {
		templateUrl : "templates/listA.html",
		controller : "appController"		
	}).when("/login", {
		templateUrl : "templates/login.html",
		
	})
	.when("/version", {
		templateUrl : "templates/version.html",
		
	}).when("/meters", {
		templateUrl : "templates/meters.html",
	
	}).when("/meters_less", {
		templateUrl : "templates/meters_less.html",
		
	}).when("/meters_search", {
		templateUrl : "templates/meters_search.html",
		
	}).when("/meters_search_less", {
		templateUrl : "templates/meters_search_less.html",
		
	}).when("/meters_", {
		templateUrl : "templates/meters_.html",
		
	}).when("/meters_b_less", {
		templateUrl : "templates/meters_b_less.html",
		
	}).when("/meters_2", {
		templateUrl : "templates/meters_2.html",
	
	}).when("/meters_b_1", {
		templateUrl : "templates/meters_b_1.html",
	
	}).when("/meters_b_2", {
		templateUrl : "templates/meters_b_2.html",
	
	}).when("/meters_state_relay", {
		templateUrl : "templates/meters_state_relay.html",
	
	}).when("/meters_reset_meter", {
		templateUrl : "templates/meters_reset_meter.html",
	
	}).when("/alarms_startDate_endDate", {
		templateUrl : "templates/alarms_startDate_endDate.html",
	
	})
	//este es digamos, al igual que en un switch el default, en caso que 
	//no hayamos concretado que nos redirija a la página principal
	.otherwise({ reditrectTo : "/" });


 

	 $translateProvider.translations('en', {
	 	//PANEL IZQUIERDO
	 	'PANEL_LISER' : 'List of Error', 
	 	'PANEL_LISAP' : 'List of API available',
	 	'PANEL_LOGIN' : 'Login',
	 	'PANEL_VERSI' : 'Version',
	 	'PANEL_METER' : 'Meters',
	 	'PANEL_PMETE' : 'Parameters',
	 	'PANEL_NONEN' : 'NONE',
	 	'PANEL_RESJS' : 'JSON Response',
	 	'PANEL_MEANI' : 'MEANING',
	 	'PANEL_TYPER' : 'TYPE',
	 	'PANEL_VALUE' : 'VALUES',
	 	'PANEL_VERAP' : 'Version of API',
	 	'PANEL_VERFW' : 'Version of framework',
	 	'PANEL_TIMLI' : 'Time on line',
	 	'PANEL_ENGIN' : 'Integrated Development Environment',
	 	'PANEL_BUILD' : 'Build date of framework',
	 	'PANEL_MODUL' : 'Type of modules',
	 	'PANEL_VERSS' : 'Version of type modules',
	 	// Apartado Principal
	 	'TITLE_ONE' : 'REST APIs',
		'PARAG_ONE' : 'The REST APIs provide programmatic access to read and write Protcloud data. Add new smart meter, delete a smart meter, update a smart meter information, read and write system information, and more. The REST API identifies Protcloud applications and users using JWE; responses are available in JSON.',
		'TITLE_TWO' : 'Authentication JWE',
		'PARAG_TWO' : 'JWE represents encrypted content using JSON data structures and base64url encoding. The representation consists of three parts: the JWE Header, the JWE Encrypted Key, and the JWE Ciphertext. The three parts are base64url-encoded for transmission, and typically represented as the concatenation of the encoded strings in that order, with the three strings being separated by period (.) characters.',
		'PARAG_THR' : 'JWE utilizes encryption to ensure the confidentiality of the contents of the Plaintext. JWE does not add a content integrity check if not provided by the underlying encryption algorithm. If such a check is needed, an algorithm providing it such as AES-GCM [NIST 800 38D] can be used, or alternatively, it can be provided through composition by encrypting a representation of the signed content (Jones Michael B., 2011).',
		'PARAG_FOU' : 'Thanks to the advantages of JWE, PROTCLOUD used JWE-based authentication, which allows interoperability and scalability to new technological needs.',
		'PARAG_FIV' : 'To obtain a JWT, its necessary login on PROTCLOUD with an app ID and password.',
		'PARAG_SIX' : 'This can be obtained by registering on the following link https://protcloud.com/app/v1/Register',
		'PARAG_SEV' : 'After registration of the application, we obtain the following information:',
		'PARAG_EIG' : 'name_app: "name_of_app"',
		'PARAG_NIN' : 'secret_key: "new_secret"',
		'PARAG_TEN' : 'It will be used to obtain a JWE through a login.',

		//list of error
		'LOE_TITTLE':'LIST OF API ERRORS',
		'LOE_ERROR':'ERROR',
		'LOE_MEANING':'MAINING',
		//LIST OF API AVIABLE
		'LOAA_TITTLE':'LIST OF API AVIABLE',
		'LOAA_METHOD':'METHOD',
		'LOAA_ACTION':'ACTION',


		//TITLE_LOGIN : 'Login or Create an Account'

		//Apartado Login
		'LOGIN_TITLE' : 'Login to the API',
		'LOGIN_SAUTH' : 'About application-only auth',
		'LOGIN_SUBTO' : 'Tokens are passwords',
		'LOGIN_PARAG' : 'Keep in mind that the consumer key & secret, bearer token credentials, and the bearer token itself grant access to make requests on behalf of an application. These values should be considered as sensitive as passwords and must not be shared or distributed to untrusted parties.',
		'LOGIN_RESSL' : 'SSL absolutely required',
		'LOGIN_USESS' : 'This manner of authentication is only secure if SSL is used. Therefore, all requests (both to obtain and use the tokens) must use HTTPS endpoints, which is also a requirement of using API v1. Please follow the best practices detailed in Connecting to Protcloud API using SSL - peers should always be verified.',
		'LOGIN_TAPPL' : 'Issuing application-only requests',
		'LOGIN_SOLAP' : 'First of all, it necessary to encode the secret key with SHA-128 then use it as credentials to obtain a bearer token.',
		'LOGIN_FIELD' : 'FIELD',
		'LOGIN_VALUE' : 'VALUE',
		'LOGIN_OBTOK' : 'Obtain a bearer tokens',
		'LOGIN_CASHA' : 'Once you calculated the SHA-1 of the secret key, you will use it in a new request.',
		'LOGIN_HTTPP' : 'The request must be a HTTP POST request.',
		'LOGIN_NAMEA' : 'The request must be include name_app and secret key',
		'LOGIN_REURL' : 'Resource URL',
		'LOGIN_RESIN' : 'Resource information',
		'LOGIN_METHO' : 'METHOD',
		'LOGIN_REFOR' : 'RESPONSE FORMATS',
		'LOGIN_DEDAT' : 'DECRYPTED DATA',
		'LOGIN_REQAU' : 'REQUIRES AUTHENTICATION?',
		'LOGIN_TYPRE' : 'TYPE REQUEST',
		'LOGIN_CODAT' : 'CONTENT DATA',
		'LOGIN_ENCRY' : 'ENCRYPTED (OPTIONAL)',
		'LOGIN_ALGOR' : 'ALGORITHM (OPTIONAL)',
		//Apartado Version
		'VERSI_TITLE' : 'Version to the API'

	});
	$translateProvider.translations('es', {
		//PANEL IZQUIERDO
		'PANEL_LISER' : 'Lista de Errores', 
		'PANEL_LISAP' : 'Lista de API disponible',
		'PANEL_LOGIN' : 'Inicio de sesión',
		'PANEL_VERSI' : 'Versión',
		'PANEL_METER' : 'Medidores',
		'PANEL_PMETE' : 'Parámetros',
		'PANEL_NONEN' : 'NINGUNO',
		'PANEL_RESJS' : 'Respuesta JSON',
		'PANEL_MEANI' : 'SIGNIFICADO',
		'PANEL_TYPER' : 'TIPO',
		'PANEL_VALUE' : 'VALORES',
		'PANEL_VERAP' : 'Versión del API',
		'PANEL_VERFW' : 'Versión de framework',
		'PANEL_TIMLI' : 'Tiempo en línea',
		'PANEL_ENGIN' : 'Entorno de desarrollo integrado',
		'PANEL_BUILD' : 'Fecha de construcción deL framework	',
		'PANEL_MODUL' : 'Tipo de módulos',
		'PANEL_VERSS' : 'Versión de los tipo de modulo',
		//
		'TITLE_ONE' : 'REST APIs',
		'PARAG_ONE' : 'Una REST API proporciona acceso mediante programación para leer y escribir datos de Protcloud. Añadir un nuevo medidor inteligente, eliminar un medidor inteligente, actualizar un medidor inteligente, leer y escribir información del sistema, y más. La REST API identifica aplicaciones Protcloud y los usuarios usan JWE; las respuestas están disponibles en JSON.',
		'TITLE_TWO' : 'Autenticación JWE',
		'PARAG_TWO' : 'JWE representa contenido cifrado usando estructuras de datos JSON y codificación base64url. La representación consta de tres partes: el encabezado JWE, la clave cifrada JWE y el texto cifrado JWE. Las tres partes están codificadas en base64url para la transmisión, y típicamente representadas como la concatenación de las cadenas codificadas en ese orden, con las tres cadenas separadas por caracteres de punto (.).',
		'PARAG_THR' : 'JWE utiliza cifrado para garantizar la confidencialidad de los contenidos del texto sin formato. JWE no añade una comprobación de integridad del contenido si no es proporcionada por el algoritmo de encriptación subyacente. Si dicha verificación es necesaria, un algoritmo que lo proporciona como AES-GCM [NIST‑800‑38D] puede usarlo, alternativamente, puede proporcionar a través de la composición mediante la encriptación de una representación del contenido firmado (Jones Michael B., 2011).',
		'PARAG_FOU' : 'Gracias a las ventajas de JWE, PROTCLOUD utiliza autenticación basada en JWE, que permite la interoperabilidad y escalabilidad a las nuevas necesidades tecnológicas.',
		'PARAG_FIV' : 'Para obtener una JWT, es necesario iniciar sesión en PROTCLOUD con un ID de aplicación y una contraseña.',
		'PARAG_SIX' : 'Esto puede obtenerse mediante el registro en el siguiente enlace https://protcloud.com/app/v1/Register',
		'PARAG_SEV' : 'Después del registro de la aplicación, obtenemos la siguiente información:',
		'PARAG_EIG' : 'name_app: "name_of_app"',
		'PARAG_NIN' : 'secret_key: "new_secret"',
		'PARAG_TEN' : 'Se utilizará para obtener un JWE a través de un inicio de sesión.',

		
		//list of error
		'LOE_TITTLE':'LISTA DE ERRORES DE API',
		'LOE_ERROR':'ERROR',
		'LOE_MEANING':'SIGNIFICADO',
		//LIST OF API AVIABLE
		'LOAA_TITTLE':'LISTA DE API DISPONIBLE ',
		'LOAA_METHOD':'MÉTODO',
		'LOAA_ACTION':'ACCIÓN',
		

		//
		'TITLE_LOGIN' : 'Iniciar Sesi\u00F3n',

		//Apartado Login 	
		'LOGIN_TITLE' : 'Acceso al API',
		'LOGIN_SAUTH' : 'Acerca de la autenticación',
		'LOGIN_SUBTO' : 'Los token son contraseñas',
		'LOGIN_PARAG' : 'Tenga en cuenta que la clave de consumidor y el secreto, las credenciales de token del portador y el token del portador en sí permiten el acceso para realizar solicitudes en nombre de una aplicación. Estos valores deben ser considerados tan sensibles como las contraseñas y no deben ser compartidos o distribuidos a las partes no confiables.',
		'LOGIN_RESSL' : 'SSL absolutamente requerido',
		'LOGIN_USESS' : 'Esta forma de autenticación sólo es segura si se utiliza SSL. Por lo tanto, todas las solicitudes (tanto para obtener como utilizar los tokens) deben utilizar terminales de HTTPS, lo que también es un requisito al utilizar API v1. Siga las prácticas recomendadas detalladas en Conexión a  la API de Protcloud usando SSL usando SSL - los pares deben ser verificados siempre.',
		'LOGIN_TAPPL' : 'Emitir las solicitudes de aplicación',
		'LOGIN_SOLAP' : 'En primer lugar, es necesario codificar la clave secreta con SHA-128 y luego usarla como credenciales para obtener un token de portador.',
		'LOGIN_FIELD' : 'CAMPO',
		'LOGIN_VALUE' : 'VALOR',
		'LOGIN_OBTOK' : 'Obtener un token de portador',
		'LOGIN_CASHA' : 'Una vez calculado el SHA-1 de la clave secreta, la utilizará en una nueva solicitud.',
		'LOGIN_HTTPP' : 'La solicitud debe ser HTTP POST.',
		'LOGIN_NAMEA' : 'La solicitud debe incluir name_app y clave secreta',
		'LOGIN_REURL' : 'Recurso URL',
		'LOGIN_RESIN' : 'Información de recursos',
		'LOGIN_METHO' : 'MÉTODO',
		'LOGIN_REFOR' : 'FORMATOS DE RESPUESTA', 
		'LOGIN_DEDAT' : 'DATOS DESCIFRADOS',
		'LOGIN_REQAU' : '¿REQUIERE AUTENTICACIÓN?',
		'LOGIN_TYPRE' : 'TIPO DE SOLICITUD',
		'LOGIN_CODAT' : 'DATOS DE CONTENIDO',
		'LOGIN_ENCRY' : 'ENCRIPTACIÓN (OPCIONAL)',
		'LOGIN_ALGOR' : 'ALGORITMO (OPCIONAL)',
		//Apartado Versión
		'VERSI_TITLE' : 'Versión de la API'

	});
	$translateProvider.preferredLanguage('es');
	$translateProvider.useSanitizeValueStrategy('escape');
	$locationProvider.hashPrefix('');

	
	
});
 prot_api.controller('CtrlPrin',['$scope', '$translate','serveData', function ($scope, $translate,serveData) {
    $scope.changeLanguage = function(key){
      $translate.use(key);
      
      $scope.objetoP.lan =key ;
      if(key=="es"){

      	$scope.objetoP.lan=key;
      }else if(key=="en"){

      	$scope.objetoP.lan=key;
      }

      //console.log($scope.objetoP.qty);
    };
    $scope.objetoP = serveData;
    //console.log($scope.objetoP);


  }]);