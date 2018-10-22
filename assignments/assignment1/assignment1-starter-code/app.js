(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.click = function () {
    if( $scope.dishes == "" )
    {
      $scope.message = "Please enter data first";
      return;
    }
    var dishes = $scope.dishes.split(",").filter(function(el) {return el.trim().length != 0});
    if( dishes.length > 3 )
      $scope.message = "Too much!";
    else if( dishes.length > 0 )
      $scope.message = "Enjoy!";
    else
      $scope.message = "Please enter data first";
  }
}
})();
