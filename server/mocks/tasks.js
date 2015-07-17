var jsonBody = require('body/json');

module.exports = function(app) {
  var express = require('express');
  var tasksRouter = express.Router();
  var tasks = [
    {
      'id': 1,
      'title': 'Hosting',
      'subTitle': 'Hmmm',
      'description': 'Long-winding description',
      'created': '2015-01-01T12:00:00',
      'updated': '2015-01-01T12:00:00',
      'keywords': []
    },
    {
      'id': 2,
      'title': 'Building',
      'subTitle': 'Hmmm',
      'description': 'Long-winding description',
      'created': '2015-01-01T12:00:00',
      'updated': '2015-01-01T12:00:00',
      'keywords': []
    }
  ];
  var index = tasks.length+1;

  tasksRouter.get('/', function(req, res) {
    res.send({
      'tasks': tasks
    });
  });

  tasksRouter.post('/', function(req, res) {
    jsonBody(req, res, function(err, body) {
      console.log(body);
      body.task['id'] = index++;
      tasks.push(body.task);
      res.send(body);
    })
  });

  tasksRouter.get('/:id', function(req, res) {
    if (req.params.id > 0 && req.params.id <= tasks.length) {
      res.send({
        'task': tasks[req.params.id-1]
      });
    }
    else {
      res.status(404).send('Not found');
    }
  });

  tasksRouter.put('/:id', function(req, res) {
    jsonBody(req, res, function(err, body) {
      console.log(body);
      body.task['id'] = req.params.id
      tasks[req.params.id-1] = body.task;
      res.send(body);
    })
  });

  tasksRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/tasks', tasksRouter);
};
