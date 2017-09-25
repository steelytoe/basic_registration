// basic parameter
var parentUrl = 'http://'+window.location.hostname+'/registration/'
var rootUrl = 'http://192.168.66.66/basic_registration/';
var apiUrl = 'http://192.168.66.66/steelytoe.new/titu/api/v1/';

// app start
var app = angular.module('app', [
	'ngRoute',
	'angularLazyImg'
]);

app.config(['$routeProvider', '$locationProvider', '$sceProvider', function($routeProvider, $locationProvider, $sceProvider) {
	$sceProvider.enabled(false);
	$routeProvider
		.when('/registration/:evnhId?', {
			templateUrl: rootUrl + 'templates/form.html',
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
		.when('/gallery', {
			templateUrl: rootUrl + 'templates/gallery.html',
			controller: 'galleryController'
		})
		.otherwise({
			redirectTo: '/registration'
		});
}]);
app.controller('galleryController', ['$scope', '$http', function($scope, $http) {
	function create(path, sequence){
		var arr = [];
		for (var i = 1; i < sequence+1; i++) {
			var _i = {
				filePreview : 'https://www.remax.co.id/assets/gallery/'+path+'/'+(parseInt(i, 10) + 100).toString().substr(1)+'.JPG',
				fileThumbnail : 'https://www.remax.co.id/assets/gallery/'+path+'/'+(parseInt(i, 10) + 100).toString().substr(1)+'.JPG'
			};
			arr.push(_i);
		}
		return arr;
	}
	$scope.galleries = [
		{
			title : 'RE/MAX Outbond 2016',
			description : '',
			files : create('outbond',72)
		},
		{
			title : 'Wonderful Thailand',
			description : '',
			files : create('wonthai',39)
		},
		{
			title : 'Law Update 2016',
			description : '',
			files : create('lupdt2016',5)
		},
		{
			title : 'REMAX Convention 2016',
			description : '',
			files : create('convention',108)
		},
		{
			title : '60 Minutes with RE/MAX',
			description : '',
			files : create('60minutes',10)
		},
		{
			title : 'The Rising Star Club',
			description : '',
			files : create('risingstar',4)
		},
		{
			title : 'Yes! I Can 2015',
			description : '',
			files : create('can2015',15)
		},
		{
			title : 'International Property Seminar',
			description : '',
			files : create('itlpropseminar',26)
		}
	];
}]);
app.controller('mainCtrl', ['$rootScope', '$scope', '$http', '$sce', function($rootScope, $scope, $http, $sce) {
}]);
app.controller('registrationController', ['$scope', '$http', 'global', '$timeout', '$location', '$filter','$location','$routeParams', function($scope, $http, global, $timeout, $location, $filter, $location, $routeParams) {
	$scope.global = global;
	//$scope.participantFields = participantFields;
	// Multi participants
	//$scope.regForm = {};
	$scope.participants = [];
	$scope.addParticipant = function(def){
		$scope.participants.push(def);
	};
	$scope.addParticipant({});
	$scope.linkedObject = {};
	$scope.eventHeaderLoaded = false;
	$scope.formData = {};
	$scope.chunk = function(data, size){
		var newArr = [];
		for (var i=0; i<data.length; i+=size) {
			//console.log(data.length);
			if (newArr.indexOf(data.slice(i, i+size)) == -1){
				newArr.push(data.slice(i, i+size));
			}
			//console.log(data.slice(i, i+size));
		}
		console.log(newArr);
		return newArr;
	};
	function parseError(error){
		var ret = {};
		if (error.data&&error.data.status&&error.data.status.error){
			var e = error.data.status.error;
			ret.message = e.message;
			if (e.errors){
				ret.errors = e.errors;
			} else {
				console.log('no error detail');
			}
		} else {
			console.log('wrong error format');
		}
		return ret;
	}
	$scope.doSubmit = function(){
		console.log('begin submit', $scope.participants);
		$http.post(apiUrl + 'registration/1', {data:$scope.participants}).then(function(success){

		}, function(error){
			$scope.error = parseError(error);
			console.log($scope.error);
		});
	}
	$http.get(apiUrl + 'resources/event_header/1').then(function(success){
		if (success&&success.data&&success.data.linked){
			var linked = success.data.linked;
			angular.forEach(linked, function(d,k){
				$scope.linkedObject[k] = {};
				angular.forEach(d,function(_d){
					$scope.linkedObject[k][_d.id] = _d;
				});
			});
			//console.log($scope.linkedObject);
		} else {
			console.log('No linked data', success.data)
		}
		if (success&&success.data&&success.data.data){
			var d = success.data.data;
			if (d.links){
				var links = d.links;
				// category data
				if (links.evncEvnhId){
					$scope.categories = {};
					angular.forEach(links.evncEvnhId, function(categoryId){
						$scope.categories[categoryId] = $scope.linkedObject.evncEvnhId[categoryId];
						//console.log($scope.linkedObject.evncEvnhId[categoryId]);
					})
					//console.log(links.evncEvnhId);
				} else {
					console.log('no category defined', links);
				}
				// form data
				if (links.evhfEvnhId){
					$scope.formFields = [];
					angular.forEach(links.evhfEvnhId, function(fieldId){
						$scope.formFields.push($scope.linkedObject.evhfEvnhId[fieldId]);
					})
					console.log($scope.formFields);
				} else {
					console.log('no form defined', links);
				}
				// participants data
				if (links.evpaEvnhId){

				} else {
					console.log('no participants data', links);
				}
			} else {
				console.log('no relation data', d);
			}
		} else {
			console.log('something wrong with returned data', success);
		}
		$scope.eventHeaderLoaded = true;
	}, function(error){
		console.log(error);
	});
}]);
app.controller('participantController', ['$scope', '$http', '$filter', 'global', 'doParam', 'toObject', '$routeParams','$timeout', function($scope, $http, $filter, global, doParam, toObject, $routeParams, $timeout) {
}]);
app.controller('invoiceController', ['$scope', '$http', '$filter', '$routeParams', 'global', function($scope, $http, $filter, $routeParams, global) {
}]);

app.filter("chunk", function () {
	return function (data, size) {
		console.log(data);
		/*var newArr = [];
		for (var i=0; i<data.length; i+=size) {
			//console.log(data.length);
			if (newArr.indexOf(data.slice(i, i+size)) == -1){
				newArr.push(data.slice(i, i+size));
			}
			//console.log(data.slice(i, i+size));
		}
		console.log(newArr);
		return newArr;*/
	}
});

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
