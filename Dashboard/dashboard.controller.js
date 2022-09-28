app.controller("dashBoardController", [
  "$scope",
  "$location",
  "$rootScope",
  function ($scope, $location, $rootScope) {
    $scope.topHeroesButtonClicked = function (index) {
      $location.path(`/edit/${index}/top/${$rootScope.heroesArray[index]}`);
    };
  },
]);
