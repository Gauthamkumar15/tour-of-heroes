app.controller("mainController", [
  "$scope",
  "$location",
  "$rootScope",

  function ($scope, $location, $rootScope) {
    $scope.button = "nav-button";
    $scope.button1 = "nav-button";

    $scope.heroesClicked = function () {
      $location.path("/heroes");
      $scope.button = "nav-button";
      $scope.button1 = "nav-button1";
    };

    $scope.dashboardClicked = function () {
      $location.path("/dashboard");
      $scope.button = "nav-button1";
      $scope.button1 = "nav-button";
    };

    $rootScope.heroesArray = [
      "Roger Federer",
      "Adam Gilchrist",
      "Cristiano Ronaldo",
      "PV Sindhu",
      "Virat Kohli",
      "Sunil Gavaskar",
      "Sania Mirza Lawn",
      "PT Usha",
      "Saina Nehwal",
      "Mithali Raj",
      "Milkha Singh",
      "Sunil Chhetri",
      "Kapil Dev",
      "Dhyan Chand",
      "Abhinav Bindra",
      "Mary Kom",
      "Sachin Tendulkar",
      "Neeraj Chopra",
      "Mirabai Chanu",
    ];
  },
]);
