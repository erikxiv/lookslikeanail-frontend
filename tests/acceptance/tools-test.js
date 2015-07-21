import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'myapp/tests/helpers/start-app';

var application;
var store;

module('Acceptance | tools', {
  beforeEach: function() {
    application = startApp();

    // Get store and initialize with test data
    store = application.__container__.lookup('store:main');
    Ember.run(function() {
      store.unloadAll();
      store.createRecord('tool', {id: 1, title: 'Heroku'});
      store.createRecord('tool', {id: 2, title: 'HelloThere'});
    });
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('Get /tools should return 2 items', function(assert) {
  visit('/tools');
  andThen(function() {
    assert.equal(currentRouteName(), 'tools');
    assert.equal(find('.tool').length, 2);
    assert.equal(find('.tool .tool-title:first').text(), 'Heroku');
  });
});

test('Update tool title should work', function(assert) {
  visit('/tools/1');
  triggerEvent('.tool-title', 'click');
  fillIn('#inputTitle', 'OtherTitle');
  triggerEvent('.tool-subTitle', 'click');
  andThen(function() {
    assert.equal(find('td.tool-title').text(), 'OtherTitle');
  });
});
