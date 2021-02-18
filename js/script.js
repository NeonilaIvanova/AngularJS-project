/* angular.module("myApp", []).controller("MainController", MainController);

function MainController($scope) {
  $scope.message = "Hello";
}
 */

const myApp = angular.module("myApp", []);

myApp.controller("mainController", [
  //controller
  "$scope",
  function ($scope) {
    const person = {
      firstName: "Neonila",
      lastName: "Ivanova",
      imgSrc: "./assets/imgs/img1.jpeg",
    };

    $scope.message = "Hello";
    $scope.person = person;
  },
]);
