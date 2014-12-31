"use strict";

angularMovieApp.controller("homeController" ,function homeController($scope) {

    this.user = 'Sébastien Letélié';

});

angularMovieApp.controller("moviesController" ,function moviesController($scope, $http, movies) {
  var vm = this;

  vm.movies = movies.data;

    vm.deleteMovie = function(movie){
		var index = vm.movies.indexOf(movie);

        $http.delete('/server/api/movies/' + movie.id)
            .success(function(){
                vm.movies.splice(index, 1);
            }
        );
    };

});

angularMovieApp.controller('editMovieController', function editMovieController($scope, $http, $routeParams, $location){
  var vm = this;

    var movieId = $routeParams.id;

    $http.get('/server/api/movies/' + movieId).success(function(movie){
       $scope.movie = movie;
    });

    vm.updateMovie = function(movie){
       $http.put('/server/api/movies', movie)
           .success(function(){
               $location.path('/movies');
           })
           .error(function(resp){
               console.log(resp);
           });
    };
});

angularMovieApp.controller("movieFormController" ,function ($scope, $http) {

    $scope.addMovie = function(movie){

        $http.post('/server/api/movies', movie)
            .success(function(){
                $scope.mo.movies.push(movie);
                $scope.movie = {};
            })
            .error(function(resp){
                console.log(resp);
            });

    };

});
