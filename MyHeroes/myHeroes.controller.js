app.controller("heroesController", [
  "$scope",
  "$rootScope",
  "$location",
  function ($scope, $rootScope, $location) {
    $scope.heroesButtonClicked = function (index) {
      $location.path(`/edit/${index}/heroes/${$rootScope.heroesArray[index]}`);
    };
  },
]);
