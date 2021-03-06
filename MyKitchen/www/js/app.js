//main application javascript stuff

var app = angular.module('starter', ['ionic', 'ngCordova','MyKitchen.controllers', 'MyKitchen.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('scanItem', {
    url: '/scanItem',
    views: {
      'scanItem': {
        templateUrl: 'templates/scanItem.html',
        controller: 'ScanItemCtrl'
      }
    }
  })

  .state('inventory', {
      url: '/inventory',
      views: {
        'inventory': {
          templateUrl: 'templates/inventory.html',
          controller: 'InventoryCtrl'
        }
      }
    })
    /*.state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })*/

  .state('personal', {
    url: '/personal',
    views: {
      'personal': {
        templateUrl: 'templates/personal.html',
        controller: 'PersonalCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/scanItem');

});
