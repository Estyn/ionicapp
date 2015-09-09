// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('eliteApp', ['ionic'])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  })

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        abstract:true,
        templateUrl: 'app/home/home.html',
      })
      .state('home.leagues', {
        url: '/leagues',
        views:{
           tabMyTeams:{
              templateUrl: 'app/home/leagues.html'
            }
        }
      })
      .state('home.myteams', {
        url: '/myteams',
        views:{
           tabLeagues:{
              templateUrl: 'app/home/myteams.html'
            }
        }
      })

      .state('app', {
        url: '/app',
        abstract:true,
        templateUrl: 'app/layout/menu-layout.html',
      })
      .state('app.teams', {
        url: '/teams',
        views:{
           mainContent:{
              templateUrl: 'app/teams/teams.html'
            }
        }
      }) 
       .state('app.team-details', {
        url: '/team/:ids',
        views:{
           mainContent:{
              templateUrl: 'app/teams/team-detail.html'
            }
        }
      })
       .state('app.game', {
        url: '/game',
        views:{
           mainContent:{
              templateUrl: 'app/game/game.html'
            }
        }
      })
       .state('app.standings', {
        url: '/standings',
        views:{
           mainContent:{
              templateUrl: 'app/standings/standings.html'
            }
        }
      })
       .state('app.locations', {
        url: '/locations',
        views:{
           mainContent:{
              templateUrl: 'app/locations/locations.html'
            }
        }
      })
       .state('app.rules', {
        url: '/rules',
        views:{
           mainContent:{
              templateUrl: 'app/rules/rules.html'
            }
        }
      })
      
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/teams');
  });
