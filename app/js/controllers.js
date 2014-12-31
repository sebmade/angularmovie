"use strict";

angularMovieApp.controller("homeController" ,function homeController($scope) {

    this.user = 'Sébastien Letélié';

});

angularMovieApp.controller("moviesController" ,function moviesController($scope, $http, movies) {
    var vm = this;
    vm.movies = movies;

    vm.deleteMovie = function(index){
      vm.movies[index].$remove(function(resp){
                vm.movies.splice(index, 1);
            }
        );
    };

});

angularMovieApp.controller('editMovieController', function editMovieController($scope, Movie, $location, movie){
    var vm = this;

    $scope.movie = movie;

    vm.updateMovie = function(movie){
       $scope.movie.$update(function(){
               $location.path('/movies');
           }, function(resp){
               console.log(resp);
           });
    };
});

angularMovieApp.controller("movieFormController" ,function movieFormController($scope, Movie) {
    var vm = this;
    vm.addMovie = function(movie){

        Movie.save(movie, function(){
                var newMovie = {};
                angular.copy(movie, newMovie);
                $scope.mo.movies.push(newMovie);
                $scope.movie = {};
            }, function(resp){
                console.log(resp);
            });
    };
});
