import Provides from '../models/provides';

export default {
  create: function() {
    Provides.reopenClass({
      FIXTURES: [
        { id: 3012, feature: 301, task: 201 },
        { id: 3022, feature: 302, task: 204 },
        { id: 3032, feature: 303, task: 205 },
        { id: 3042, feature: 304, task: 205 },
        { id: 3052, feature: 305, task: 202 },
        { id: 3062, feature: 306, task: 205 },
        { id: 3072, feature: 307, task: 205 }
      ]
    });
  }
};