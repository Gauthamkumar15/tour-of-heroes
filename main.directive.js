app.directive("displayHeroes", function () {
  return {
    restrict: "E",
    template:
      "<div><button ng-click = 'heroesButtonClicked($index)' class = 'for-directive'><div class = 'for-directive1'><p class = 'for-directive-id'>id: {{$index}}</p><p class = 'for-directive-person'>{{eachItem}}</p></div></button></div>",
  };
});

app.directive("displayTopHeroes", function () {
  return {
    restrict: "E",
    template:
      "<button ng-click = 'topHeroesButtonClicked($index)' class = 'top-hero-button'>{{eachItem}}</button>",
  };
});
