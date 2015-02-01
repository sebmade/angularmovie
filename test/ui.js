'use strict';

describe('ui tests', function () {

  // load the controller's module
  beforeEach(function() {
    browser.get('http://localhost:3001/#/movies');
  });

  it('test movies screen', function () {
    element(by.id('moviesLink')).click();
    expect(element(by.id('moviesTitle')).getText()).toEqual('Ma vidéothèque 9 films Ajouter un film');
  });

  it('test edit page', function () {
    element(by.css('a i.icon-edit')).click();
    expect(element(by.model('movie.title')).getAttribute('value')).toEqual('Crazy Kung Fu');
  });

});
