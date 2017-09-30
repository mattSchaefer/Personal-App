// var app = angular.module('personalPage',['ngRoute']);
// app.controller('MainCtrl', ['$scope', function($scope){
//     $scope.message="ctrl active"
// }]);




var myApp = angular.module('personalPage', ['ngRoute', 'ngAnimate','ui.bootstrap']);
myApp.factory('Language', function($rootScope){

  var factory = {
    isDeutsch : false
  };
  factory.toEnglish = function(){
    this.isDeutsch = false;
  };
  factory.toDeutsch = function(){
    this.isDeutsch = true;
  };
  factory.sendData = function(isDeutsch){
      this.isDeutsch = isDeutsch;
      $rootScope.$broadcast('data_shared');
  };
  factory.list = function(){
    return this.isDeutsch;
  };
  return factory;
});

/*###~~~~~~~~~~~~~~~~~~~~~~~~~~~~OLD CONFIG~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~###*/

myApp.config(['$routeProvider','$locationProvider',
  function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode({enabled: true, requireBase: true});
    $routeProvider
    .when('/main', {
        templateUrl: 'partials/main',
        controller: 'MainController'
      })
      .when('/about', {
        templateUrl: 'partials/about',
        controller: 'AboutController'
      })
      .when('/photography',{
        templateUrl: 'partials/photography',
        controller: 'PhotographyController'
      })
      .when('/do-i-need-a-raincoat',{
        templateUrl: 'partials/do-i-need-a-raincoat',
        controller: 'RaincoatController'
    }).when('/projects',{
        templateUrl: 'partials/projects',
        controller: "ProjectsController"
    }).when('/canvas',{
        templateUrl: 'partials/canvas',
        controller: "CanvasController"

    })
    .when('/twitter-bot',{
        templateUrl: 'partials/twitter-bot',
        controller: "TwitterBotController"

    }).otherwise({
        redirectTo: '/main'
    });
  }]);

// myApp.factory('',[]){
//
// };

// myApp.config(['$stateProvider' , '$locationProvider','$urlRouterProvider', function($stateProvider, $locationProvider, $urlRouterProvider){
//     $locationProvider.html5Mode(true);
//     $urlRouterProvider.otherwise('/');
//
//     $stateProvider
//         .state('main',{
//             url: '/main',
//             templateUrl: 'partials/main',
//             controller: 'MainController'
//         })
//         .state('about',{
//             url: '/about',
//             templateUrl: 'partials/about',
//             controller: 'AboutController'
//         })
//         .state('canvas',{
//             url: '/canvas',
//             templateUrl: 'partials/canvas',
//             controller: "CanvasController"
//         })
//         .state('do-i-need-a-raincoat',{
//             url: '/do-i-need-a-raincoat',
//             templateUrl: 'partials/do-i-need-a-raincoat',
//             controller: 'RaincoatController'
//         })
//         .state('photography',{
//             url: '/photography',
//             templateUrl: 'partials/photography',
//             controller: 'PhotographyController'
//         })
//         .state('projects',{
//             url: '/projects',
//             templateUrl: 'partials/projects',
//             controller: "ProjectsController"
//         })
//
// }]);

myApp.controller('AppCtrl', ['$scope', '$http', 'Language', function($scope, $http, Language) {
    $scope.message = "all inquiries: matthew.schaefer12@gmail.com";
    $scope.messageDeutsch = "alle anfragen: matthew.schaefer12@gmail.com";
    $scope.deutsch = Language.list();
    $scope.clicked = false;
    $scope.home = true;
    $scope.showDropdown = false;

    $scope.langClick = function(index, other){
      var myEl = angular.element( document.querySelector( '#' + index) );
      var otherEl = angular.element( document.querySelector( '#' + other) );

      if(index=="english"){
        Language.toEnglish();
      }else{
        Language.toDeutsch();
      }
      $scope.send = function(){
           Language.sendData($scope.deutsch);
         };

      $scope.deutsch = Language.list();
      myEl.addClass('active');
      otherEl.removeClass('active');
    };

    $scope.navClick = function($event){
        $scope.clicked = true;
        var navEles = angular.element( '.main-menu');
        navEles.removeClass('active');
        angular.element( $event.target ).addClass('active');
    };
    $scope.dropClick = function(){
        $scope.showDropdown = !$scope.showDropdown;
    }
    $scope.$watch( function(){ return angular.element( '#home-btn').hasClass('active')}, function(){
        if(angular.element( '#home-btn').hasClass('active')){
            $scope.home = true;
        }else{
            $scope.home = false;
        }
    });
}]);

myApp.controller('AboutController',['$scope', '$http', 'Language', function($scope, $http, Language){
  $scope.deutsch = Language.list();
  $scope.$on("data_shared", function(){
    $scope.deutsch = Language.list();
  });
  $scope.message = "i am teh about page";
}]);

