import Provides from '../models/provides';

export default {
  create: function() {
    Provides.reopenClass({
      FIXTURES: [
        { id: 3012, feature: 301, capability: 201 },
        { id: 3022, feature: 302, capability: 204 },
        { id: 3032, feature: 303, capability: 205 },
        { id: 3042, feature: 304, capability: 205 },
        { id: 3052, feature: 305, capability: 202 },
        { id: 3062, feature: 306, capability: 205 },
        { id: 3072, feature: 307, capability: 205 }
      ]
    });
  }
};