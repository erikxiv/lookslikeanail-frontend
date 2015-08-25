import capability from '../fixtures/capability';
import tool from '../fixtures/tool';
import feature from '../fixtures/feature';

export default {
  name: 'fixtures',

  initialize: function() {
    capability.create();
    tool.create();
    feature.create();
  }
};