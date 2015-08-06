import Capability from '../models/capability';

export default {
  create: function() {
    Capability.reopenClass({
      FIXTURES: [
        { id: 201, features: [301], title: 'Building', subTitle: 'Capability', description: 'BuildingDescription' },
        { id: 202, features: [305], title: 'Hosting', subTitle: 'Capability', description: 'HostingDescription' },
        { id: 203, features: [], title: 'Testing', subTitle: 'Capability', description: 'TestingDescription' },
        { id: 204, features: [302], title: 'Connecting', subTitle: 'Capability', description: 'ConnectingDescription' },
        { id: 205, features: [303, 304, 306, 307], title: 'Datastorage', subTitle: 'Capability', description: 'DatastorageDescription' }
      ]
    });
  }
};