myApp.controller('PhotographyController',['$scope', '$http', function($scope, $http){
    $scope.itemsPerPage = 6; //uib
	$scope.maxSize = 6; //uib
	$scope.currentPage = 1; //uib
    $scope.photos = [
        {'src':'images/011.JPG','index': 0},
        {'src':'images/017.JPG','index': 1},
        {'src':'images/029.JPG','index': 2},
        {'src':'images/032.JPG','index': 3},
        {'src':'images/039.JPG','index': 4},
        {'src':'images/042.JPG','index': 5},
        {'src':'images/045.JPG','index': 6},
        {'src':'images/051.JPG','index': 7},
        {'src':'images/061.JPG','index': 8},
        {'src':'images/082.JPG','index': 9},
        {'src':'images/085.JPG','index': 10},
        {'src':'images/087.JPG','index': 11},
        {'src':'images/090.JPG','index': 12},
        {'src':'images/091.JPG','index': 13},
        {'src':'images/116.JPG','index': 14},
        {'src':'images/120.JPG','index': 15},
        {'src':'images/131.JPG','index': 16},
        {'src':'images/132.JPG','index': 17},
        {'src':'images/144.JPG','index': 18},
        {'src':'images/148.JPG','index': 19},
        {'src':'images/151.JPG','index': 20},
        {'src':'images/159.JPG','index': 21},
        {'src':'images/169.JPG','index': 22},
        {'src':'images/185.JPG','index': 23},
        {'src':'images/187.JPG','index': 24},
        {'src':'images/191.JPG','index': 25},
        {'src':'images/193.JPG','index': 26},
        {'src':'images/194.JPG','index': 27},
        {'src':'images/201.JPG','index': 28},
        {'src':'images/230.JPG','index': 29},
        {'src':'images/239.JPG','index': 30},
        {'src':'images/277.JPG','index': 31},
        {'src':'images/295.JPG','index': 32},
        {'src':'images/296.JPG','index': 33},
        {'src':'images/298.JPG','index': 34},
        {'src':'images/351.JPG','index': 35},
        {'src':'images/417.JPG','index': 36},
        {'src':'images/dl_1.JPG','index': 37},
        {'src':'images/IMG_0532.JPG','index': 38},
        {'src':'images/IMG_0623.JPG','index': 39},
    ];

    $scope.init = function(){
        console.log(angular.element(document.querySelector('.item')));
    };
}]);

myApp.controller('MainController',['$scope', '$http', function($scope, $http){
  console.log("main page");
  $scope.message = "i am teh main page";
}]);

myApp.controller("RaincoatController",['$scope','$http', function($scope, $http){
  $scope.needsRaincoat = '';
  $scope.needsRaincoatDeutsch = '';
  $scope.userSubmitted = false;
  $scope.detailsActive = false;
  $scope.checkForRain = function(){

    $http.get("http://api.wunderground.com/api/12d88aeca334f6e6/conditions/q/"+ $scope.stateAbbrev + "/" + $scope.city + ".json").
    then(function(response){
        console.log(response)
        if(response.data.response.error){
            alert("invalid info.  please enter a real city and state!");

        }else{
            $scope.userSubmitted = true;
            $scope.weatherData=response.data;
            if($scope.weatherData.current_observation.precip_today_metric > 0){
                $scope.needsRaincoat = 'prolly';
                $scope.needsRaincoatDeutsch = 'wahrscheinlich';
            }else{
                $scope.needsRaincoat = 'nah';
                $scope.needsRaincoatDeutsch = 'nee';
            }
            console.log($scope.weatherData);
        }
    });


  };
  $scope.toggleDetails = function(){
      $scope.detailsActive = !$scope.detailsActive;
  };


  // $scope.items = [];
  //
  //
  //           $http({method: 'JSONP', url: "http://api.wunderground.com/api/12d88aeca334f6e6/conditions/q/CA/San_Francisco.json"}).
  //             success(function(data, status) {
  //               $scope.items = data.entries;
  //             }).
  //             error(function(data, status) {
  //               console.log(data || "Request failed");
  //           });

}]);
myApp.controller("CanvasController",['$scope','$http', function($scope,$http){
    $scope.init2 = function(){
        var stage = new createjs.Stage("demoCanvas");
        var circle = new createjs.Shape();
        circle.graphics.beginFill("Red").drawCircle(0, 0, 50);
        circle.x = 100;
        circle.y = 100;
        stage.addChild(circle);
        stage.update();
    };
}]);
myApp.controller("ProjectsController",['$scope','$http', function($scope,$http){
    $scope.init = function(){

    };
}])
myApp.controller("TwitterBotController",['$scope','$http', function($scope,$http){
    $scope.init = function(){

    };
}])
.filter('displayPage',function(){
	return function(input, start, itemsPerPage){
		input = input || '';
		return input.slice(parseInt(start*itemsPerPage),parseInt((start+1)*itemsPerPage));
	};
});
