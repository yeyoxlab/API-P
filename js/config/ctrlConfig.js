 prot_api.controller('CtrlPrin',['$scope', '$route','$translate','serveData','$location','$anchorScroll','$http', function (
  $scope, $route,$translate,serveData,$location,$anchorScroll,$http) {
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
    $http.get('https://protcloud.com/apps/v1/version', 
    {})
    .then(function(response) {
            
            //console.log(response);
    });
    $scope.activeLanguaje = 'en';

    $scope.objetoP = serveData;
  //  console.log(location);
    
    //$scope.activeMenu = $scope.objetoP.us;
    //console.log($scope.activeMenu);
    $scope.objetoP.us="error";
    $scope.gotoBottom = function() {
    
      $location.hash('top1');

      // call $anchorScroll()
      $anchorScroll();
     
    };

  }]);

