"use strict";

var angularMovieApp = angular.module('angularMovieApp', ['ngResource', 'ngRoute']);

angularMovieApp.config(function($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'partials/home.html',
            controller: 'homeController',
            controllerAs: 'ho'
        })
        .when('/movies', {
            templateUrl: 'partials/movies.html',
            controller: 'moviesController',
            controllerAs: 'mo',
            resolve: {
              movies: function(Movie) {
                return Movie.query();
              }
            }
        })
        .when('/movies/edit/:id', {
            templateUrl: 'partials/edit.html',
            controller: 'editMovieController',
            controllerAs: 'em',
            resolve: {
              movie: function(Movie, $route) {
                return Movie.get({id: $route.current.params.id});
              }
            }
        })
        .otherwise({
            redirectTo: '/home'
        });
});
