import Task from '../models/task';

export default {
  create: function() {
    Task.reopenClass({
      FIXTURES: [
        { id: 201, isCapableOf: [3012], title: 'Building', subTitle: 'Task', description: 'BuildingDescription' },
        { id: 202, isCapableOf: [3052], title: 'Hosting', subTitle: 'Task', description: 'HostingDescription' },
        { id: 203, isCapableOf: [], title: 'Testing', subTitle: 'Task', description: 'TestingDescription' },
        { id: 204, isCapableOf: [3022], title: 'Connecting', subTitle: 'Task', description: 'ConnectingDescription' },
        { id: 205, isCapableOf: [3032, 3042], title: 'Datastorage', subTitle: 'Task', description: 'DatastorageDescription' }
      ]
    });
  }
};