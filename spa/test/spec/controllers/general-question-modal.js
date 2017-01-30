'use strict';

describe('Controller: GeneralQuestionModalCtrl', function () {

  // load the controller's module
  beforeEach(module('roomChatApp'));

  var GeneralQuestionModalCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GeneralQuestionModalCtrl = $controller('GeneralQuestionModalCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(GeneralQuestionModalCtrl.awesomeThings.length).toBe(3);
  });
});
