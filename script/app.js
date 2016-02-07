var softModCreator = angular.module('softModCreator', ['ngRoute', 'pascalprecht.translate', 'ngStorage']);

softModCreator.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl:"view/partials/welcome.html"
	}).when('/software/:softIndex', {
		templateUrl:"view/partials/software.html",
		controller:'softwareCtrl'
	}).otherwise({
        redirectTo: '/'
      });
}]);

softModCreator.config(function($translateProvider) {
    // Mise par defaut du language fr
    $translateProvider.preferredLanguage('fr');
    $translateProvider.useStaticFilesLoader({
        prefix : 'languages/',
        suffix : '.json'
    });
    $translateProvider.useSanitizeValueStrategy('escape');
});