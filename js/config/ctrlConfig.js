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
        //console.log($scope.form_name) 
    };
  
    $scope.activeLanguaje = 'en';

    $scope.objetoP = serveData;
    
    $scope.activeMenu = $scope.objetoP.us;
    console.log($scope.activeMenu);
    $scope.objetoP.us="error";
    $scope.gotoBottom = function() {
    
      $location.hash('top1');

      // call $anchorScroll()
      $anchorScroll();
     
    };

  }]);

