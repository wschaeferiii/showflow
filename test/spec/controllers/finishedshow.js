'use strict';

describe('Controller: FinishedshowCtrl', function () {

  // load the controller's module
  beforeEach(module('shofloApp'));

  var FinishedshowCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FinishedshowCtrl = $controller('FinishedshowCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(FinishedshowCtrl.awesomeThings.length).toBe(3);
  });
});
