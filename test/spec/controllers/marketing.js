'use strict';

describe('Controller: MarketingCtrl', function () {

  // load the controller's module
  beforeEach(module('shofloApp'));

  var MarketingCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MarketingCtrl = $controller('MarketingCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MarketingCtrl.awesomeThings.length).toBe(3);
  });
});
