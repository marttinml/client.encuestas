/* global angular*/
(function () {

    var Controller = function ($scope, $rootScope, $routeParams, $window, $internal, $responderEncuesta) {

        // Obtenemos el array Normal de preguntas
        $scope.encuesta = $internal.responderEncuesta;


        var respuesta = new $responderEncuesta();

        $scope.save = function(){
        	respuesta.idEncuesta =  $internal.responderEncuesta.idEncuesta;
        	respuesta.preguntas = $internal.responderEncuesta.preguntas;

        	respuesta.$save().then(function(data){
        		console.log(data);
        		$window.location = '#/finalizar-encuesta/';
        	}, function(e){
        		console.log(e);
        	});
        };


    };

    Controller.$inject = ['$scope', '$rootScope', '$routeParams', '$window', '$internal', '$responderEncuesta'];

    angular
        .module('preguntas')
        .controller('EnviarEncuestaController', Controller);
})();