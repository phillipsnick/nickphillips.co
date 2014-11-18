'use strict';

//angular.module('app', []);

describe('AppAlertService Test', function() {
  var AppAlertService;
  var $rootScope;

  beforeEach(module('app'));

  beforeEach(inject(function(_AppAlertService_, _$rootScope_) {
    AppAlertService = _AppAlertService_;
    $rootScope = _$rootScope_;
  }));

  describe('add an alert', function() {
    it('should should be in the rootScope', function() {
      expect(AppAlertService.add('error', 'This should be an error')).toBe(1);
      expect($rootScope.alerts.length).toBe(1);

      var alert = $rootScope.alerts[0];

      expect(alert.type).toBe('error');
      expect(alert.msg).toBe('This should be an error');
    });
  });

  describe('closing an alert', function() {
    it('should have a close function', function() {
      AppAlertService.add('error', 'This should be an error');
      var alert = $rootScope.alerts[0];

      expect(typeof alert.close).toBe('function');

      spyOn(alert, 'close');
      alert.close();
      console.log($rootScope.alerts);
      expect(alert.close).toHaveBeenCalled();
      expect($rootScope.alerts.length).toBe(0);
    });

    it('should be closable by index', function() {
      AppAlertService.add('error', 'This should be an error');
      expect($rootScope.alerts.length).toBe(1);

      AppAlertService.closeAlertIdx(1);
      expect($rootScope.alerts.length).toBe(0);
    });
  });

  describe('clearing all alerts', function() {
    beforeEach(function() {
      AppAlertService.add('error', 'This should be an error');
      AppAlertService.add('success', 'This should be an success');
    });

    it('should contain no alerts', function() {
      expect($rootScope.alerts.length).toBe(2);

      AppAlertService.clear();
      expect($rootScope.alerts.length).toBe(0);
    });
  });
});