function run($sessionStorage,$location) {
	//console.log(sessionStorage.isLogin); Verificar si realmente esta logueado el usuario
	//console.log($location); 
	//console.log($location.$$absUrl); URL de la página

	var find = $location.$$absUrl.indexOf("login.html");
	if(sessionStorage.isLogin == undefined || sessionStorage.isLogin == false){
		if(find === -1){
			window.location.href = "login.html";
		} 
	}else{
		find = $location.$$absUrl.indexOf("index.html");
		if(find === -1){
			window.location.href = "index.html";
		}
	}
	//$location.$$absUrl == "http://localhost:88/api-p/login.html
}