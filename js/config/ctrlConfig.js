prot_api.controller("indexController", function indexController($scope){
	console.log("prueba");
})
//Contr Karen
function config ($translateProvider, $locationProvider){
	$translateProvider.translations('en', {
		TITLE_ONE : 'REST APIs',
		PARAG_ONE : 'The REST APIs provide programmatic access to read and write Protcloud data. Add new smart meter, delete a smart meter, update a smart meter information, read and write system information, and more. The REST API identifies Protcloud applications and users using JWE; responses are available in JSON.',
		TITLE_TWO : 'Authentication JWE',
		PARAG_TWO : 'JWE represents encrypted content using JSON data structures and base64url encoding. The representation consists of three parts: the JWE Header, the JWE Encrypted Key, and the JWE Ciphertext. The three parts are base64url-encoded for transmission, and typically represented as the concatenation of the encoded strings in that order, with the three strings being separated by period (.) characters.',
		PARAG_THR : 'JWE utilizes encryption to ensure the confidentiality of the contents of the Plaintext. JWE does not add a content integrity check if not provided by the underlying encryption algorithm. If such a check is needed, an algorithm providing it such as AES-GCM [NIST 800 38D] can be used, or alternatively, it can be provided through composition by encrypting a representation of the signed content (Jones Michael B., 2011).',
		PARAG_FOU : 'Thanks to the advantages of JWE, PROTCLOUD used JWE-based authentication, which allows interoperability and scalability to new technological needs.',
		PARAG_FIV : 'To obtain a JWT, its necessary login on PROTCLOUD with an app ID and password.',
		PARAG_SIX : 'This can be obtained by registering on the following link https://protcloud.com/app/v1/Register ',
		PARAG_SEV : 'After registration of the application, we obtain the following information:',
		PARAG_EIG : 'name_app: "name_of_app"',
		PARAG_NIN : 'secret_key: "new_secret"',
		PARAG_TEN : 'It will be used to obtain a JWE through a login.'
	});
	$translateProvider.preferredLanguage('en');
	$translateProvider.useSanitizeValueStrategy('escape');
	$locationProvider.html5Mode(true);
}
//Términa contr Karen
 
//más de lo mismo, pero en este caso creamos una variable llamada saludo y una función
//que gracias al objeto location y al método url nos redirigirá al login al hacer uso de ella
