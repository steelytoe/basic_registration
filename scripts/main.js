// Predefined
var languages = {
	fields : {
		email : "Email",
		category : "Category",
		name : "Participant Name",
		gender : "Gender",
		birthdate : "Birth Date",
		birthplace : "Birth Place",
		nationality : "Nationality",
		phonenumber : "Phone Number",
		address : "Address",
		city : "City",
		country : "Country",
		jersey : "Jersey",
		disclaimer : "I Agree to term and condition",
		regcode : "Registration Code",
		bloodType : "Blood Type",
		comname : "Group/Community Name"
	},
	new_reg : "New Registration",
	check_status : "Check Status",
	find_pref : "Find your previous registration code",
	participant : "Participant",
	amounttopay : "Amount to pay",
	addparticipant : "Add Participant",
	regnow : "Register Now",
	successregister : "Registered Successfully",
	yourcode : "Your Registration Code",
	codekeepadvice : "please save your registration code as Reference",
	dopayadvice : "Please make do the payment to BCA 0023888090 A/N INOVASI TEKNOLOGI",
	doperadvice : "Please transfer with nominal amount that  been given, the payment confirmation need 1 x 24 hours after transfer  has been made. A different nominal amount will make difficulty to your  payment confirmation. Transfer receipt not necessary to be sent, unless  your transfer with different nominal amount.",
	thanks : "Thank You"
};
var size = [
	{name: 'XS (chest width 45cm)', value: 1},
	{name: 'S (chest width 47.5cm)', value: 2},
	{name: 'M (chest width 50cm)', value: 3},
	{name: 'L (chest width 52.5cm)', value: 4},
	{name: 'XL (chest width 55cm)', value: 5},
	{name: 'XXL (chest width 57.5 cm)', value: 6}
];
var jersey = [
	{name: 'S', value: 2},
	{name: 'M', value: 3},
	{name: 'L', value: 4},
	{name: 'XL', value: 5},
];

