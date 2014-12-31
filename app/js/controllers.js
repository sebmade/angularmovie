"use strict";

angularMovieApp.controller("homeController" ,function homeController($scope) {

    this.user = 'Sébastien Letélié';

});

angularMovieApp.controller("moviesController" ,function moviesController($scope, $http, movies) {
    var vm = this;
    vm.movies = movies;

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
            }, function(resp){
                console.log(resp);
            });
    };
});
