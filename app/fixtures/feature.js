import Feature from '../models/feature';

export default {
  create: function() {
    Feature.reopenClass({
      FIXTURES: [
        { id: 301, implements: 3011, isCapableOf: [3012], title: 'mixBuilding' },
        { id: 302, implements: 3021, isCapableOf: [3022], title: 'ecto' },
        { id: 303, implements: 3031, isCapableOf: [3032], title: 'postgresDatastorage' },
        { id: 304, implements: 3041, isCapableOf: [3042], title: 'mysqlDatastorage' },
        { id: 305, implements: 3051, isCapableOf: [3052], title: 'herokuHosting' }
      ]
    });
  }
};