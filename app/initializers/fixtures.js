import capability from '../fixtures/capability';
import concept from '../fixtures/concept';
import tool from '../fixtures/tool';
import supports from '../fixtures/supports';
import feature from '../fixtures/feature';

export default {
  name: 'fixtures',

  initialize: function() {
    capability.create();
    concept.create();
    tool.create();
    supports.create();
    feature.create();
  }
};
