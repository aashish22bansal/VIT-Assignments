console.log("This is coming from script.js");
var app = angular.module('myApp',['smart-table']);

app.controller('basicsCtrl',['$scope',function(scope){
    var score_valA = 0;
    var score_valB = 0;
    document.getElementById("initial").innerHTML = score_valA+"<br>"+score_valB;

    document.getElementById("scoreA").nodeValue=score_valA;

    function add_1PointerA(){
        score_valA = score_valA+1;
        document.getElementById("scoreA").nodeValue = score_valA;
    }

    
}]);