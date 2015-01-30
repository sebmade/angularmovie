"use strict";

angularMovieApp.controller("homeController" ,function ($scope) {

    $scope.user = 'Thierry LAU';

});

angularMovieApp.controller("moviesController" ,function ($scope, Movie) {

    // display mode by default
    $scope.tableView = false;
    // icon by mode by default
    $scope.tableViewIcon = 'icon-th icon-white';

    // function called when changing view mode
    $scope.toogleView = function() {
        $scope.tableView = !$scope.tableView;

        if($scope.tableView === false){
            $scope.tableViewIcon = 'icon-th-list icon-white';
        } else {
            $scope.tableViewIcon = 'icon-th icon-white';
        }
    };

    vm.deleteMovie = function(movie) {
      movie.$remove(function(resp){
                vm.movies.splice(vm.movies.indexOf(movie), 1);
            }
        );
    };

});

angularMovieApp.controller('editMovieController', function editMovieController($scope, Movie, $routeParams, $location, movie){
    var vm = this;

    $scope.movie = movie;

    vm.updateMovie = function(movie){
       movie.$update(movie, function(){
               $location.path('/movies');
           }, function(resp){
               console.log(resp);
           });
    };
});

angularMovieApp.controller("movieFormController" ,function movieFormController($scope, Movie) {
    var vm = this;
    vm.addMovie = function(movie){

        Movie.save(movie, function(movie){
                $scope.mo.movies.push(movie);
                $scope.movie = {};
                $scope.showAlert = false;
            }, function(error){
                // Affichage d'un message d'erreur
                $scope.errorTitle = 'Erreur ' + statusCode ;
                $scope.errorMessage = resp.error;
                $scope.showAlert = true;
            });
    };

});

