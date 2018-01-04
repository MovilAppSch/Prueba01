var app = angular.module("MyFirstApp", []);

app.controller("FirstController", metodo);

function metodo($scope, $http, $interval) {


    //////////////////get//////////////////////
    $scope.nombreUsuario = "";
    $scope.posts = [];
    $scope.datos = "";
    var d = new Date();
    var g = d.getHours() + " : " + d.getMinutes() + " : " + d.getSeconds();
    $scope.nombreUsuario = prompt("Ingrese su nombre", "");

    $scope.initFirst = function () {

        $http.get("http://Gestion1Prueba.somee.com/api/MessagesApi/").then(successGet, errorGet)

        function successGet(GetData) {
            //console.log(GetData.data);
            $scope.posts = GetData.data;
        }
        function errorGet(erro) {
            console.log(erro);
        }
    }

    $interval($scope.initFirst, 1000);

    /////////////////post///////////////////
    $scope.SendData = function () {
        $http({
            method: 'POST',
            url: 'http://Gestion1Prueba.somee.com/api/MessagesApi/',
            dataType: "json",
            data: { 'Descripcion': $scope.nombreUsuario + ": " + " " + $scope.datos + " " + " (" + g + ")" },
            cache: false,
        })
            .then(function (PostData) {
                alert(GetData.data.Descripcion);
            }
            , function (erro) {
                //alert(erro.data);
            })
        $scope.datos = "";
    }
}



