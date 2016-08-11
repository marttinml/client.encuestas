/* global angular*/
(function () {

    var Controller = function ($scope, $rootScope, $window, $internal, $encuestas, $routeParams) {

        $rootScope.spin = true;

        $scope.encuestaId = $routeParams.id;
        $scope.encuesta = {};

        $scope.encuesta = $encuestas.get({
            id_encuesta: $scope.encuestaId
        }, function(data){
            $rootScope.spin = false;
            $internal.encuesta = data;
            console.log($internal.encuesta);
        });


        $internal.categorias = [
            {
                id: 1,
                name: '',
                img: ''
            }
        ];
        $internal.preguntas = [
            {
                pregunta: '',
                respuestas: []
            }
        ];

        $scope.titulo = '';
        $scope.descripcion = '';
        $scope.autor = '';
        $scope.direccion = '';
        $scope.vigencia = '';
        $scope.duracionPregunta = '';
        $scope.tipoEncuesta = '';

        $scope.contestar = function () {

            $internal.responderEncuesta = {
                idEncuesta: $routeParams.id,
                preguntas: $scope.encuesta.preguntas
            };
            $internal.responderEncuesta.respuesta = {};
            $internal.index = 0;
            if ($scope.encuesta.tipoEncuesta.id == 1) {
                
                $window.location = '#/responder-satisfaccion/'+$internal.index;
            } else {
                $window.location = '#/responder-categoria/'+$internal.index;
            }
        };
    };

    Controller.$inject = ['$scope', '$rootScope', '$window', '$internal', '$encuestas', '$routeParams'];

    angular
        .module('responderEncuesta')
        .controller('ResponderEncuestaController', Controller);
})();