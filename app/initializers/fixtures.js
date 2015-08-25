import capability from '../fixtures/capability';
import concept from '../fixtures/concept';
import tool from '../fixtures/tool';
import feature from '../fixtures/feature';

export default {
  name: 'fixtures',

  initialize: function() {
    capability.create();
    concept.create();
    tool.create();
    feature.create();
  }
};