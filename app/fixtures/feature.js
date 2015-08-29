import Feature from '../models/feature';

export default {
  create: function() {
    Feature.reopenClass({
      FIXTURES: [
        { id: 301, tool: 103, capability: 201, title: 'mixBuilding' },
        { id: 302, tool: 104, capability: 204, title: 'ecto' },
        { id: 303, tool: 105, capability: 205, title: 'postgresDatastorage' },
        { id: 304, tool: 106, capability: 205, title: 'mysqlDatastorage' },
        { id: 305, tool: 107, capability: 202, title: 'herokuHosting' },
        { id: 306, tool: 107, capability: 201, title: 'herokuBuilding' },
        { id: 307, tool: 108, capability: 205, title: 'neo4jDatastorage' },
        { id: 308, tool: 109, capability: 205, title: 'orientdbDatastorage' }
      ]
    });
  }
};
