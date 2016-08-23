/* use strict */

var app = angular.module("myApp", []);

app.service("footballService", function($http, $q)
{
  var deferred = $q.defer();
  $http.get('resources/json/football.json').then(function (data)
  {
    deferred.resolve(data);
  });
  this.getTeams = function ()
  {
    return deferred.promise;
  };
});

app.controller("footballoddsCtrl", function ($scope, footballService)

{
  var promise = footballService.getTeams();
  promise.then(function(data)
  {
    $scope.teams = data;
    console.log($scope.teams);
  });
});