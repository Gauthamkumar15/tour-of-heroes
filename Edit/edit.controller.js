app.controller("editController", [
  "$routeParams",
  "$scope",
  "$rootScope",
  "$location",
  function ($routeParams, $rootScope, $scope, $location) {
    $scope.id = $routeParams.id;
    $scope.editInput = $routeParams.data;
    console.log($scope.editInput);
    $scope.backClicked = function (updatedData) {
      $rootScope.heroesArray[$scope.id] = updatedData;

      if ($routeParams.fromWhere === "top") {
        $location.path("/dashboard");
      } else {
        $location.path("/heroes");
      }
    };
  },
]);
