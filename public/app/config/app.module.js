/* global angular*/
(function () {
    angular.module('app', [
        'ngRoute', 
        'ngResource',
        'dir.spin',
        'dir.alert',
        'api.encuestas', 
        'api.encuestas.direcciones', 
        'api.encuestas.tipo',
        'api.encuestas.satisfaccion',
        'api.encuestas.responder',
        'internal',
        'responderEncuesta', 
        'inicio', 
        'categorias', 
        'preguntas', 
        'generar', 
        'detalle']);
})();