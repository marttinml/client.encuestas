/* global angular*/
(function () {

    var Controller = function ($scope, $rootScope, $routeParams, $window, $internal) {

        // Obtenemos el array Normal de preguntas
        $scope.pregunta = $internal.responderEncuesta.preguntas[$routeParams.id];

        $scope.siguiente = function(respuesta){

            $scope.pregunta.respuesta = respuesta;
            $internal.index++;

            var url =   $internal.index === $internal.responderEncuesta.preguntas.length ? '#/enviar-encuesta/' : '#/responder-categoria/'+$internal.index;
            $window.location = url;
        };


    };

    Controller.$inject = ['$scope', '$rootScope', '$routeParams', '$window', '$internal'];

    angular
        .module('preguntas')
        .controller('ResponderCategoriaController', Controller);
})();