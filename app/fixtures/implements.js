import Implements from '../models/implements';

export default {
  create: function() {
    Implements.reopenClass({
      FIXTURES: [
        { id: 3011, feature: 301, tool: 103},
        { id: 3021, feature: 302, tool: 104},
        { id: 3031, feature: 303, tool: 105},
        { id: 3041, feature: 304, tool: 106},
        { id: 3051, feature: 305, tool: 107},
        { id: 3061, feature: 306, tool: 108},
        { id: 3071, feature: 307, tool: 109}
      ]
    });
  }
};