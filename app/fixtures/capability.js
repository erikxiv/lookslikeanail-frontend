import Capability from '../models/capability';

export default {
  create: function() {
    Capability.reopenClass({
      FIXTURES: [
        { id: 201, provides: [3012], title: 'Building', subTitle: 'Capability', description: 'BuildingDescription' },
        { id: 202, provides: [3052], title: 'Hosting', subTitle: 'Capability', description: 'HostingDescription' },
        { id: 203, provides: [], title: 'Testing', subTitle: 'Capability', description: 'TestingDescription' },
        { id: 204, provides: [3022], title: 'Connecting', subTitle: 'Capability', description: 'ConnectingDescription' },
        { id: 205, provides: [3032, 3042, 3062, 3072], title: 'Datastorage', subTitle: 'Capability', description: 'DatastorageDescription' }
      ]
    });
  }
};