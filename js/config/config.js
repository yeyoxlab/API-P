prot_api.config(function($routeProvider,$translateProvider,$locationProvider){
	$routeProvider.when("/", {
		templateUrl : "templates/index.html",
		
		
	})
	.when("/error", {
		templateUrl : "templates/listE.html",
		
	})
	.when("/lista", {
		templateUrl : "templates/listA.html",
		controller : "Ctr"		
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
		
	})
	//este es digamos, al igual que en un switch el default, en caso que 
	//no hayamos concretado que nos redirija a la página principal
	.otherwise({ reditrectTo : "/" });


 

	 $translateProvider.translations('en', {
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

	});
	$translateProvider.translations('es', {
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