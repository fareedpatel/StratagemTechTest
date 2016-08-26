'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to the application when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("");
  });


  describe('Premiership outright winner odds', function() {

    beforeEach(function() {
      browser.get('index.html');
    });


    it('should have; ID, team, Betfair', function() {
        expect(by.model('team.id')).toMatch(/id/);
        expect(by.model('team.team')).toMatch(/team/);
        expect(by.model('team.betfair')).toMatch(/betfair/);
    });

    it('should count all the teams', function(){
      var list = expect(element.all(by.repeater('team in teams')).count()).toEqual(20);
    });

    it ('should have all the odds from Betfair', function(){
      var odds = element.all(by.repeater('team.betfair'));
    });

  });

});
