/* use strict */

var app = angular.module("myApp", []);

app.service("footballService", function($http, $q)
{
  var deferred = $q.defer();
  $http.get('resources/json/football.json').then(function (data)
  {
    deferred.resolve(data);
    //console.log(data);
  });
  this.getTeams = function ()
  {
    return deferred.promise;
  };
});

app.controller("footballoddsCtrl", function ($scope, footballService){
  var promise = footballService.getTeams();
  promise.then(function (data) {
    $scope.teams = data.data;
    console.log($scope.teams);
    });
console.log($scope);
  $scope.sortType     = 'name'; // set the default sort type
  $scope.sortReverse  = false;  // set the default sort order
  $scope.searchOdds   = '';     // set the default search/filter term

});
