var app = angular.module("tourOfHeros", ["ngRoute"]);

app.config([
  "$routeProvider",
  function ($routeProvider) {
    $routeProvider
      .when("/heroes", {
        controller: "heroesController",
        templateUrl: "MyHeroes/index.html",
      })
      .when("/dashboard", {
        controller: "dashBoardController",
        templateUrl: "Dashboard/index.html",
      })
      .when("/edit/:id/:fromWhere/:data", {
        controller: "editController",
        templateUrl: "Edit/index.html",
      })
      .otherwise("/dashboard");
  },
]);
