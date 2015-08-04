import Feature from '../models/feature';

export default {
  create: function() {
    Feature.reopenClass({
      FIXTURES: [
        { id: 301, implements: 3011, provides: [3012], title: 'mixBuilding' },
        { id: 302, implements: 3021, provides: [3022], title: 'ecto' },
        { id: 303, implements: 3031, provides: [3032], title: 'postgresDatastorage' },
        { id: 304, implements: 3041, provides: [3042], title: 'mysqlDatastorage' },
        { id: 305, implements: 3051, provides: [3052], title: 'herokuHosting' },
        { id: 306, implements: 3061, provides: [3062], title: 'neo4jDatastorage' },
        { id: 307, implements: 3071, provides: [3072], title: 'orientdbDatastorage' }
      ]
    });
  }
};