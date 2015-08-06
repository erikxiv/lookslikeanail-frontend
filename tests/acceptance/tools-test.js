import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'myapp/tests/helpers/start-app';

var application;
var store;

module('Acceptance | tools', {
  beforeEach: function() {
    application = startApp();

    // Get store and initialize with test data
    // store = application.__container__.lookup('store:main');
    // Ember.run(function() {
    //   store.unloadAll();
    //   store.createRecord('tool', {id: 1, title: 'Heroku'});
    //   store.createRecord('tool', {id: 2, title: 'HelloThere'});
    // });
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('Get /tools should return 9 items', function(assert) {
  visit('/tools');
  andThen(function() {
    assert.equal(currentRouteName(), 'tools');
    assert.equal(find('.tool').length, 9);
  });
});

test('Get /tools should return 7 capability titles', function(assert) {
  visit('/tools');
  andThen(function() {
    assert.equal(find('.capability-title').length, 7);
  });
});

test('Get /tools/101 should return Java', function(assert) {
  visit('/tools/101');
  andThen(function() {
    assert.equal(find('.tool-title').text().trim(), 'Java');
  });
});

test('Update tool title should work', function(assert) {
  visit('/tools/101');
  triggerEvent('.tool-title', 'click');
  fillIn('#inputTitle', 'OtherTitle');
  triggerEvent('.tool-subTitle', 'click');
  andThen(function() {
    assert.equal(find('.tool-title').text().trim(), 'OtherTitle');
  });
});

test('Get /tools/101 should return Java again', function(assert) {
  visit('/tools/101');
  andThen(function() {
    assert.equal(find('.tool-title').text().trim(), 'Java');
  });
});

test('Get /tools/101 should not present any capabilities', function(assert) {
  visit('/tools/101');
  andThen(function() {
    assert.equal(find('.capability-title').length, 0);
  });
});

test('Get /tools/103 should present capability Building', function(assert) {
  visit('/tools/103');
  andThen(function() {
    assert.equal(find('.capability-title').text().trim(), 'Building');
  });
});

test('Add capability Building to Java should work', function(assert) {
  visit('/tools/101');
  triggerEvent('a.add-feature', 'click');
  triggerEvent('li.add-feature:contains("Building")', 'click');
  andThen(function() {
    assert.equal(find('.capability-title').text().trim(), 'Building');
  });
});

test('It should be possible to filter on capability', function(assert) {
  visit('/tools');
  triggerEvent('.capability-filter:contains("Building") .capability-filter-checkbox', 'click');
  andThen(function() {
    assert.equal(find('.capability-title').length, 1);
  });
});


test('It should be possible to filter on capability after adding a new one', function(assert) {
  visit('/tools/101');
  triggerEvent('a.add-feature', 'click');
  triggerEvent('li.add-feature:contains("Building")', 'click');
  visit('/tools');
  triggerEvent('.capability-filter:contains("Building") .capability-filter-checkbox', 'click');
  andThen(function() {
    assert.equal(find('.capability-title').length, 2);
  });
});
