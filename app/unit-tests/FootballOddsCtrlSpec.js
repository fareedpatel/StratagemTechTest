describe('FootballOddsCtrlSpec', function(){
  var footballoddsCtrl, $scope;
 
  beforeEach(function() { // executed before each 'it' is run
    module('myApp'); // load the module
 
    inject(function($controller, $rootScope) { // inject controller for testing
      $scope = $rootScope.$new();
      appCtrl = $controller('footballoddsCtrl', {
        $scope: $scope
      });
    });
  });
 
  it('should have appCtrl controller toBeDefined', function() {
    expect(appCtrl).toBeDefined();
  });


});