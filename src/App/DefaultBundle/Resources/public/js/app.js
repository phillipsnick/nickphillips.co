var app = angular.module('app', ['ui.bootstrap']);

app.controller('AppDefaultCtrl', ['$scope', 'AppAlertService', function($scope, AppAlertService) {
  $scope.testButton = function() {
    AppAlertService.add('success', 'Woo we created a message');
  }
}]);
