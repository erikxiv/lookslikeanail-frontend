import feature from '../fixtures/feature';
import capability from '../fixtures/capability';
import supports from '../fixtures/supports';
import tool from '../fixtures/tool';

export default {
  name: 'fixtures',

  initialize: function() {
    feature.create();
    capability.create();
    supports.create();
    tool.create();
  }
};