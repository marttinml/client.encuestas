(function () {
    angular
        .module('api.encuestas.responder', [])
        .service('$responderEncuesta',
            function ($resource) {
                var url = 'https://rocky-basin-62683.herokuapp.com/v0/responder-encuesta';
                return $resource(url);
            });
})();