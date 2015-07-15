import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'myapp/tests/helpers/start-app';

var application;

module('Acceptance | tools', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /tools', function(assert) {
  visit('/tools');

  andThen(function() {
    assert.equal(currentURL(), '/tools');
  });
});
