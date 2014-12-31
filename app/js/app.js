"use strict";

var angularMovieApp = angular.module('angularMovieApp', ['ngRoute']);

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
              movies: function($http) {
                return $http.get('/server/api/movies');
              }
            }
        })
        .when('/movies/edit/:id', {
            templateUrl: 'partials/edit.html',
            controller: 'editMovieController',
            controllerAs: 'em'
        })
        .otherwise({
            redirectTo: '/home'
        });
});
