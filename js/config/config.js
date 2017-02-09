prot_api.config(function($routeProvider,$translateProvider,$locationProvider){
	$routeProvider.when("/", {
		templateUrl : "templates/index.html",
		
		
	}).when("/error", {
		templateUrl : "templates/listE.html",
		controller : "errorController"
	}).when("/lista", {
		templateUrl : "templates/listA.html",
		controller : "appController"		
	}).when("/login", {
		templateUrl : "templates/login.html",
	})
	.when("/version", {
		templateUrl : "templates/version.html",
	})
	.when("/meters", {
		templateUrl : "templates/meters.html",
	})
	.when("/meters_less", {
		templateUrl : "templates/meters_less.html",
	})
	.when("/meters_search", {
		templateUrl : "templates/meters_search.html",
	})
	.when("/meters_search_less", {
		templateUrl : "templates/meters_search_less.html",
	})
	.when("/meters_", {
		templateUrl : "templates/meters_.html",
	})
	.when("/meters_b", {
		templateUrl : "templates/meters_b_less.html",
	})
	.when("/meters_2", {
		templateUrl : "templates/meters_2.html",
	})
	.when("/meters_b_1", {
		templateUrl : "templates/meters_b_1.html",
	})
	.when("/meters_b_2", {
		templateUrl : "templates/meters_b_2.html",
	})
	.when("/meters_state_relay", {
		templateUrl : "templates/meters_state_relay.html",
	})
	.when("/meters_reset_meter", {
		templateUrl : "templates/meters_reset_meter.html",
	})
	.when("/alarms_startDate_endDate", {
		templateUrl : "templates/alarms_startDate_endDate.html",
	
	}).when("/alarms_num_serie", {
		templateUrl : "templates/alarms_num_serie.html",
	
	}).when("/alarms_SD_ED_NS", {
		templateUrl : "templates/alarms_SD_ED_NS.html",
	
	}).when("/alarms_SD_ED_Limit", {
		templateUrl : "templates/alarms_SD_ED_Limit.html",
	
	}).when("/alarms_SD_ED_LT_READ", {
		templateUrl : "templates/alarms_SD_ED_LT_READ.html",
	
	}).when("/system", {
		templateUrl : "templates/system.html",
	
	}).when("/system_less", {
		templateUrl : "templates/system_less.html",
	
	})
	
	//este es digamos, al igual que en un switch el default, en caso que 
	//no hayamos concretado que nos redirija a la página principal
	.otherwise({ reditrectTo : "/" });


 

	 $translateProvider.translations('en', {
	 	//PANEL IZQUIERDO
	 	'PANEL_HOME'  : 'HOME', 
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
		'LOE_MEANING':'MEANING',
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
		'VERSI_TITLE' : 'Version to the API',
			
		//Meters
			'TITLE_UNO' : 'RESOURCE URL' ,
			'METERS_UNO' : 'RESOURCE INFORMATION' ,
			'METERS_DOS' : 'METHOD' ,
			'METERS_TRES' : 'RESPONSE FORMATS' ,
			'METERS_CUATRO' : 'DECRYPTED DATA' ,
			'METERS_CINCO' : 'REQUIRES AUTHENTICATION?' ,
			'METERS_SEIS' : 'YES' ,
			'METERS_SIETE' : 'TYPE REQUEST' ,
			'METERS_OCHO' : 'REQUEST' ,
			'METERS_NUEVE' : 'RESPONSE' ,
			'METERS_DIEZ' : 'EXAMPLE IN POSTMAN:' ,
			'METERS_ONCE' : 'There are multiple results from an array with all smart meters to a false result with the error description.' ,
			'METERS_DOCE' : 'It indicates that any smart meter was found:' ,
			'METERS_TRECE' : 'FIELD' ,
			'METERS_CATORCE' : 'MEANING' ,
			'METERS_QUINCE' : 'TYPE' ,
			'METERS_DIECISEIS' : 'VALUES' ,
			'METERS_DIECISIETE' : 'Error in transaction' ,
			'METERS_DIECIOCHO' : 'Unique error detect' ,
			'METERS_DIECINUEVE' : 'Description of error' ,		
			'METERS_II' : 'Or an Array with data Smart meters:' ,
			'METERS_II_UNO' : 'INFO_METER' ,
			'METERS_II_DOS' : 'INFO_METER is applicable for all types of smart meters' ,
			'METERS_II_TRES' : 'Unique ID' ,
			'METERS_II_CUATRO' : 'Meter position in the cabinet' ,
			'METERS_II_CINCO' : 'Meter position in the cabinet type of smart meter' ,
			'METERS_II_SEIS' : 'Serial number of the smart meter' ,
			'METERS_II_SIETE' : 'Meter code given by cfe' ,
			'METERS_II_OCHO' : 'Lot number manufacturer' ,
			'METERS_II_NUEVE' : 'Date of smart meter' ,
			'METERS_III' : 'MAC address of the smart meter' ,
			'METERS_III_UNO' : 'Timestamp of data' ,
			'METERS_III_DOS' : 'Quality communications' ,
			'METERS_III_TRES' : 'Meter status' ,
			'METERS_III_CUATRO' : 'SICOM status' ,
			'METERS_III_CINCO' : 'Address bus' ,
			'METERS_III_SEIS' : 'Latitude ' ,
			'METERS_III_SIETE' : 'Longitude' ,
			'METERS_III_OCHO' : 'Time polling of smart meter' ,
			'METERS_III_NUEVE' : 'STATUS_METER' ,
			'METERS_IV' : 'STATUS_METER is applicable for all types of smart meters',
			'METERS_IV_UNO' : 'Indicates the status of the RTC (real time clock)',
			'METERS_IV_DOS' : 'Indicates the status of the flash memory ',
			'METERS_IV_TRES' : 'Indicates the status of the memory eeprom',
			'METERS_IV_CUATRO' : 'Indicates the status of mesure voltaje',
			'METERS_IV_CINCO' : 'Indicates position of Smart meter',
			'METERS_IV_SEIS' : 'Indicates state of relay',
			'METERS_IV_SIETE' : 'CONSUMPTION_PHASES',
			'METERS_IV_OCHO' : 'This section contains all consumption of the phases, identifying each of the phase in a different section.',
			'METERS_IV_NUEVE' : 'Sections availables:',
			'METERS_V' : 'PHASE_I',
			'METERS_V_UNO' : 'PHASE_II',
			'METERS_V_DOS' : 'PHASE_III',
			'METERS_V_TRES' : 'Total kWh delivered to the customer',
			'METERS_V_CUATRO' : 'Total CFE KWh delivered by the customer.',
			'METERS_V_CINCO' : 'The total balance of kWh delivered and received',
			'METERS_V_SEIS' : 'Total KVArh of the first quadrant',
			'METERS_V_SIETE' : 'Total KVArh of the second quadrant',
			'METERS_V_OCHO' : 'Total KVArh of the third quadrant',
			'METERS_V_NUEVE' : 'Total KVArh of the fourth quadrant',
			'METERS_VI' : 'INSTANTANEOUS_PHASES',
			'METERS_VI_I' : 'This section contains all instantaneous values of the phases, identifying each of the phase in a different section.',
			'METERS_VI_UNO' : 'Last voltage recorded ',
			'METERS_VI_DOS' : 'Last current recorded',
			'METERS_VI_TRES' : 'Last power factor recorded',
			'METERS_VI_CUATRO' : 'Last apparent power recorded ',
			'METERS_VI_CINCO' : 'Last active power recorded ',
			'METERS_VI_SEIS' : 'Last reactive power recorded ',
			'METERS_VI_SIETE' : 'Last frequency recorded ',
			'METERS_VI_OCHO' : 'PEAK_DEMAND_PHASES',
			'METERS_VI_NUEVE' : 'This section contains the demand maxim of the phases, identifying each of the phase in a different section.',
			'METERS_VII' : 'Total demand in phase',
			//api/v1/meters/less
			'LESS_' : 'PARAMETERS',
			'LESS' : 'NONE',
			'LESS_I' : 'Serial number of the smart meter',
			'LESS_II' : 'Timestamp of data',
			'LESS_III' : 'Meter status',
			'LESS_IV' : 'Indicates state of relay',
			'LESS_V' : 'Indicates the status of mesure voltaje',
			'LESS_VI' : 'Maxim demand in phase',
			
			//meters/search/?
			'METERSEARCH_I' : 'PARAMETERS URL',
			'METERSEARCH_II' : 'UNIQUE ID METER',
			'METERSEARCH_III' : 'INTEGER',
			'METERSEARCH_IV' : 'OR',
			'METERSEARCH_V' : 'SERIAL NUMBER',
			'METERSEARCH_VI' : 'STRING',
			
			//meters/search/?/less
			'LESS_S_I' : 'Serial number of the smart meter',
			'LESS_S_II' : 'Timestamp of data',
			'LESS_S_III' : 'Meter status',
			'LESS_S_IV' : 'Indicates state of relay',
			'LESS_S_V' : 'Indicates the status of mesure voltaje',
			
			//meters_
			'meters_I' : 'CONTENT DATA',
			'meters_II' : 'ADDRESS',
			'meters_III' : 'MAC',
			'meters_IV' : 'SERIAL_NUMBER',
			'meters_V' : 'TYPE_PROTOCOL',
			'meters_VI' : 'TYPE_ZB_PROTOCOL',
			'meters_VII' : 'TYPE_METER',
			'meters_VIII' : 'Json Response',
			'meters_IX' : 'RESULT OF A SUCCESFUL TRANSACTION',
			'meters_X' : 'UID OF NEW SMART METER',
			'meters_XI' : 'Or an error with the description',
			//meters_b_1
			'meters_b_1_I' : 'CONTENT DATA',
			'meters_b_1_II' : 'SLOT',
			'meters_b_1_III' : 'TYPE_METER',
			'meters_b_1_IV' : 'SERIAL_NUMBER',
			'meters_b_1_V' : 'CODE_METER',
			'meters_b_1_VI' : 'MAC',
			'meters_b_1_VII' : 'ADDRESS',
			'meters_b_1_VIII' : 'LATITUDE',
			'meters_b_1_IX' : 'LONGITUDE',
			'meters_b_1_X' : 'RESULT OF A SUCCESFUL TRANSACTION',
			'meters_b_1_XI' : 'Or an error with the description',
			//meters_state_relay
			'm_s_r_I' : 'JSON response with an Array with an object for each meter',
			'm_s_r_II' : 'RESULT OF A SUCCESFUL TRANSACTION',
			'm_s_r_III' : 'UID OF NEW SMART METER',
			'm_s_r_IV' : 'TICKET OF TRANSACTION',
			'm_s_r_V' : 'UID of new smart meter',
			// meters/reset_meter
			'm_r_m_I':'Note: If applicable option 2 was restoring meter settings, decimal values will by automatic zero.',
			//alarms?startDate=?&endDate
			'ASD_I':'JSON response with an Array with an object for each alarm, there are two different type of alarm, meter alarm and system alarm:',
			'ASD_II':'An alert system has the following structure: ',
			'ASD_III':'indicates the type of alarm',
			'ASD_IV':'Unique code for identifying alert',
			'ASD_V':'Timestamp of alert with Mysql format',
			'ASD_VI':'Note: The types of alarms are: meter or DCU',
			'ASD_VII':'An alert meter has the following structure:',
			'ASD_VIII':'Indicates the type of alarm',
			'ASD_IX':'Serial number of meter',
			'ASD_X':'Unique code for identifying alert',
			'ASD_XI':'Timestamp of alert with Mysql format',
			'ASD_XII':'Consumption stamping',
			'ASD_XIII':'Note: The types of alarms are: meter or DCU',
			'ASD_XIV':'List of alerts in the system',
			'ASD_XV':'CODE ALARM',
			'ASD_XVI':'MEANING',
			'ASD_XVII':'DCU in battery mode',
			'ASD_XVIII':'DCU offline',
			'ASD_XIX':'Incorrect login',
			'ASD_XX':'Command execution attempt without Login',
			'ASD_XXI':'Attempt to create new meter without login',
			'ASD_XXII':'Meter attempt to create without permission',
			'ASD_XXIII':'Meter attempt removal without login',
			'ASD_XXIV':'Meter attempt removal without permission',
			'ASD_XXV':'Attempt to upgrade without login',
			'ASD_XXVI':'Attempt to upgrade without permission',
			'ASD_XXVII':'Failed upgrade',
			'ASD_XXVIII':'Attempt to modify the configuration of the DCU wit...',
			'ASD_XXIX':'Attempt to modify the configuration of the DCU wit...',
			'ASD_XXX':'Cabinet opening',
			'ASD_XXXI':'Unknow',
			'ASD_XXXII':'Critical comunication',
			'ASD_XXXIII':'List of alerts in the meter',
			'ASD_XXXIV':'Reserved',
			'ASD_XXXV':'Reserved',
			'ASD_XXXVI':'Failure relay',
			'ASD_XXXVII':'Overflowed value',
			'ASD_XXXVIII':'Failure real time clock',
			'ASD_XXXIX':'Restoring real time clock',
			'ASD_XL':'Optical access port',
			'ASD_XLI':'Damaged measurement records',
			'ASD_XLII':'Reset events',
			'ASD_XLIII':'External fault memory',
			'ASD_XLIV':'Internal fault memory',
			'ASD_XLV':'Failure measurement',
			'ASD_XLVI':'Reset settings',
			'ASD_XLVII':'Re-programming MODE',
			'ASD_XLVIII':'Firmware update',
			'ASD_XLIX':'Re-programming of parameters',
			'ASD_L':'Resetting meter records',
			'ASD_LI':'Re-programming of date and time',
			'ASD_LII':'Return voltage setpoint',
			'ASD_LIII':'Disconnect exhausted balance',
			'ASD_LIV':'Disconnection of service due command',
			'ASD_LV':'Power failure',
			'ASD_LVI':'Restoring power',
			'ASD_LVII':'Demand exceeded alarm',
			'ASD_LVIII':'Retirement meter base',
			'ASD_LIX':'Meter positioned correctly',
			'ASD_LX':'Disconnection for non-payment',
			'ASD_LXI':'Credit recharge successful',
			'ASD_LXII':'Alarm High Voltage',
			'ASD_LXIII':'Alarm low voltage',
			'ASD_LXIV':'Reconnection of service user',
			'ASD_LXV':'Meter with reversed position',
			'ASD_LXVI':'Reverse energy flow',
			'ASD_LXVII':'Re-Connection by command',
			'ASD_LXVIII':'Flow correct current',
			'ASD_LXIX':'Failure by buying credit',
			'ASD_LXX':'Registration successful payment',
			'ASD_LXXI':'Failure to pay registration',
			'ASD_LXXII':'Disconnect user',
			'ASD_LXXIII':'Reconnection by buying credit',
			'ASD_LXXIV':'Return of demand at nominal value',
			'ASD_LXXV':'Test mode activated',
			'ASD_LXXVI':'Phase bridged',
			'ASD_LXXVII':'Bridged retirement phase',
			'ASD_LXXVIII':'Invalid password',
			'ASD_LXXIX':'Reconnect remote port',
			'ASD_LXXX':'Reconnect optical port',
			'ASD_LXXXI':'Schedule change',
			'ASD_LXXXII':'Buffer full events',
			'ASD_LXXXIII':'Remote shutdown port',
			'ASD_LXXXIV':'Reconnect optical port',
			//alarms_num_serie
			'ANS_I':'Note: The type alarms is of meter',
			//System
			'system_I':'UID of data concentrator unit',
			'system_II':'Id name of data concentrator unit',
			'system_III':'Timestamp of data',
			'system_IV':'Cpu usage (%)',
			'system_V':'Ram usage (%)',
			'system_VI':'Hdd usage (%)',
			'system_VII':'Total ram (Gb)',
			'system_VIII':'Total space available (Gb)',
			'system_IX':'Model of data concentrator unit',
			'system_X':'Type of architecture',
			'system_XI':'System release',
			'system_XII':'System version',
			'system_XIII':'Number of meters available',
			'system_XIV':'Number of meters not available',
			'system_XV':'Time polling',
			'system_XVI':'Time to update system',
			'system_XVII':'During  last time polling',
			'system_XVIII':'Name of firmware',
			//System/less
			'SL_I':'Availability of system',
			'SL_II':'Status of battery',
			
			
	});
	$translateProvider.translations('es', {
		//PANEL IZQUIERDO
		'PANEL_HOME'  : 'HOME', 
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
		'VERSI_TITLE' : 'Versión de la API',
		
		//Meters
		'TITLE_UNO' : 'RECURSO de URL' ,
		'METERS_UNO' : 'INFORMACIÓN DE RECURSOS' ,
		'METERS_DOS' : 'MÉTODO' ,
		'METERS_TRES' : 'FORMATOS DE RESPUESTA' ,
		'METERS_CUATRO' : 'DATOS DESCIFRADOS' ,
		'METERS_CINCO' : 'REQUIERE AUTENTICACIÓN?' ,
		'METERS_SEIS' : 'SI' ,
		'METERS_SIETE' : 'SOLICITUD DE TIPO' ,
		'METERS_OCHO' : 'SOLICITUD' ,
		'METERS_NUEVE' : 'RESPUESTA' ,
		'METERS_DIEZ' : 'EJEMPLO EN POSTMAN:' ,
		'METERS_ONCE' : 'Hay múltiples resultados de una matriz con todos los medidores inteligentes a un resultado falso con la descripción del error.' ,
		'METERS_DOCE' : 'Indica que se encontró cualquier medidor inteligente:' ,
		'METERS_TRECE' : 'CAMPO' ,
		'METERS_CATORCE' : 'SIGNIFICADO' ,
		'METERS_QUINCE' : 'TIPO' ,
		'METERS_DIECISEIS' : 'VALORES' ,
		'METERS_DIECISIETE' : 'Error en la transacción' ,
		'METERS_DIECIOCHO' : 'Detección de error única' ,
		'METERS_DIECINUEVE' : 'Descripción del error' ,		
		'METERS_II' : 'O un Array con datos de medidores inteligente:' ,
		'METERS_II_UNO' : 'MEDIDOR DE INFORMACION' ,
		'METERS_II_DOS' : 'Medidor de informacion es aplicable para todo tipo de contadores inteligentes' ,
		'METERS_II_TRES' : 'Identificación única' ,
		'METERS_II_CUATRO' : 'Posición del medidor en el armario' ,
		'METERS_II_CINCO' : 'Posición del medidor en el gabinete tipo de medidor inteligente' ,
		'METERS_II_SEIS' : 'Número de serie del medidor inteligente' ,
		'METERS_II_SIETE' : 'Código del medidor dado por cfe' ,
		'METERS_II_OCHO' : 'Fabricante del número de lote' ,
		'METERS_II_NUEVE' : 'Fecha del medidor inteligente' ,
		'METERS_III' : 'Dirección MAC del medidor inteligente' ,
		'METERS_III_UNO' : 'Fecha y hora de los datos' ,
		'METERS_III_DOS' : 'Comunicaciones de calidad' ,
		'METERS_III_TRES' : 'Estado del medidor' ,
		'METERS_III_CUATRO' : 'Estado SICOM' ,
		'METERS_III_CINCO' : 'Dirección de BUS' ,
		'METERS_III_SEIS' : 'Latitud ' ,
		'METERS_III_SIETE' : 'Longitud' ,
		'METERS_III_OCHO' : 'Tiempo de sondeo del medidor inteligente' ,
		'METERS_III_NUEVE' : 'MEDIR DE ESTADO' ,
		'METERS_IV' : 'MEDIR DE ESTADO es aplicable para todos los tipos de contadores inteligentes',
		'METERS_IV_UNO' : 'Indica el estado del RTC (reloj de tiempo real)',
		'METERS_IV_DOS' : 'Indica el estado de la memoria flash',
		'METERS_IV_TRES' : 'Indica el estado de la memoria eeprom',
		'METERS_IV_CUATRO' : 'Indica el estado del voltaje de medicion',
		'METERS_IV_CINCO' : 'Indica la posición del medidor inteligente',
		'METERS_IV_SEIS' : 'Indica el estado del Relay',
		'METERS_IV_SIETE' : 'FASES DEL CONSUMO',
		'METERS_IV_OCHO' : 'Esta sección contiene todo el consumo de las fases, identificando cada una de las fases en una sección diferente.',
		'METERS_IV_NUEVE' : 'Secciones disponibles:',
		'METERS_V' : 'FASE_I',
		'METERS_V_UNO' : 'FASE_II',
		'METERS_V_DOS' : 'FASE_III',
		'METERS_V_TRES' : 'Total kWh entregado al cliente',
		'METERS_V_CUATRO' : 'Total CFE KWh entregado por el cliente.',
		'METERS_V_CINCO' : 'El saldo total de kWh entregado y recibido',
		'METERS_V_SEIS' : 'Total KVAr del primer cuadrante ',
		'METERS_V_SIETE' : 'Total KVArh del segundo cuadrante',
		'METERS_V_OCHO' : 'Total KVArh del tercer cuadrante',
		'METERS_V_NUEVE' : 'Total KVArh del cuarto cuadrante',
		'METERS_VI' : 'FASES INSTANTANEAS',
		'METERS_VI_I' : 'Esta sección contiene todos los valores instantáneos de las fases, identificando cada una de las fases en una sección diferente',
		'METERS_VI_UNO' : 'Última tensión registrada',
		'METERS_VI_DOS' : 'Última corriente registrada',
		'METERS_VI_TRES' : 'Última factor de potencia registrada',
		'METERS_VI_CUATRO' : 'Última potencia aparente registrada',
		'METERS_VI_CINCO' : 'Última potencia activa registrada',
		'METERS_VI_SEIS' : 'Última potencia reactiva registrada',
		'METERS_VI_SIETE' : 'Última frecuencia registrada',
		'METERS_VI_OCHO' : 'FASES DE LA DEMANDA',
		'METERS_VI_NUEVE' : 'Esta sección contiene la máxima de demanda de las fases, identificando cada una de las fases en una sección diferente',
		'METERS_VII' : 'Demanda total en fase',
		//api/v1/meters/less
		'LESS_' : 'PARÁMETROS',
		'LESS' : 'NINGUNA',
		'LESS_I' : 'Número de serie del medidor inteligente',
		'LESS_II' : 'Fecha y hora de los datos',
		'LESS_III' : 'Estado del medidor',
		'LESS_IV' : 'Indica el estado del relay',
		'LESS_V' : 'Indica el estado del voltaje de medición',
		'LESS_VI' : 'Demanda máxima en fase',
		
		//meters/search/?
		'METERSEARCH_I' : 'PARAMETROS URL',
		'METERSEARCH_II' : 'MEDIDOR DE IDENTIFICACIÓN ÚNICA',
		'METERSEARCH_III' : 'INTEGER',
		'METERSEARCH_IV' : 'O',
		'METERSEARCH_V' : 'NÚMERO DE SERIE',
		'METERSEARCH_VI' : 'STRING',
		
		//meters/search/?/less
		'LESS_S_I' : 'Número de serie del medidor inteligente',
		'LESS_S_II' : 'Fecha y hora de los datos',
		'LESS_S_III' : 'Estado del medidor',
		'LESS_S_IV' : 'Indica el estado del Relay',
		'LESS_S_V' : 'Indica el estado del voltaje de medición',
		
		//meters_
		'meters_I' : 'DATOS DE CONTENIDO',
		'meters_II' : 'DIRECCIÓN',
		'meters_III' : 'MAC',
		'meters_IV' : 'NÚMERO DE SERIE',
		'meters_V' : 'TIPO DE PROTOCOLO',
		'meters_VI' : 'TIPO ZB PROTOCOLO',
		'meters_VII' : 'TIPO DE MEDIDOR',
		'meters_VIII' : 'Respuesta de JSON',
		'meters_IX' : 'Resultado de una transacción exitosa',
		'meters_X' : 'UID de nuevo medidor inteligente',
		'meters_XI' : 'O un error con la descripción',
		//meters_b_1
		'meters_b_1_I' : 'Datos del contenido',
		'meters_b_1_II' : 'Espacio',
		'meters_b_1_III' : 'Medidor de Tipo',
		'meters_b_1_IV' : 'Número de Serie',
		'meters_b_1_V' : 'Codigo de medidor',
		'meters_b_1_VI' : 'MAC',
		'meters_b_1_VII' : 'Dirección',
		'meters_b_1_VIII' : 'Latitud',
		'meters_b_1_IX' : 'Longitud',
		'meters_b_1_X' : 'RESULTADO DE UNA TRANSACCIÓN EXITOSA',
		'meters_b_1_XI' : 'O un error con la descripción',
		//meters_state_relay
		'm_s_r_I' : 'JSON respuesta con un Array con un objeto para cada Medidor',
		'm_s_r_II' : 'Resultado de una transacción exitosa',
		'm_s_r_III' : 'UID de nuevo medidor inteligente',
		'm_s_r_IV' : 'Boleto de Transacción',
		'm_s_r_V' : 'UID de nuevo medidor inteligente',
		// meters/reset_meter
		'm_r_m_I':'Nota: Si procede, la opción 2 restauraba la configuración del medidor, los valores decimales se harían por cero automático',
		//alarms?startDate=?&endDate
		'ASD_I':'JSON respuesta con un Array con un objeto para cada alarma, hay dos tipos diferentes de alarma, alarma del medidor y alarma del sistema',
		'ASD_II':'Un sistema de alerta tiene la siguiente estructura:',
		'ASD_III':'Indica el tipo de alarma',
		'ASD_IV':'Código único para identificar la alerta',
		'ASD_V':'Timestamp de alerta con formato Mysql',
		'ASD_VI':'Nota: los tipos de alarmas son: Medidor o DCU',
		'ASD_VII':'Un medidor de alerta tiene la siguiente estructura',
		'ASD_VIII':'Indica el tipo de alarma',
		'ASD_IX':'Número de serie del medidor',
		'ASD_X':'Código único para identificar la alerta',
		'ASD_XI':'Timestamp de alerta con formato Mysql',
		'ASD_XII':'Estampado de consumo',
		'ASD_XIII':'Nota: los tipos de alarmas son: Medidor o DCU',
		'ASD_XIV':'Lista de alertas en el sistema',
		'ASD_XV':'Alarma de código',
		'ASD_XVI':'Significado',
		'ASD_XVII':'DCU en modo de bateria',
		'ASD_XVIII':'DCU sin conexión',
		'ASD_XIX':'Login incorrecto',
		'ASD_XX':'Intento de ejecución de comandos sin iniciar sesión',
		'ASD_XXI':'Intento de crear un nuevo medidor sin iniciar conexión ',
		'ASD_XXII':'Medidor intente crear sin permiso',
		'ASD_XXIII':'Eliminación del intento del medidor sin iniciar sesión',
		'ASD_XXIV':'Intento de eliminación del medidor sin permiso',
		'ASD_XXV':'Intentar actualizar sin iniciar sesión',
		'ASD_XXVI':'Intento de actualización sin permiso',
		'ASD_XXVII':'Error de actualización',
		'ASD_XXVIII':'Intenta modificar la configuracion de la DCU con...',
		'ASD_XXIX':'Intenta modificar la configuracion de la DCU con...',
		'ASD_XXX':'Apertura del gabinete',
		'ASD_XXXI':'Desconocido',
		'ASD_XXXII':'Comunicación crítica',
		'ASD_XXXIII':'Lista de alertas en el Medidor',
		'ASD_XXXIV':'Reservado',
		'ASD_XXXV':'Reservado',
		'ASD_XXXVI':'Fallo de Relay',
		'ASD_XXXVII':'Valor desbordado',
		'ASD_XXXVIII':'Error en el tiempo real',
		'ASD_XXXIX':'Restauración del reloj en tiempo real',
		'ASD_XL':'Puerto de acceso optico',
		'ASD_XLI':'Registros de medición dañados',
		'ASD_XLII':'Restablecer eventos',
		'ASD_XLIII':'Memoria de fallos externos',
		'ASD_XLIV':'Memoria de fallos internos',
		'ASD_XLV':'Medición de fallos',
		'ASD_XLVI':'Reiniciar ajustes',
		'ASD_XLVII':'Reprogramación de modalidad',
		'ASD_XLVIII':'Actializacion de Firmware',
		'ASD_XLIX':'Reprogramación de parámetros',
		'ASD_L':'Restablecimiento de registros de medidores',
		'ASD_LI':'Reprogramacion de fecha y hora',
		'ASD_LII':'Consigna de voltage de retorno',
		'ASD_LIII':'Desconectar el equilibrio agotado',
		'ASD_LIV':'Desconexión del servicio debido comando',
		'ASD_LV':'Fallo de alimentacion',
		'ASD_LVI':'Restauración de la energía',
		'ASD_LVII':'Demanda superada alarma',
		'ASD_LVIII':'Base del medidor de jubilación',
		'ASD_LIX':'Medidor colocado correctamente',
		'ASD_LX':'Desconexión por falta de pago',
		'ASD_LXI':'Recargs de credito exitosa',
		'ASD_LXII':'Alarma de alto voltaje',
		'ASD_LXIII':'Alarma de baja tensión',
		'ASD_LXIV':'Reconexión del usuario del servicio',
		'ASD_LXV':'Medidor con posición invertida',
		'ASD_LXVI':'Flujo inverso de energía',
		'ASD_LXVII':'Reconexión por comando',
		'ASD_LXVIII':'Corriente correcta de flujo',
		'ASD_LXIX':'Error al comprar codigo',
		'ASD_LXX':'Registro de pago exitoso',
		'ASD_LXXI':'Falta de pago del registro',
		'ASD_LXXII':'Desconectar usuario',
		'ASD_LXXIII':'Reconexión mediante la compra de crédito',
		'ASD_LXXIV':'Retorno de la demanda al valor nominal',
		'ASD_LXXV':'Modo de prueba activo',
		'ASD_LXXVI':'Fase puenteada',
		'ASD_LXXVII':'Etapa de retiro en puente',
		'ASD_LXXVIII':'Contraseña invalida',
		'ASD_LXXIX':'Reconectar el puerto remoto',
		'ASD_LXXX':'Vuelva a conectar el puerto óptico',
		'ASD_LXXXI':'Cambio de horario',
		'ASD_LXXXII':'Regulador de eventos completos',
		'ASD_LXXXIII':'Puerto de apagado remoto',
		'ASD_LXXXIV':'Vuelva a conectar el puerto óptico',
		//alarms_num_serie
		'ANS_I':'Nota: El tipo de alarmas es de medidor',
		//System
		'system_I':'UID del concentrador de datos',
		'system_II':'Nombre de identificación de la unidad concentradora de datos',
		'system_III':'Fecha y hora de los datos',
		'system_IV':'Uso de CPU (%)',
		'system_V':'Uso de RAM (%)',
		'system_VI':'Uso de HDD (%)',
		'system_VII':'Total ram (Gb)',
		'system_VIII':'Total de espacio disponible(Gb)',
		'system_IX':'Modelo de concentrador de datos',
		'system_X':'Tipo de arquitectura',
		'system_XI':'Liberación del sistema',
		'system_XII':'Versión del sistema',
		'system_XIII':'Número de metros disponibles',
		'system_XIV':'Número de metros no disponibles',
		'system_XV':'Tiempo de votación',
		'system_XVI':'Tiempo para actualizar el sistema',
		'system_XVII':'Durante el último sondeo',
		'system_XVIII':'Nombre del firmware',
		//System/less
		'SL_I':'Disponibilidad del sistema',
		'SL_II':'Estado de la batería',

	});
	$translateProvider.preferredLanguage('es');
	$translateProvider.useSanitizeValueStrategy('escape');
	$locationProvider.hashPrefix('');

	
	
});
 prot_api.controller('CtrlPrin',['$scope', '$route','$translate','serveData', function ($scope, $route,$translate,serveData) {
    $scope.changeLanguage = function(key){
      $translate.use(key);
      
      $scope.objetoP.lan =key ;
      if(key=="es"){

      	$scope.objetoP.lan=key;
      }else if(key=="en"){

      	$scope.objetoP.lan=key;
      }

      //console.log($scope.objetoP.qty);
      $route.reload();
        console.log($scope.form_name) //to ensure scope is updating
    };
    $scope.objetoP = serveData;
    


  }]);