import Ember from 'ember';
import { moduleForModel, test } from 'ember-qunit';

moduleForModel('tool', 'Unit | Model | tool', {
  // Specify the other units that are required for this test.
  needs: ['model:feature', 'model:implements', 'model:is-capable-of', 'model:task']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
