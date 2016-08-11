/* global angular*/
(function () {

    var Controller = function ($scope, $rootScope, $routeParams, $window, $internal) {

    	$scope.terminar = function(){
    		window.location = "#/";
    	};

    };

    Controller.$inject = ['$scope', '$rootScope', '$routeParams', '$window', '$internal'];

    angular
        .module('preguntas')
        .controller('FinalizarEncuestaController', Controller);
})();