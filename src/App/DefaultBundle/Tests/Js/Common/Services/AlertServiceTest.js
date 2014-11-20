'use strict';

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
      var alert = AppAlertService.add('error', 'This should be an error');

      expect(typeof alert).toBe('object');
      expect($rootScope.alerts.length).toBe(1);

      expect(alert.type).toBe('error');
      expect(alert.msg).toBe('This should be an error');
    });
  });

  describe('closing an alert', function() {
    it('should have a close function', function() {
      var alert = AppAlertService.add('error', 'This should be an error');
      expect(typeof alert.close).toBe('function');

      alert.close();
      expect(AppAlertService.getAlerts().length).toBe(0);
    });

    it('should be closable by index', function() {
      AppAlertService.add('error', 'This should be an error');
      expect($rootScope.alerts.length).toBe(1);

      AppAlertService.closeAlertIdx(0);
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

  describe('geeting all alerts', function() {
    beforeEach(function() {
      AppAlertService.add('error', 'This should be an error');
      AppAlertService.add('success', 'This should be an success');
    });

    it('should contain 2 alerts', function() {
      expect($rootScope.alerts.length).toBe(2);
      expect(AppAlertService.getAlerts().length).toBe(2);
    })
  });
});