var countries = [
	{name: 'Afghanistan', value: 'AF'},
	{name: 'Aland Islands', value: 'AX'},
	{name: 'Albania', value: 'AL'},
	{name: 'Algeria', value: 'DZ'},
	{name: 'American Samoa', value: 'AS'},
	{name: 'AndorrA', value: 'AD'},
	{name: 'Angola', value: 'AO'},
	{name: 'Anguilla', value: 'AI'},
	{name: 'Antarctica', value: 'AQ'},
	{name: 'Antigua and Barbuda', value: 'AG'},
	{name: 'Argentina', value: 'AR'},
	{name: 'Armenia', value: 'AM'},
	{name: 'Aruba', value: 'AW'},
	{name: 'Australia', value: 'AU'},
	{name: 'Austria', value: 'AT'},
	{name: 'Azerbaijan', value: 'AZ'},
	{name: 'Bahamas', value: 'BS'},
	{name: 'Bahrain', value: 'BH'},
	{name: 'Bangladesh', value: 'BD'},
	{name: 'Barbados', value: 'BB'},
	{name: 'Belarus', value: 'BY'},
	{name: 'Belgium', value: 'BE'},
	{name: 'Belize', value: 'BZ'},
	{name: 'Benin', value: 'BJ'},
	{name: 'Bermuda', value: 'BM'},
	{name: 'Bhutan', value: 'BT'},
	{name: 'Bolivia', value: 'BO'},
	{name: 'Bosnia and Herzegovina', value: 'BA'},
	{name: 'Botswana', value: 'BW'},
	{name: 'Bouvet Island', value: 'BV'},
	{name: 'Brazil', value: 'BR'},
	{name: 'British Indian Ocean Territory', value: 'IO'},
	{name: 'Brunei Darussalam', value: 'BN'},
	{name: 'Bulgaria', value: 'BG'},
	{name: 'Burkina Faso', value: 'BF'},
	{name: 'Burundi', value: 'BI'},
	{name: 'Cambodia', value: 'KH'},
	{name: 'Cameroon', value: 'CM'},
	{name: 'Canada', value: 'CA'},
	{name: 'Cape Verde', value: 'CV'},
	{name: 'Cayman Islands', value: 'KY'},
	{name: 'Central African Republic', value: 'CF'},
	{name: 'Chad', value: 'TD'},
	{name: 'Chile', value: 'CL'},
	{name: 'China', value: 'CN'},
	{name: 'Christmas Island', value: 'CX'},
	{name: 'Cocos (Keeling) Islands', value: 'CC'},
	{name: 'Colombia', value: 'CO'},
	{name: 'Comoros', value: 'KM'},
	{name: 'Congo', value: 'CG'},
	{name: 'Congo, The Democratic Republic of the', value: 'CD'},
	{name: 'Cook Islands', value: 'CK'},
	{name: 'Costa Rica', value: 'CR'},
	{name: 'Cote D\'Ivoire', value: 'CI'},
	{name: 'Croatia', value: 'HR'},
	{name: 'Cuba', value: 'CU'},
	{name: 'Cyprus', value: 'CY'},
	{name: 'Czech Republic', value: 'CZ'},
	{name: 'Denmark', value: 'DK'},
	{name: 'Djibouti', value: 'DJ'},
	{name: 'Dominica', value: 'DM'},
	{name: 'Dominican Republic', value: 'DO'},
	{name: 'Ecuador', value: 'EC'},
	{name: 'Egypt', value: 'EG'},
	{name: 'El Salvador', value: 'SV'},
	{name: 'Equatorial Guinea', value: 'GQ'},
	{name: 'Eritrea', value: 'ER'},
	{name: 'Estonia', value: 'EE'},
	{name: 'Ethiopia', value: 'ET'},
	{name: 'Falkland Islands (Malvinas)', value: 'FK'},
	{name: 'Faroe Islands', value: 'FO'},
	{name: 'Fiji', value: 'FJ'},
	{name: 'Finland', value: 'FI'},
	{name: 'France', value: 'FR'},
	{name: 'French Guiana', value: 'GF'},
	{name: 'French Polynesia', value: 'PF'},
	{name: 'French Southern Territories', value: 'TF'},
	{name: 'Gabon', value: 'GA'},
	{name: 'Gambia', value: 'GM'},
	{name: 'Georgia', value: 'GE'},
	{name: 'Germany', value: 'DE'},
	{name: 'Ghana', value: 'GH'},
	{name: 'Gibraltar', value: 'GI'},
	{name: 'Greece', value: 'GR'},
	{name: 'Greenland', value: 'GL'},
	{name: 'Grenada', value: 'GD'},
	{name: 'Guadeloupe', value: 'GP'},
	{name: 'Guam', value: 'GU'},
	{name: 'Guatemala', value: 'GT'},
	{name: 'Guernsey', value: 'GG'},
	{name: 'Guinea', value: 'GN'},
	{name: 'Guinea-Bissau', value: 'GW'},
	{name: 'Guyana', value: 'GY'},
	{name: 'Haiti', value: 'HT'},
	{name: 'Heard Island and Mcdonald Islands', value: 'HM'},
	{name: 'Holy See (Vatican City State)', value: 'VA'},
	{name: 'Honduras', value: 'HN'},
	{name: 'Hong Kong', value: 'HK'},
	{name: 'Hungary', value: 'HU'},
	{name: 'Iceland', value: 'IS'},
	{name: 'India', value: 'IN'},
	{name: 'Indonesia', value: 'ID'},
	{name: 'Iran, Islamic Republic Of', value: 'IR'},
	{name: 'Iraq', value: 'IQ'},
	{name: 'Ireland', value: 'IE'},
	{name: 'Isle of Man', value: 'IM'},
	{name: 'Israel', value: 'IL'},
	{name: 'Italy', value: 'IT'},
	{name: 'Jamaica', value: 'JM'},
	{name: 'Japan', value: 'JP'},
	{name: 'Jersey', value: 'JE'},
	{name: 'Jordan', value: 'JO'},
	{name: 'Kazakhstan', value: 'KZ'},
	{name: 'Kenya', value: 'KE'},
	{name: 'Kiribati', value: 'KI'},
	{name: 'Korea, Democratic People\'S Republic of', value: 'KP'},
	{name: 'Korea, Republic of', value: 'KR'},
	{name: 'Kuwait', value: 'KW'},
	{name: 'Kyrgyzstan', value: 'KG'},
	{name: 'Lao People\'S Democratic Republic', value: 'LA'},
	{name: 'Latvia', value: 'LV'},
	{name: 'Lebanon', value: 'LB'},
	{name: 'Lesotho', value: 'LS'},
	{name: 'Liberia', value: 'LR'},
	{name: 'Libyan Arab Jamahiriya', value: 'LY'},
	{name: 'Liechtenstein', value: 'LI'},
	{name: 'Lithuania', value: 'LT'},
	{name: 'Luxembourg', value: 'LU'},
	{name: 'Macao', value: 'MO'},
	{name: 'Macedonia, The Former Yugoslav Republic of', value: 'MK'},
	{name: 'Madagascar', value: 'MG'},
	{name: 'Malawi', value: 'MW'},
	{name: 'Malaysia', value: 'MY'},
	{name: 'Maldives', value: 'MV'},
	{name: 'Mali', value: 'ML'},
	{name: 'Malta', value: 'MT'},
	{name: 'Marshall Islands', value: 'MH'},
	{name: 'Martinique', value: 'MQ'},
	{name: 'Mauritania', value: 'MR'},
	{name: 'Mauritius', value: 'MU'},
	{name: 'Mayotte', value: 'YT'},
	{name: 'Mexico', value: 'MX'},
	{name: 'Micronesia, Federated States of', value: 'FM'},
	{name: 'Moldova, Republic of', value: 'MD'},
	{name: 'Monaco', value: 'MC'},
	{name: 'Mongolia', value: 'MN'},
	{name: 'Montserrat', value: 'MS'},
	{name: 'Morocco', value: 'MA'},
	{name: 'Mozambique', value: 'MZ'},
	{name: 'Myanmar', value: 'MM'},
	{name: 'Namibia', value: 'NA'},
	{name: 'Nauru', value: 'NR'},
	{name: 'Nepal', value: 'NP'},
	{name: 'Netherlands', value: 'NL'},
	{name: 'Netherlands Antilles', value: 'AN'},
	{name: 'New Caledonia', value: 'NC'},
	{name: 'New Zealand', value: 'NZ'},
	{name: 'Nicaragua', value: 'NI'},
	{name: 'Niger', value: 'NE'},
	{name: 'Nigeria', value: 'NG'},
	{name: 'Niue', value: 'NU'},
	{name: 'Norfolk Island', value: 'NF'},
	{name: 'Northern Mariana Islands', value: 'MP'},
	{name: 'Norway', value: 'NO'},
	{name: 'Oman', value: 'OM'},
	{name: 'Pakistan', value: 'PK'},
	{name: 'Palau', value: 'PW'},
	{name: 'Palestinian Territory, Occupied', value: 'PS'},
	{name: 'Panama', value: 'PA'},
	{name: 'Papua New Guinea', value: 'PG'},
	{name: 'Paraguay', value: 'PY'},
	{name: 'Peru', value: 'PE'},
	{name: 'Philippines', value: 'PH'},
	{name: 'Pitcairn', value: 'PN'},
	{name: 'Poland', value: 'PL'},
	{name: 'Portugal', value: 'PT'},
	{name: 'Puerto Rico', value: 'PR'},
	{name: 'Qatar', value: 'QA'},
	{name: 'Reunion', value: 'RE'},
	{name: 'Romania', value: 'RO'},
	{name: 'Russian Federation', value: 'RU'},
	{name: 'RWANDA', value: 'RW'},
	{name: 'Saint Helena', value: 'SH'},
	{name: 'Saint Kitts and Nevis', value: 'KN'},
	{name: 'Saint Lucia', value: 'LC'},
	{name: 'Saint Pierre and Miquelon', value: 'PM'},
	{name: 'Saint Vincent and the Grenadines', value: 'VC'},
	{name: 'Samoa', value: 'WS'},
	{name: 'San Marino', value: 'SM'},
	{name: 'Sao Tome and Principe', value: 'ST'},
	{name: 'Saudi Arabia', value: 'SA'},
	{name: 'Senegal', value: 'SN'},
	{name: 'Serbia and Montenegro', value: 'CS'},
	{name: 'Seychelles', value: 'SC'},
	{name: 'Sierra Leone', value: 'SL'},
	{name: 'Singapore', value: 'SG'},
	{name: 'Slovakia', value: 'SK'},
	{name: 'Slovenia', value: 'SI'},
	{name: 'Solomon Islands', value: 'SB'},
	{name: 'Somalia', value: 'SO'},
	{name: 'South Africa', value: 'ZA'},
	{name: 'South Georgia and the South Sandwich Islands', value: 'GS'},
	{name: 'Spain', value: 'ES'},
	{name: 'Sri Lanka', value: 'LK'},
	{name: 'Sudan', value: 'SD'},
	{name: 'Suriname', value: 'SR'},
	{name: 'Svalbard and Jan Mayen', value: 'SJ'},
	{name: 'Swaziland', value: 'SZ'},
	{name: 'Sweden', value: 'SE'},
	{name: 'Switzerland', value: 'CH'},
	{name: 'Syrian Arab Republic', value: 'SY'},
	{name: 'Taiwan, Province of China', value: 'TW'},
	{name: 'Tajikistan', value: 'TJ'},
	{name: 'Tanzania, United Republic of', value: 'TZ'},
	{name: 'Thailand', value: 'TH'},
	{name: 'Timor-Leste', value: 'TL'},
	{name: 'Togo', value: 'TG'},
	{name: 'Tokelau', value: 'TK'},
	{name: 'Tonga', value: 'TO'},
	{name: 'Trinidad and Tobago', value: 'TT'},
	{name: 'Tunisia', value: 'TN'},
	{name: 'Turkey', value: 'TR'},
	{name: 'Turkmenistan', value: 'TM'},
	{name: 'Turks and Caicos Islands', value: 'TC'},
	{name: 'Tuvalu', value: 'TV'},
	{name: 'Uganda', value: 'UG'},
	{name: 'Ukraine', value: 'UA'},
	{name: 'United Arab Emirates', value: 'AE'},
	{name: 'United Kingdom', value: 'GB'},
	{name: 'United States', value: 'US'},
	{name: 'United States Minor Outlying Islands', value: 'UM'},
	{name: 'Uruguay', value: 'UY'},
	{name: 'Uzbekistan', value: 'UZ'},
	{name: 'Vanuatu', value: 'VU'},
	{name: 'Venezuela', value: 'VE'},
	{name: 'Viet Nam', value: 'VN'},
	{name: 'Virgin Islands, British', value: 'VG'},
	{name: 'Virgin Islands, U.S.', value: 'VI'},
	{name: 'Wallis and Futuna', value: 'WF'},
	{name: 'Western Sahara', value: 'EH'},
	{name: 'Yemen', value: 'YE'},
	{name: 'Zambia', value: 'ZM'},
	{name: 'Zimbabwe', value: 'ZW'}
];
var genders = [
	{name: 'Male', value: 1},
	{name: 'Female', value: 2}
];
var bloodType = [
	{name: 'A', value: 5},
	{name: 'B', value: 8},
	{name: 'AB', value: 11},
	{name: 'O', value: 2}
];

