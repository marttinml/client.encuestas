/* global angular*/
(function () {

    var Router = function ($routeProvider) {

        var baseUrl = 'app/modules/';


        // Inicio
        $routeProvider.when('/', {
            templateUrl: baseUrl + 'inicio/views/inicio.view.html',
            controller: 'InicioController'
        });
        
        

        // Crear
        $routeProvider.when('/responder-encuesta/:id', {
            templateUrl: baseUrl + 'responder-encuesta/views/responder-encuesta.view.html',
            controller: 'ResponderEncuestaController'
        });
        
        

        // Agregar categoria
        $routeProvider.when('/categorias', {
            templateUrl: baseUrl + 'categorias/views/categorias.view.html',
            controller: 'CategoriasController'
        });
        
        

        // Agregar pregunta satisfaccion
        $routeProvider.when('/responder-satisfaccion/:id', {
            templateUrl: baseUrl + 'preguntas/views/responder-satisfaccion.view.html',
            controller: 'ResponderSatisfaccionController'
        });
        // Agregar pregunta categoria
        $routeProvider.when('/responder-categoria/:id', {
            templateUrl: baseUrl + 'preguntas/views/responder-categoria.view.html',
            controller: 'ResponderCategoriaController'
        });

        $routeProvider.when('/enviar-encuesta', {
            templateUrl: baseUrl + 'preguntas/views/enviar-encuesta.view.html',
            controller: 'EnviarEncuestaController'
        });
        $routeProvider.when('/finalizar-encuesta', {
            templateUrl: baseUrl + 'preguntas/views/finalizar-encuesta.view.html',
            controller: 'FinalizarEncuestaController'
        });
        
        
        
        // Generar codigo
        $routeProvider.when('/generar', {
            templateUrl: baseUrl + 'generar/views/generar.view.html',
            controller: 'GenerarCodigoController'
        });
        
        

        // Detalle
        $routeProvider.when('/detalle', {
            templateUrl: baseUrl + 'detalle/views/detalle.view.html',
            controller: 'DetalleEncuestaController'
        });

    };

    Router.$inject = ['$routeProvider'];

    angular
        .module('app')
        .config(Router);
})();