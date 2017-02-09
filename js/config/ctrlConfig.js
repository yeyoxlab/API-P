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
//más de lo mismo, pero en este caso creamos una variable llamada saludo y una función
//que gracias al objeto location y al método url nos redirigirá al login al hacer uso de ella
