import feature from '../fixtures/feature';
import _implements from '../fixtures/implements';
import isCapableOf from '../fixtures/is-capable-of';
import task from '../fixtures/task';
import tool from '../fixtures/tool';

export default {
  name: 'fixtures',

  initialize: function() {
    feature.create();
    _implements.create();
    isCapableOf.create();
    task.create();
    tool.create();
  }
};