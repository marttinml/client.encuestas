/* global angular*/
(function () {

    var Controller = function ($scope, $rootScope, $window, $encuestas, $internal) {

        $rootScope.spin = true;
        $scope.encuestaId="";

        // MARK: - Crear nueva encuesta
        $scope.ingresar = function () {
            if ($scope.encuestaId !== ""){

                $scope.encuesta = $encuestas.get({
                    id_encuesta: $scope.encuestaId
                }, function(data){
                    $rootScope.spin = false;
                    $internal.encuesta = data;
                    console.log($internal.encuesta);
                    if (data.id !== undefined){
                        $window.location = '#/responder-encuesta/'+$scope.encuestaId;
                    } else {

                    }
                }, function(e){
                    $rootScope.spin = false;
                    console.log(e);
                });
            } else {

            }
        };

        // MARK: Ver detalle
        $scope.detalle = function (value) {
            $window.location = '#/detalle';
        };

        // MARK: - llena encuestas
        $scope.encuestas = $encuestas
            .query(function (data) {
                $rootScope.spin = false;
                console.log(data);
            }, function (e) {
                $rootScope.spin = false;
                console.log(e);
            });
    };

    Controller.$inject = ['$scope', '$rootScope', '$window', '$encuestas', '$internal'];

    angular
        .module('inicio')
        .controller('InicioController', Controller);
})();