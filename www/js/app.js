// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', [
    'ionic',
    'btford.socket-io',
    "com.2fdevs.videogular",
    "com.2fdevs.videogular.plugins.overlayplay"
]);

app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/')

    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
    });/*{
        url: '/random',
        templateUrl: 'views/play.html',
        controller: 'PlayCtrl'
    },*/
    $stateProvider.state('create', {
        url: '/create',
        templateUrl: 'views/create.html',
        controller: 'CreateCtrl'
    });
    $stateProvider.state('chunk', {
        url: '/chunk/:chunkId',
        templateUrl: 'views/chunk.html',
        controller: 'chunkCtrl',
        resolve: {
            chunk: function(apiService,$stateParams) {
                return apiService.getChunk($stateParams.chunkId);
            }
        }
    });
    $stateProvider.state('play', {
        url: '/play',
        templateUrl: 'views/play.html',
        controller: 'PlayCtrl'
    })
})

.run(function($ionicPlatform, $rootScope,socket) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    // if(window.cordova && window.cordova.plugins.Keyboard) {
    //   cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    // }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }

  });
})
