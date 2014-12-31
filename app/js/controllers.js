"use strict";

angularMovieApp.controller("homeController" ,function homeController($scope) {

    this.user = 'Sébastien Letélié';

});

angularMovieApp.controller("moviesController" ,function moviesController($scope, $http) {
  var vm = this;

    $http.get('/server/api/movies').success(function(resp){
        vm.movies = resp;
    });

    $scope.deleteMovie = function(index){
        $http.delete('/server/api/movies/' + $scope.movies[index].id)
            .success(function(resp){
                $scope.movies.splice(index, 1);
            });
    };
});

angularMovieApp.controller("movieFormController" ,function movieFormController($scope, $http) {
  var vm = this;
    vm.addMovie = function(movie){

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
