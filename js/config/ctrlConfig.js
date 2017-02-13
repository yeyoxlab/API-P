 prot_api.controller('CtrlPrin',['$scope', '$route','$translate','serveData','$location','$anchorScroll', function (
  $scope, $route,$translate,serveData,$location,$anchorScroll) {
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
        //console.log($scope.form_name) //to ensure scope is updating
    };
    $scope.objetoP = serveData;
    
    $scope.gotoBottom = function() {
      // set the location.hash to the id of
      // the element you wish to scroll to.
      $location.hash('top1');

      // call $anchorScroll()
      $anchorScroll();
     
    };

  }]);
//más de lo mismo, pero en este caso creamos una variable llamada saludo y una función
//que gracias al objeto location y al método url nos redirigirá al login al hacer uso de ella
