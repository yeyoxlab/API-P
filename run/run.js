function run($sessionStorage,$location) {
	//console.log(sessionStorage.isLogin);
	//console.log($location.$$absUrl);
	if($sessionStorage.isLogin == undefined || $sessionStorage.isLogin == false){
		window.location.href = "login.html";
	}
	if($location.$$absUrl == "http://localhost:88/api-p/login.html"){
		
	}
}