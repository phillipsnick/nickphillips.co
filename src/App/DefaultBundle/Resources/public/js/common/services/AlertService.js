app.factory('AppAlertService', ['$rootScope', function($rootScope) {
  var alertService;
  $rootScope.alerts = [];

  return alertService = {
    add: function(type, msg) {
      return $rootScope.alerts.push({
        type: type,
        msg: msg,
        close: function() {
          return alertService.closeAlert(this);
        }
      });
    },

    closeAlert: function(alert) {
      console.log($rootScope.alerts.indexOf(alert));
      return this.closeAlertIdx($rootScope.alerts.indexOf(alert));
    },

    closeAlertIdx: function(index) {
      $rootScope.alerts.splice(index, 1);
    },

    clear: function() {
      $rootScope.alerts = [];
    }
  };
}]);