var live = false;
var app = angular.module('app', [
	'ui.bootstrap',
	'ngRoute'
]);
var parentUrl = 'http://'+window.location.hostname+'/registration/'
var rootUrl = 'http://localhost/basic_registration/';
//var apiUrl = 'http://localhost/api.v2.steelytoe.com/';
//var apiUrl = 'http://localhost/regapi.race.id';
var apiUrl = 'http://race.id/fuse/';
if (live){
	//rootUrl = 'https://www.steelytoe.com/basic_registration/';
	//apiUrl = 'https://www.steelytoe.com/fuse/';
	rootUrl = 'http://static.race.id/basic_registration/';
	apiUrl = 'http://race.id/fuse/';
};
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
	$scope.live = live;
}]);
app.controller('registrationController', ['$scope', '$http', 'global', '$timeout', '$location', '$anchorScroll', '$uibModal', '$filter','$location','$routeParams', function($scope, $http, global, $timeout, $location, $anchorScroll, $uibModal, $filter, $location, $routeParams) {
	$scope.global = global;
	// registration here
	// console.log($routeParams.evnhId);
	//console.log($scope.default);
	function removeByName(name){
		angular.forEach($scope.fields, function(field){
			if (field.name == name){
				//$scope.fields.pop($scope.fields.indexOf(field));
				//console.log($scope.fields.indexOf(field));
			}
		});
	};
	var defaultParticipant = {
		evnhId : 3,
		evpaAgree : '1'
	};
	$scope.eventSelector = {
		evnhId :  undefined
	};
	if (!$scope.form){$scope.form = {};}
	if (!$scope.form.payType){$scope.form.payType = "0";}
	if (!$scope.form.community){$scope.form.community = {};}
	$scope.$watch('eventSelector.evnhId', function(n,o){
		if (n !== o){
			defaultParticipant.evnhId = n;
			eventHeaderSelected();
		}
	});
	function eventHeaderSelected(){
		var categoryField = {
			type : 'option',
			name : 'evncId',
			title : global.languages.fields.category,
			dataIndex : 1,
			options : []
		};
		var categories;
		switch(defaultParticipant.evnhId) {
			case 3:
				categoryField.options = [
					{name:"11K WNI",value:7},
					{name:"11K WNA",value:8},
					{name:"18K WNI",value:9},
					{name:"18K WNA",value:10}
				];
				break;
			case 4:
				categoryField.options = [
					{name: '320K WNI', value: 11},
					{name: '320K WNA', value: 12},
					{name: '100K WNI', value: 13},
					{name: '100K WNA', value: 14},
					{name: '100K Relay WNI', value: 15},
					{name: '100K Relay WNA', value: 16}
				];
				break;
			case 5:
				categoryField.options = [
					{name: '50K', value: 17},
					{name: '25K', value: 18}
				];
				break;
			case 6:
				categoryField.options = [
					{name: 'Bike Camp', value: 19}
				];
				break;
			case 7:
				categoryField.options = [
					{name:"KRUN 64K",value:20},
					//{name:"KRUN 10K",value:21},
					{name:"KRUN 5K",value:22}
				];
				$scope.fields.push({
					type : 'text',
					name : 'evpaFacebook',
					title : 'Facebook Account',
					dataIndex : 15
				});
				$scope.fields.push({
					type : 'text',
					name : 'evpaTwitter',
					title : 'Twitter Account',
					dataIndex : 16
				});
				break;
			case 9:
				categoryField.options = [
					{name:"GeloraRun 6K",value:24},
					{name:"GeloraRun 5K",value:25}
				];
				break;
			case 10:
				categoryField.options = [
					{name:"TC Klik Foto",value:26}
				];
				$scope.fields.unshift({
					type : 'text',
					name : 'invitationCode',
					title : 'Invitation Code',
					dataIndex : 0
				});
				$scope.sending = true;
				break;
			case 12:
				categoryField.options = [
					{name:"18K WNI",value:31},
					{name:"18K WNA",value:32},
				];
				break;
			case 13:
				categoryField.options = [
					{name:"Labuan Bajo - Maumere",value:33},
					{name:"Labuan Bajo - Kupang",value:34},
					{name:"Kupang - Atambua",value:35},
					{name:"Labuan Bajo - Atambua",value:36},
				];
				$scope.fields.push({
					type : 'text',
					name : 'evpaEmergencyContactName',
					title : 'Emergency Contact Name',
					dataIndex : 15
				});
				$scope.fields.push({
					type : 'text',
					name : 'evpaEmergencyContactNumber',
					title : 'Emergency Contact Number',
					dataIndex : 16
				});
				/*$scope.fields.push({
					type : 'text',
					name : 'evpaBloodType',
					title : 'Blood Type',
					dataIndex : 17
				});*/
				$scope.fields.push({
					type : 'text',
					name : 'evpaBIBName',
					title : 'Nick Name (Name Card)',
					dataIndex : 18
				});
				$scope.multipleParticipant = false;
				break;
			case 14:
				categoryField.options = [
					{name: 'Runner Session', value: 37},
					{name: 'Thriathlete Session', value: 38}
				];
				categoryField.multiple = true;
				$scope.fields.push({
					type : 'text',
					name : 'evpaIDNo',
					title : 'ID Number',
					dataIndex : 15
				});
				$scope.fields.push({
					type : 'text',
					name : 'evpaIDType',
					title : 'ID Type',
					dataIndex : 16
				});
				//removeByName('evpaBirthDate');
				//console.log($scope.fields);
				break;
            case 16:
                categoryField.options = [
                    {name: '50K', value: 42},
                    {name: '25K', value: 43},
                    {name: '10K', value: 44},
                    {name: '5K', value: 45}
                ];
                break;
            case 17:
                categoryField.options = [
                    {name: '50K', value: 46},
                    {name: '10K', value: 47}
                ];
                break;
		}
		//console.log(categoryField);
		$scope.fields.unshift(categoryField);
		if (!$scope.form.participants){
			$scope.form.participants = [];
			$scope.form.participants.push(angular.copy(defaultParticipant));
		}
	};
	$scope.languages = global.languages;
	$scope.selectedEvent = undefined;
	if (!$scope.tabs){$scope.tabs= {};}
	$scope.fields = global.registration.fields;
	$scope.flag = {
		newReg : true,
		community : false
	};
	$scope.events = [
		{
			heading : 'Lintas Sumbawa',
			evnhId : 4,
			evnhName : '320K & 100K',
			description : 'Biaya sudah termasuk akomodasi selama perlombaan, jersey, pengawalan dan kesehatan'
		},
		{
			heading : 'Tambora Ultra',
			evnhId : 5,
			evnhName : '50K & 25K',
			description : 'Biaya sudah termasuk akomodasi selama perlombaan, jersey, pengawalan dan kesehatan'
		},
		{
			heading : 'Tambora Bike Camp',
			evnhId : 6,
			evnhName : 'Tambora Bike Camp',
			description : 'Biaya termasuk konsumsi selama event, T-shirt, Jersey, Penyebrangan, Shuttle Bandara Lombok – Doro Ncanga PP'
		}
	];
	$scope.additionalItems = [
		{
			type : 1,
			title : 'Accomodation',
			name : 'accomodation',
			selected : {},
			options : [
				{
					title : 'Hotel',
					value : 1,
					price : 100000
				},
				{
					title : 'Guest House',
					value : 2,
					price : 200000
				}
			],
			attributes : [
				{
					title : 'Check in date',
					type : 'datepicker',
					name : 'datein'
				},
				{
					title : 'Length Of Stay',
					type : 'input',
					formula : 'multiply',
					name : 'length'
				},
				{
					title : 'Quantity',
					type : 'input',
					formula : 'multiply',
					name : 'qty'
				}
			]
		}
	];
	$scope.datepickers = {
		data: {},
		isopen: {},
		option: {
			'year-format': "'yy'",
			'starting-day': 1,
			'class': 'datepicker'
		},
		open : function($event, which) {
			$event.preventDefault();
			$event.stopPropagation();
			$scope.datepickers.isopen[which]= true;
		},
		changed : function(data, field, f){
			//f.$setValidity();
			//data[field] = $filter('date')(data[field], 'yyyy-MM-dd');
			//console.log(data[field]);
			data[field] = $filter('date')(data[field], 'yyyy-MM-dd');
		}
	};

	//debug
		//$scope.eventSelector.evnhId = 4;
		//eventHeaderSelected();
	//end debug
	if ($routeParams.evnhId){
		$scope.eventSelector.evnhId = parseInt($routeParams.evnhId);
		defaultParticipant.evnhId = $scope.eventSelector.evnhId;
		eventHeaderSelected();
	} else if ($scope.default){
		$scope.eventSelector.evnhId = parseInt($scope.default);
		defaultParticipant.evnhId = $scope.eventSelector.evnhId;
		eventHeaderSelected();
	}
	// if (defaultParticipant.evnhId != 7&&defaultParticipant.evnhId != 9&&defaultParticipant.evnhId != 14){
	// 	$scope.fields.push({
	// 		type : 'option',
	// 		name : 'evpaJersey',
	// 		title : languages.fields.jersey,
	// 		options : size,
	// 		dataIndex : 12
	// 	});
	// }

	if (defaultParticipant.evnhId != 14){
		if (defaultParticipant.evnhId == 17){
            $scope.fields.push({
                type: 'option',
                name: 'evpaJersey',
                title: languages.fields.jersey,
                options: jersey,
                dataIndex: 12
            });} else {$scope.fields.push({
                type: 'option',
                name: 'evpaJersey',
                title: languages.fields.jersey,
                options: size,
                dataIndex: 12
            });}
        $scope.fields.push({
			type : 'option',
			name : 'evpaBloodType',
			title : languages.fields.bloodType,
			options : bloodType,
			dataIndex : 6
		},
		{
			type : 'option',
			name : 'evpaNationality',
			title : languages.fields.nationality,
			options : countries,
			dataIndex : 8
		},
		{
			type : 'text',
			name : 'evpaAddress',
			title : languages.fields.address,
			dataIndex : 10
		},
		{
			type : 'text',
			name : 'evpaCity',
			title : languages.fields.city,
			dataIndex : 11
		},
		{
			type : 'option',
			name : 'evpaCountry',
			title : languages.fields.country,
			options : countries,
			dataIndex : 11
		});
	}

	// Adding and removing participants
	$scope.addParticipant = function(data, skipActive){
		if (!data) {data = angular.copy(defaultParticipant);}
		$scope.form.participants.push(data);
		//$scope.tabs[$scope.form.participants.length-1].active=true;
		if (!skipActive){
			$timeout(function(){
				$scope.tabs[$scope.form.participants.length-1].active = true;
				//$location.hash('participantForm');
				//$anchorScroll();
			});
		}
	};
	$scope.remove = function(data){
		$scope.openDeleteConfiirmationModal(data);
	};
	$scope.openDeleteConfiirmationModal = function (data) {

		var modalInstance = $uibModal.open({
			animation: $scope.animationsEnabled,
			templateUrl: rootUrl + 'templates/modal/deleteconfirmationmodal.tpl.html',
			controller: 'DeleteModalInstanceCtrl',
			resolve: {
				items: function () {
					return data;
				}
			}
		});

		modalInstance.result.then(function () {
			$timeout(function(){
				$scope.form.participants.pop(data);
				$scope.categoryIndex = [];
				angular.forEach($scope.form.participants, function(p){
					if (p&&p.evncId){
						$scope.categoryIndex.push(p.evncId);
					} else {
						$scope.categoryIndex.push(null);
					}
				});
				//$scope.doCalculateAmount();
			});
			//console.log(field);
			//$scope.selected = selectedItem;
			//doGroup();
		}, function () {
			//console.log($scope.form.participants);
			//$scope.form.participants[0].evncId = "1";
			//field.$modelValue = 1;
			//console.log(field);
			//console.log('Modal dismissed at: ' + new Date());
		});
	};

	// Sending participants data
	$scope.sendData = function(){
		//console.log($scope.form);
		$scope.message = '';
		$scope.messages = '';
		$scope.amount = '';
		//console.log($scope.regForm);
		//$scope.regForm.$setValidity('invalid', true);
		//$scope.regForm[0].$setPristine();
		/*var validationIndex = {};
		function doValidate(){
			console.log($scope.regForm);
			angular.forEach($scope.regForm, function(d,k){
			});
		}*/
		$scope.sending = true;
		//console.log($scope.form.participants);
		var dataToSend = $scope.form;
		if ($scope.form.participants){
			var _participants = [];
			angular.forEach($scope.form.participants, function(participant){
				if (participant.evncId&&angular.isArray(participant.evncId)){
					angular.forEach(participant.evncId, function(cat){
						_p = angular.copy(participant);
						_p.evncId = cat;
						_participants.push(_p);
						//console.log(participant, cat);
					});
				}
			});
			if (_participants.length != 0){
				dataToSend.participants = _participants;
			}
			//console.log(_participants);
		}
		$http.post(global.API.registration, dataToSend).then(function(success){
			$scope.sending = false;
			$location.path('/invoice/' + success.data.data.refId);
			//$state.go('invoice',{invId:success.data.data.refId});
			//$scope.transactionSuccess = true;
			//console.log(success);
			//$scope.paymentData = success.data.data;
			//$location.hash('top');
			//$anchorScroll();
		}, function(error){
			$scope.sending = false;
			//console.log(error.data.message);
			//$scope.regForm.$setValidity('invalid', true);
			if (error.data){
				$scope.message = error.data.message;
				if (error.data.errors&&error.data.errors.length != 0&&typeof(error.data.errors[0]) == 'string'){
					$scope.messages = error.data.errors;
				}
				if (error.data&&error.data.errors){
					//addItem.capabilities.$setValidity("youAreFat", false);
					angular.forEach(error.data.errors, function(d,k){
						//if (!validationIndex[k]){validationIndex[k] = {};}
						angular.forEach(d, function(_d,_k){
							if ($scope.regForm[k]&&$scope.regForm[k][_k]){
								$scope.regForm[k][_k].$setValidity('invalid', false);
								$scope.regForm[k][_k].$error.message = _d.message;
								//validationIndex[k][_k] = false;
								//console.log($scope.regForm[k][_k].$error);
							}
							//$scope.regForm[k].$setValidity(_k[k].$error, false);
							//$scope.regForm[k][_k].$setValidity('$error', true);
						});
						//console.log($scope.regForm[k], k, d);
					});
				}
				//console.log(validationIndex);
				//doValidate();
			} else {
				if (error.status = -1){
					$scope.noInternetModalInstanceCtrl();
				} else {
					console.log(error);
				}
			}
		});
	};
	$scope.noInternetModalInstanceCtrl = function (data) {

		var modalInstance = $uibModal.open({
			animation: $scope.animationsEnabled,
			templateUrl: rootUrl + 'templates/modal/nointernetmodal.tpl.html',
			controller: 'noInternetModalInstanceCtrl'
		});

		modalInstance.result.then(function () {
			$scope.sendData();
			//console.log('retry');
		}, function () {
			//console.log('close');
		});
	};
	$scope.goToInvoice = function(){
		$location.path('/invoice/' + $scope.invoiceNo);
	};
	var invited = ['@faiznuralim','@perasss','@ayahalmira','@yandre_sp','@luckyibrahim_','@nielshepherd','@astaswastika'];
	$scope.resetField = function(field){
		field.$setValidity();
		if (field.$name == 'evncId'){
			$scope.categoryChanged(field);
		}
		if (field.$name == 'invitationCode'){
			if (invited.indexOf(field.$modelValue) !== -1){
				alert("You're invited, please continue registration...");
				$scope.sending = false;
				//console.log('match');
			}
		}
	};
	// Relay task
	$scope.activeTabs = 0;
	$scope.categoryIndex = [];
	$scope.categoryChanged = function(field){
		$scope.categoryIndex = [];
		angular.forEach($scope.form.participants, function(p){
			if (p&&p.evncId){
				$scope.categoryIndex.push(p.evncId);
			} else {
				$scope.categoryIndex.push(null);
			}
		});
		angular.forEach($scope.tabs, function(d,k){
			if (d.active){
				$scope.activeTabs = parseInt(k,false);
			}
		});
		if ($scope.categoryIndex.indexOf("2") != -1){
			$scope.openCategoryChangeModal();
		}
		var anyGroup = false;
		angular.forEach($scope.form.participants, function(p){
			if (p){
				if (p.evncId == '15'||p.evncId == '16'){
					anyGroup = true;
				}
			}
		});
		if (anyGroup){
			//console.log($scope.form.participants);
			if ($scope.form.participants.length == 1){
				$scope.openCategoryChangeModal(field);
			}
			//doGroup();
		}
	};
	function doGroup(category){
		//console.log($scope.categoryIndex);
		defaultParticipant.evncId = category;
		angular.forEach($scope.form.participants, function(p){
			p.evncId = category;
		});
		var _ci = $scope.categoryIndex.length;
		for (var i = 0; i < 2-_ci; i++) {
			//$scope.form.participants.push(angular.copy(defaultParticipant));
			$scope.addParticipant();
			//$scope.categoryIndex.push("2");
		}
		$scope.categoryIndex = [category,category];
		$scope.fields[0].disabled = true;
		$scope.groupReg = true;
		//$scope.doCalculateAmount();
		//console.log('Show group notification modal!');
		/*var n = 0;
		if ($scope.form.participants.length < 4){
			n = 4 - $scope.form.participants.length;
		}
		for (var i = 0; i < n; i++) {
			$scope.addParticipant({evncId:'2'}, true);
		}*/
	}

	$scope.openCategoryChangeModal = function (field) {
		console.log(field.$modelValue);
		var modalInstance = $uibModal.open({
			animation: $scope.animationsEnabled,
			templateUrl: rootUrl + 'templates/modal/groupmodal.tpl.html',
			controller: 'RegistrationModalInstanceCtrl',
			resolve: {
				categoryIndex: function () {
					return $scope.categoryIndex;
				}
			}
		});

		modalInstance.result.then(function () {
			//console.log(field);
			//$scope.selected = selectedItem;
			doGroup(field.$modelValue);
		}, function () {
			//console.log($scope.form.participants);
			$scope.form.participants[$scope.activeTabs].evncId = "1";
			//field.$modelValue = 1;
			//console.log(field);
			//console.log('Modal dismissed at: ' + new Date());
		});
	};

	// Test and debug purpose
	$scope.keypressed = function(e, model){
		if (model == 'tess'){
			$scope.fillTestData();
		}
	};
	$scope.fillTestData  = function(){
		var active;
		angular.forEach($scope.tabs, function(d,k){
			if (d){
				active = k;
			}
		});
		$scope.form.participants[active].evpaEmail = 'agoes@namague.com';
		$scope.form.participants[active].evpaName = 'Gue Sendiri';
		$scope.form.participants[active].evpaGender = '1';
		$scope.form.participants[active].evpaBirthDate = '2009-11-1';
		$scope.form.participants[active].evpaBirthPlace = 'Bumi';
		$scope.form.participants[active].evpaNationality = 'ID';
		$scope.form.participants[active].evpaPhone = '00151151';
		$scope.form.participants[active].evpaAddress = 'Jalanan bawah langit';
		$scope.form.participants[active].evpaCity = 'Kota Gede';
		$scope.form.participants[active].evpaCountry = 'ID';
	};

}]);
app.controller('participantController', ['$scope', '$http', '$filter', 'global', 'doParam', 'toObject', '$routeParams','$timeout', function($scope, $http, $filter, global, doParam, toObject, $routeParams, $timeout) {
	// participant here
	//console.log($routeParams);
	$scope.countriesObj = {};
	angular.forEach(countries, function(country){
		$scope.countriesObj[country.value] = country.name;
	});
	$scope.events = {};
	$http.get(apiUrl+'api/v1/event/list').then(function(success){
		//console.log(success);
		if (success.data&&success.data.data){
			$scope.categories = {};
			angular.forEach(success.data.linked.evncId, function(c){
				$scope.categories[c.evncId] = c;
			});
			angular.forEach(success.data.data, function(data){
				$scope.events[data.evnhId] = data;
				$scope.events[data.evnhId].categories = {};
				angular.forEach(data.links.evncId, function(cat){
					$scope.events[data.evnhId].categories[cat]=$scope.categories[cat];
					//success.linked
					//console.log($scope.categories[cat]);
				})
			});
			//console.log($scope.events);
		}
	}, function(error){
	});

	$scope.toObject = toObject;
	var tempFilterText = '', filterTextTimeout;
	var params = $scope.params = {
		sort : '-evpaBIBNo',
		//event : 3,
		filter : {
			evpaEvnhId : $routeParams.evpaEvnhId
		},
		pageNumber : 1,
		pageSize : 25
	};
	if ($routeParams){
		params = angular.merge(params, $routeParams);
	}
	function pageMe(total){
		$scope.totalPage = Math.ceil(parseInt(total.totalRecords, 10)/params.pageSize);
		if ($scope.totalPage === 0){
			$scope.totalPage = 1;
		}
	}
	$scope.searchParticipant = function(data){
		if (filterTextTimeout) {$timeout.cancel(filterTextTimeout);}
		if (!params.filter){params.filter={};}
		tempFilterText = data;
		filterTextTimeout = $timeout(function() {
			if (data){
				params.filter.evpaName = '%'+tempFilterText+'%';
			} else {
				delete params.filter.evpaName;
			}
			//$scope.filterText = tempFilterText; evpaName
			$scope.load();
			//console.log(doParam($scope.searhParam, 'search'));
		}, 250); // delay 250 ms
	};
	$scope.participantsNationality = {};
	$scope.load = function(page){
		if (page){
			params.pageNumber = page;
		} else {
			params.pageNumber = 1;
		}
		//console.log(doParam(params));
		$http.get(global.API.participant+'?'+doParam(params)).then(function(success){
			angular.forEach(success.data.linked.evpdEvpaId, function(pd){
				if (pd.evpdPrsaId == 1){
					$scope.participantsNationality[pd.evpdEvpaId] = pd.evpdPrsaValue;
					//console.log(pd)
				}
			});
			$scope.participants = success.data;
			pageMe(success.data.status);
			//console.log(success);
		}, function(error){
			$scope.error = true;
			$scope.errorMessage = error.statusText;
		});
	};
	$scope.load(1);
	$scope.selected = function(){
		params.filter.evpaEvncId = this.key;
		$scope.load(1);
	};
	$scope.showAll = function(){
		if (params.filter.evpaEvncId){
			delete params.filter.evpaEvncId;
		}
		$scope.load(1);
	}
}]);
app.controller('resultController', ['$scope', '$http', '$filter', '$routeParams', 'global','doParam','$timeout', function($scope, $http, $filter, $routeParams, global, doParam, $timeout) {
	if ($routeParams.eventId == '4'){
		$scope.catRadioModel = '100K';
	} else if ($routeParams.eventId == '3'){
		$scope.catRadioModel = '11K';
	}
	var tempFilterText = '', filterTextTimeout;
	var params = $scope.params = {
		event : $routeParams.eventId,
		//pageNumber : 1,
		pageSize : 25,
		sort : 'rcrsOverallPosition',
		filter : {
			//rcrsFinishStatus : 'Finished'
		}
	};
	$scope.searchParticipant = function(data){
		if (filterTextTimeout) {$timeout.cancel(filterTextTimeout);}
		if (!params.filter){params.filter={};}
		tempFilterText = data;
		filterTextTimeout = $timeout(function() {
			if (data){
				params.filter.rcrsName = '%'+tempFilterText+'%';
			} else {
				delete params.filter.rcrsName;
			}
			//$scope.filterText = tempFilterText; evpaName
			$scope.load();
			//console.log(doParam($scope.searhParam, 'search'));
		}, 250); // delay 250 ms
	};
	$scope.load = function(page){
		if (page){
			params.pageNumber = page;
		} else {
			params.pageNumber = 1;
		}
		//console.log(doParam(params));
		$http.get('http://fuse.steelytoe.com/api/v1/race/result?'+doParam(params)).then(function(success){
			$scope.results = success.data;
			pageMe(success.data.status);
			//console.log(success.data.status);
		}, function(error){
			$scope.error = true;
			$scope.errorMessage = error.statusText;
		});
	};
	function pageMe(total){
		$scope.totalPage = Math.ceil(parseInt(total.totalRecords, 10)/params.pageSize);
		console.log($scope.totalPage);
	}
	$scope.load(1);
	$scope.$watchCollection('catRadioModel', function (n,o) {
		if (o != n){
			if (!n&&params.filter.rcrsEventDescription){
				delete params.filter.rcrsEventDescription;
			} else {
				params.filter.rcrsEventDescription = n;
			}
			$scope.load();
			//console.log(n);
		}
	});
	$scope.$watchCollection('intRadioModel', function (n,o) {
		if (o != n){
			if (!n&&params.filter.rcrsRaceCategory){
				delete params.filter.rcrsRaceCategory;
			} else {
				params.filter.rcrsRaceCategory = n;
			}
			$scope.load();
			//console.log(n);
		}
	});
	$scope.$watchCollection('genRadioModel', function (n,o) {
		if (o != n){
			if (!n&&params.filter.rcrsGender){
				delete params.filter.rcrsGender;
			} else {
				params.filter.rcrsGender = n;
			}
			$scope.load();
			//console.log(n);
		}
	});
}]);
app.controller('invoiceController', ['$scope', '$http', '$filter', '$routeParams', 'global', function($scope, $http, $filter, $routeParams, global) {
	// participant here
	//console.log($routeParams);
	$scope.parentUrl = parentUrl;
	//$scope.eventTitle = global.eventTitle;
	$scope.date = function(input){
		if (input){
			var t = input.split(/[- :]/);
			return new Date(t[0], t[1]-1, t[2], t[3], t[4], t[5]);
		} else {
			return false;
		}
	};
	if ($routeParams.invId){
		$http.get(global.API.payment+$routeParams.invId, {params:{}}).then(function(success){
			if (!$scope.form){
				$scope.form = {
					refId : success.data.data.transaction.refId
				};
			}
			$scope.form.payType = success.data.data.payment_type;
			$scope.data = success.data.data;
			if ($scope.data&&$scope.data.participants){
				angular.forEach($scope.data.participants, function(p){
					$scope.evnhId = p.evnhId;
				});
			}
			if ($scope.evnhId&&$scope.evnhId == 13){
				//$scope.disablePaymentOption = true;
			}
			if ($scope.evnhId&&$scope.evnhId == 14){
				$scope.disableTransfer = true;
				$scope.hidePaymentInfo = true;
			}
			if ($scope.evnhId&&$scope.evnhId == 17){
				// $scope.disableTransfer = true;
				$scope.noFee = true;
			}
			//console.log($scope.evnhId);
		}, function(error){
			$scope.error = true;
			$scope.errorMessage = error.statusText;
		});
	} else {
		$scope.error = true;
		$scope.errorMessage = 'Tidak ada nomor invoice';
	}
	$scope.$watchCollection('form.payType', function () {
		if ($scope.form&&$scope.form.payType){
			var amount = parseInt($scope.data.transaction.amount, 10);
			if ($scope.data.transaction.discount_amount){
				amount = amount - $scope.data.transaction.discount_amount;
			}
			var unique_amount = parseInt($scope.data.transaction.unique_amount, 10);
			switch($scope.form.payType){
				case '1':
					$scope.data.transaction.fee = 0;
					$scope.data.transaction.total_amount = amount+unique_amount;
					break;
				case '2':
					var fee = amount*0.05;
					if (fee < 7500){
						fee = 7500;
					}
					if ($scope.evnhId&&$scope.evnhId == 14){
						fee = 0;
					}
					if ($scope.evnhId&&$scope.evnhId == 17){
						fee = 0;
					}
					$scope.data.transaction.fee = fee;
					$scope.data.transaction.total_amount = amount+fee;
					break;
				case '3':
					var fee = 7500;
					if ($scope.evnhId&&$scope.evnhId == 14){
						fee = 0;
					}
					if ($scope.evnhId&&$scope.evnhId == 17){
						fee = 0;
					}
					$scope.data.transaction.fee = fee;
					$scope.data.transaction.total_amount = amount+fee;
					break;
			}
		}
	});
	$scope.doPayment = function(){
		$scope.sending = true;
		$http.post(global.API.doPayment, $scope.form).then(function(success){
			$scope.sending = false;
			$scope.data = success.data.data;
			switch($scope.form.payType){
				case '1':
					$scope.paymentDone = true;
					break;
				case '2':
					if (success.data.data.vrtrURL){
						window.location = success.data.data.vrtrURL;
					}
					break;
				case '3':
					if (success.data.data.vrtrURL){
						window.location = success.data.data.vrtrURL;
					}
					break;
			}
			//console.log(success);
		}, function(error){
			$scope.sending = false;
			if (error.data){
				$scope.error = true;
				$scope.errorMessage = error.statusText;
			} else {
				if (error.status = -1){
					$scope.noInternetModalInstanceCtrl();
				} else {
					console.log(error);
				}
			}
		});
		//console.log($scope.form);
	};
	$scope.useCoupon = function(){
		//{"cupnValue":"KARTILAGO","refId":"Reg-a6bbaad94ef75790"}
		var data = {"trnsRefId":$routeParams.invId, "cupnValue":$scope.couponCode};
		$http.post(global.API.doApplyCoupon, data).then(function(success){
			$scope.data.transaction.discount_amount = success.data.data.trnsDiscountAmount;
			console.log(success);
		}, function(error){
			console.log(error);
			$scope.couponMessage = error.data.status.error.message;
			console.log($scope.couponMessage);
		});
		console.log($scope.couponCode);
	};
	$scope.backToMain = function(){
		window.location.href = window.location.origin;
	};
}]);
app.controller('DeleteModalInstanceCtrl', ['$scope', '$uibModalInstance', 'items', function ($scope, $uibModalInstance, items) {
	$scope.items = items;

	$scope.ok = function () {
		$uibModalInstance.close();
	};

	$scope.cancel = function () {
		$uibModalInstance.dismiss('cancel');
	};
}]);
app.controller('noInternetModalInstanceCtrl', function ($scope, $uibModalInstance) {
	$scope.ok = function () {
		$uibModalInstance.close();
	};

	$scope.cancel = function () {
		$uibModalInstance.dismiss('cancel');
	};
});
app.controller('RegistrationModalInstanceCtrl', function ($scope, $uibModalInstance, categoryIndex) {
	$scope.categoryIndex = categoryIndex;

	$scope.ok = function () {
		$uibModalInstance.close();
	};

	$scope.cancel = function () {
		$uibModalInstance.dismiss('cancel');
	};
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
		eventTitle : 'Tambora Challege',
		registration : {
			fields : [
				{
					type : 'email',
					name : 'evpaEmail',
					title : languages.fields.email,
					dataIndex : 2
				},
				{
					type : 'text',
					name : 'evpaName',
					title : languages.fields.name,
					dataIndex : 3
				},
				{
					type : 'option',
					name : 'evpaGender',
					title : languages.fields.gender,
					options : genders,
					dataIndex : 4
				},
				{
					type : 'text',
					name : 'evpaPhone',
					title : languages.fields.phonenumber,
					dataIndex : 9
				},
				{
					type : 'date',
					name : 'evpaBirthDate',
					title : languages.fields.birthdate,
					dataIndex : 5
				},
				{
					type : 'text',
					name : 'evpaBirthPlace',
					title : languages.fields.birthplace,
					dataIndex : 7
				},
				{
					type : 'checkbox',
					name : 'evpaAgree',
					title : languages.fields.disclaimer,
					dataIndex : 100
				}
			]
		},
		API : {
			registration : apiUrl + '/api/v1/participant/register',
			payment :  apiUrl + '/api/v1/participant/search/',
			participant : 'http://race.id/apiv2/participant/public',
			doPayment :  apiUrl + '/api/v1/participant/pay',
			doApplyCoupon : 'http://race.id/apiv2/coupon/apply'
			//doApplyCoupon : 'http://localhost/api.v2.steelytoe.com/coupon/apply'
		},
		credit : {
			image : rootUrl + '/assets/logo.png'
		},
		languages : languages
	});
}]);
