/* global angular*/
(function () {

    var Controller = function ($scope, $rootScope, $routeParams, $window, $internal) {

        // Obtenemos el array Normal de preguntas
        $scope.pregunta = $internal.responderEncuesta.preguntas[$routeParams.id];

        $scope.siguiente = function(respuesta){
            $internal.index++;
            $scope.pregunta.respuesta = respuesta;
            var url =   $internal.index === $internal.responderEncuesta.preguntas.length ? '#/enviar-encuesta/' : '#/responder-satisfaccion/'+$internal.index;
            $window.location = url;
        };


    };

    Controller.$inject = ['$scope', '$rootScope', '$routeParams', '$window', '$internal'];

    angular
        .module('preguntas')
        .controller('ResponderSatisfaccionController', Controller);
})();