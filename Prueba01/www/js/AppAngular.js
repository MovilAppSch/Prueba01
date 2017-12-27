var app = angular.module("MyFirstApp", []);

app.controller("FirstController", metodo);

function metodo($scope, $http, $interval) {

    //////////////////get//////////////////////
    $scope.posts = [];
    $scope.datos = "";

    $scope.initFirst = function () {

        $http.get("http://localhost:49762/api/MessagesApi").then(successGet, errorGet)

        function successGet(GetData) {         
                console.log(GetData);
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
            url: 'http://localhost:49762/api/MessagesApi',
            dataType: "json",
            data: { 'Descripcion': $scope.datos },
            cache: false,
        }).then(function (PostData) {
            console.log(PostData);
        },
            function (erro) {
                alert(erro.data);
            })
    }
}