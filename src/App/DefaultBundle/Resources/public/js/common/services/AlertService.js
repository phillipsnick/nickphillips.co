app.factory('AppAlertService', ['$rootScope', function($rootScope) {
  var alertService;
  $rootScope.alerts = [];

  return alertService = {
    getAlerts: function() {
      return $rootScope.alerts;
    },

    add: function(type, msg) {
      var alert = {
        type: type,
        msg: msg,
        close: function() {
          return alertService.closeAlert(this);
        }
      };

      $rootScope.alerts.push(alert);

      return alert;
    },

    closeAlert: function(alert) {
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