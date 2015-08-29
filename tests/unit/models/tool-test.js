import Ember from 'ember';
import { moduleForModel, test } from 'ember-qunit';

moduleForModel('tool', 'Unit | Model | tool', {
  // Specify the other units that are required for this test.
  needs: ['model:feature', 'model:supports', 'model:concept', 'model:capability']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
