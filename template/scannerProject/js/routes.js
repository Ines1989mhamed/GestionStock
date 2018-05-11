angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('login', {
    url: '/page1',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('menu', {
    url: '/page2',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('bandeDEntrE', {
    url: '/page3',
    templateUrl: 'templates/bandeDEntrE.html',
    controller: 'bandeDEntrECtrl'
  })

  .state('bandeDeSortie', {
    url: '/page4',
    templateUrl: 'templates/bandeDeSortie.html',
    controller: 'bandeDeSortieCtrl'
  })

$urlRouterProvider.otherwise('/page1')


});