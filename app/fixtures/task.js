import Task from '../models/task';

export default {
  create: function() {
    Task.reopenClass({
      FIXTURES: [
        { id: 201, provides: [3012], title: 'Building', subTitle: 'Task', description: 'BuildingDescription' },
        { id: 202, provides: [3052], title: 'Hosting', subTitle: 'Task', description: 'HostingDescription' },
        { id: 203, provides: [], title: 'Testing', subTitle: 'Task', description: 'TestingDescription' },
        { id: 204, provides: [3022], title: 'Connecting', subTitle: 'Task', description: 'ConnectingDescription' },
        { id: 205, provides: [3032, 3042], title: 'Datastorage', subTitle: 'Task', description: 'DatastorageDescription' }
      ]
    });
  }
};