import Supports from '../models/supports';

export default {
  create: function() {
    Supports.reopenClass({
      FIXTURES: [
        { id: 3013, feature: 301, tool: 104 },
        { id: 3023, feature: 302, tool: 105 },
        { id: 3024, feature: 302, tool: 106 },
        { id: 3053, feature: 305, tool: 105 },
        { id: 3054, feature: 305, tool: 104 },
        { id: 3057, feature: 306, tool: 104 }
      ]
    });
  }
};
