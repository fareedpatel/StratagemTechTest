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

app.controller("footballoddsCtrl", function ($scope, footballService){
  $scope.getData = function () {
    var promise = footballService.getTeams();
    promise.then(function (data) {
      $scope.teams = data.data;
      });
};
    $scope.sortType     = 'name'; // set the default sort type
    $scope.sortReverse  = false;  // set the default sort order
    $scope.searchOdds   = '';     // set the default search/filter term
    $scope.getData();
});


app.directive('tooltip', function(){
    return {
        restrict: 'A',
        link: function(scope, element, attrs){
            $(element).hover(function(){
                // on mouseenter
                $(element).tooltip('show');
            }, function(){
                // on mouseleave
                $(element).tooltip('hide');
            });
        }
    };
});