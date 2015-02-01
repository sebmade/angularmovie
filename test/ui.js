'use strict';

describe('ui tests', function () {

  // load the controller's module
  beforeEach(function() {
    browser.get('http://localhost:3001/');
  });

  it('test movies screen', function () {
    element(by.id('moviesLink')).click();
    expect(element(by.id('moviesTitle')).getText()).toEqual('Ma vidéothèque 9 films Ajouter un film');
  });

});
