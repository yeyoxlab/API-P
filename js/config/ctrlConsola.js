 function syntaxHighlight(json) {
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
        var cls = 'number';
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'key';
            } else {
                cls = 'string';
            }
        } else if (/true|false/.test(match)) {
            cls = 'boolean';
        } else if (/null/.test(match)) {
            cls = 'null';
        }
        return '<span class="' + cls + '">' + match + '</span>';
    });
}


 prot_api.controller('ctrlConsola',['$scope','$http',"$q","$sce", function ( $scope , $http  ,$q, $sce ) {
  $scope.consoleData="";
  $scope.inputConsole2="";
  $scope.fnEnter=function(e){
    console.log(e.keyCode);
  }
 
$scope.inputConsole='post F user_system=trial.2017 -F pwd=tri@l.2017$ -F encrypted=false https://protcloud.com/apps/v1/login_user_system';
var ishttp=false;
var HH=[];
var FF=[];
var HHT="'Content-Type' : 'application/x-www-form-urlencoded;charset=utf-8;'";
var FFT="";
var AddR;
var HN=0;
var FN=0;
var numFF=0;
var numHH=0;
var methodC="";

    $scope.cca=function(){
      //console.log($scope.inputConsole);

        var processData=$scope.inputConsole.split(" ");
       
        for (var i = 0; i < processData.length; i++) {
          if(processData[i]=="-H"||processData[i]=="-h"){
            numHH++;
            console.log(numHH);
          }
          if(processData[i]=="-F"||processData[i]=="-f"||processData[i]=="-d"||processData[i]=="-D"){
            numFF++;
          }
          if(processData[i]=="POST"||processData[i]=="post"||processData[i]=="Post"){
            methodC="post";
          }
          if(processData[i]=="GET"||processData[i]=="get"||processData[i]=="Get"){
            methodC="get";
          }
          if(processData[i]=="PUT"||processData[i]=="put"||processData[i]=="Put"){
            methodC="put";
          }
          if(processData[i]=="DELETE"||processData[i]=="delete"||processData[i]=="Delete"){
            methodC="delete";
          }
        }


        //console.log(processData);
      //separar datos
        for (var i = 0; i < processData.length; i++) {
      //comprueba que sea DATA
                if (processData[i]=="-F"||processData[i]=="-f"||processData[i]=="-d"||processData[i]=="-D") {
                 FF[FN]=processData[i+1].replace(/"/g,"").split("=");
                   if(FN<(numFF-1)){
                    FFT=FFT+FF[FN][0]+'='+FF[FN][1]+'&';
                   }else{
                    FFT=FFT+FF[FN][0]+'='+FF[FN][1]+'';
                   }
                 FN++;
                 //console.log(FFT);
                }
                
                if (processData[i]=="-H"||processData[i]=="-h") {
                  HH[HN]=processData[i+1].replace(/"/g,"").split("=");
                   if(HN<(numHH)){
                    HHT=HHT+',"'+HH[HN][0]+'":"'+HH[HN][1]+'"';
                    HHT=HHT+",'"+HH[HN][0]+"':'"+HH[HN][1]+"'";
                   }
                  
                  HN++;
                 // console.log(numHH);
                  
                }
                if (processData[i].substring(1, 9)=="https://"||processData[i].substring(0, 8)=="https://"||
                    processData[i].substring(1, 8)=="http://"||processData[i].substring(0, 7)=="http://") {
                  AddR=processData[i].replace(/"/g,"");
                  //console.log(AddR);
                }

        }
      //  console.log(HHT);
        var configH="{ headers :{"+HHT+"'Content-Type' : "+"'application/x-www-form-urlencoded;charset=utf-8;'}}";

     //console.log(configH);
      //reiniciar contadores!!!!!!!!!!!!
      console.log(HHT);
      var config = {
    headers : {
      'Content-Type' : 'application/x-www-form-urlencoded;charset=utf-8;'
    } 
  };
      console.log(config);

      //pegar aqui
      if(methodC!=""&&AddR!=""){
            $http.post(AddR,FFT,config).success(function(result) {
               $scope.result = JSON.stringify(result);
                  console.log(result);
                 $scope.consoleData=$sce.trustAsHtml(syntaxHighlight(JSON.stringify(result)));
               }).error(function(error) {
                 $scope.result = JSON.stringify(error);
             console.log($scope.result);
              $scope.consoleData=$sce.trustAsHtml(syntaxHighlight(JSON.stringify(error)));
             });






      }else{
          console.log("no func");
      }
      

    }
  
}]);

