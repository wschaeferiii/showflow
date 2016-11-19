'use strict';

describe('Controller: ScriptsCtrl', function () {

  // load the controller's module
  beforeEach(module('shofloApp'));

  var ScriptsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ScriptsCtrl = $controller('ScriptsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ScriptsCtrl.awesomeThings.length).toBe(3);
  });
});
