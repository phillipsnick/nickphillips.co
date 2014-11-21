app.factory('AppAlertService', ['$rootScope', '$timeout', function($rootScope, $timeout) {
  var alertService;
  $rootScope.alerts = [];

  return alertService = {
    getAlerts: function() {
      return $rootScope.alerts;
    },

    add: function(type, msg, timeout) {
      var alert = {
        type: type,
        msg: msg,
        close: function() {
          return alertService.closeAlert(this);
        }
      };

      if (timeout) {
        $timeout(function(){
          alertService.closeAlert(alert);
        }, timeout);
      }

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