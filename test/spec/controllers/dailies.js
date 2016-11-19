'use strict';

describe('Controller: DailiesCtrl', function () {

  // load the controller's module
  beforeEach(module('shofloApp'));

  var DailiesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DailiesCtrl = $controller('DailiesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DailiesCtrl.awesomeThings.length).toBe(3);
  });
});
