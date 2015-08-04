import feature from '../fixtures/feature';
import _implements from '../fixtures/implements';
import Provides from '../fixtures/provides';
import task from '../fixtures/task';
import tool from '../fixtures/tool';

export default {
  name: 'fixtures',

  initialize: function() {
    feature.create();
    _implements.create();
    Provides.create();
    task.create();
    tool.create();
  }
};