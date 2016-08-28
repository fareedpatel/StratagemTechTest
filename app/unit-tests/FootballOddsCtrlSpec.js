describe('FootballOddsCtrlSpec', function () {
    var footballoddsCtrl, $scope;
    var $http, $httpBackend;
    beforeEach(module('myApp'));

    beforeEach(inject(function (_$http_, _$httpBackend_) {
        $http = _$http_;
        $httpBackend = _$httpBackend_;
    }));

    beforeEach(inject(function ($controller, $rootScope) { // inject controller for testing
        $scope = $rootScope.$new();
        footballoddsCtrl = $controller('footballoddsCtrl', {
            $scope: $scope
        });
    }));


    it('should have controller that is defined', function () {
        expect(footballoddsCtrl).toBeDefined();
    });



    it('should retrieve the data from Json file', function () {

        var response = [
            {
                "id": "001",
                "team": "mancity",
                "betfair":
                            [
                              { "odds": 2.68 },
                              { "backodds": 2.7 },
                              { "layodds": 2.72 }
                            ],
                "PaddyPower":
                        [
                          { "odds": 2.75 }
                        ],
                "SkyBet":
                        [
                          { "odds": 2.63 }
                        ]
            }
        ];
        $httpBackend.whenGET('resources/json/football.json').respond(response);
        $scope.getData();
        $httpBackend.flush();
        expect($scope.teams.length).toBe(1);
    });

});