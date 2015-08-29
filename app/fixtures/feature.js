import Feature from '../models/feature';

export default {
  create: function() {
    Feature.reopenClass({
      FIXTURES: [
        { id: 301, tool: 103, capability: 201, supports: [3013], title: 'mixBuilding' },
        { id: 302, tool: 104, capability: 204, supports: [3023, 3024], title: 'ecto' },
        { id: 303, tool: 105, capability: 205, supports: [], title: 'postgresDatastorage' },
        { id: 304, tool: 106, capability: 205, supports: [], title: 'mysqlDatastorage' },
        { id: 305, tool: 107, capability: 202, supports: [3053, 3054], title: 'herokuHosting' },
        { id: 306, tool: 107, capability: 201, supports: [3063], title: 'herokuBuilding' },
        { id: 307, tool: 108, capability: 205, supports: [], title: 'neo4jDatastorage' },
        { id: 308, tool: 109, capability: 205, supports: [], title: 'orientdbDatastorage' }      ]
    });
  }
};
