import Supports from '../models/supports';

export default {
  create: function() {
    Supports.reopenClass({
      FIXTURES: [
        { id: 3013, feature: 301, concept: 104 },
        { id: 3023, feature: 302, concept: 105 },
        { id: 3024, feature: 302, concept: 106 },
        { id: 3053, feature: 305, concept: 105 },
        { id: 3054, feature: 305, concept: 104 },
        { id: 3057, feature: 206, concept: 104 },
      ]
    });
  }
};
