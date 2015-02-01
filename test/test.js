'use strict';

describe('unit tests', function () {

  // load the controller's module
  beforeEach(module('angularMovieApp'));

  var mc;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    mc = $controller('moviesController', {$scope: undefined, $http: {}, movies: []});
  }));

  it('test var movies', function () {
    mc.toogleView();
    expect(mc.tableViewIcon).toBe('icon-th icon-white');
  });

});
