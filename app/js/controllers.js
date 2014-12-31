"use strict";

angularMovieApp.controller("homeController" ,function homeController($scope) {

    this.user = 'Sébastien Letélié';

});

angularMovieApp.controller("moviesController" ,function moviesController($scope, $http, movies) {
    var vm = this;
    vm.movies = movies.data;

    vm.deleteMovie = function(index){
        Movie.remove(vm.movies[index].id)
            .success(function(resp){
                vm.movies.splice(index, 1);
            }
        );
    };

});

angularMovieApp.controller('editMovieController', function editMovieController($scope, Movie, $location, movie){
    var vm = this;

    $scope.movie = movie.data;

    vm.updateMovie = function(movie){
       Movie.update(movie)
           .success(function(){
               $location.path('/movies');
           })
           .error(function(resp){
               console.log(resp);
           });
    };
});

angularMovieApp.controller("movieFormController" ,function movieFormController($scope, Movie) {
    var vm = this;
    vm.addMovie = function(movie){

        Movie.create(movie)
            .success(function(){
                var newMovie = {};
                angular.copy(movie, newMovie);
                $scope.mo.movies.push(newMovie);
                $scope.movie = {};
            })
            .error(function(resp){
                console.log(resp);
            });
    };
});
