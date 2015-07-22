import Implements from '../models/implements';

export default {
  create: function() {
    Implements.reopenClass({
      FIXTURES: [
        { id: 3011, feature: 301, tool: 103},
        { id: 3021, feature: 302, tool: 104},
        { id: 3031, feature: 303, tool: 105},
        { id: 3041, feature: 304, tool: 106},
        { id: 3051, feature: 305, tool: 107}
      ]
    });
  }
};