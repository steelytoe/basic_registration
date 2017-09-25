// basic parameter
var parentUrl = 'http://'+window.location.hostname+'/registration/'
var rootUrl = 'http://localhost/basic_registration/';
var apiUrl = 'http://race.id/fuse/';

// app start
var app = angular.module('app', [
	'ui.bootstrap',
	'ngRoute'
]);

app.config(['$routeProvider', '$locationProvider', '$sceProvider', function($routeProvider, $locationProvider, $sceProvider) {
	$sceProvider.enabled(false);
	$routeProvider
		.when('/registration/:evnhId?', {
			templateUrl: rootUrl + 'templates/registration.html',
			controller: 'registrationController'
		})
		.when('/participant/:evpaEvnhId', {
			templateUrl: rootUrl + 'templates/participant.html',
			controller: 'participantController'
		})
		.when('/invoice/:invId', {
			templateUrl: rootUrl + 'templates/invoice.html',
			controller: 'invoiceController'
		})
		.when('/registration/invoice/:invId', {
			templateUrl: rootUrl + 'templates/invoice.html',
			controller: 'invoiceController'
		})
		.when('/result/:eventId', {
			templateUrl: rootUrl + 'templates/result.html',
			controller: 'resultController'
		})
		.otherwise({
			redirectTo: '/registration'
		});
}]);
app.controller('mainCtrl', ['$rootScope', '$scope', '$http', '$sce', function($rootScope, $scope, $http, $sce) {
}]);
app.controller('registrationController', ['$scope', '$http', 'global', '$timeout', '$location', '$anchorScroll', '$uibModal', '$filter','$location','$routeParams', function($scope, $http, global, $timeout, $location, $anchorScroll, $uibModal, $filter, $location, $routeParams) {
	$scope.global = global;
}]);
app.controller('participantController', ['$scope', '$http', '$filter', 'global', 'doParam', 'toObject', '$routeParams','$timeout', function($scope, $http, $filter, global, doParam, toObject, $routeParams, $timeout) {
}]);
app.controller('invoiceController', ['$scope', '$http', '$filter', '$routeParams', 'global', function($scope, $http, $filter, $routeParams, global) {
}]);
app.factory('doParam', function(){
	var qs = function(obj, prefix){
		var str = [];
		for (var p in obj) {
			var k = prefix ? prefix + "[" + p + "]" : p, v = obj[p];
			str.push(angular.isObject(v) ? qs(v, k) : (k) + "=" + encodeURIComponent(v));
		}
		return str.join("&");
	};
	return qs;
});
app.factory('toObject', function(){
	var ret = function(input){
		if (input){
			var fields = {};
			angular.forEach(input, function(d){
				fields[d.id] = d;
			});
			return fields;
		} else {
			return false;
		}
	};
	return ret;
});

app.config(['$provide', function ($provide) {
	$provide.constant('global', {

	});
}]);
