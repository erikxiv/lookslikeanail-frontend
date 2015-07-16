module.exports = function(app) {
  var express = require('express');
  var toolsRouter = express.Router();
  var tools = [
    {
      'id': 1,
      'title': 'Heroku',
      'subTitle': 'PaaS',
      'description': 'Long-winding description',
      'created': '2015-01-01T12:00:00',
      'updated': '2015-01-01T12:00:00',
      'keywords': []
    },
    {
      'id': 2,
      'title': 'Elixir',
      'subTitle': 'Programming Language',
      'description': 'Long-winding description',
      'created': '2015-01-01T12:00:00',
      'updated': '2015-01-01T12:00:00',
      'keywords': []
    }
  ];
  var index = tools.length;

  toolsRouter.get('/', function(req, res) {
    res.send({
      'tools': tools
    });
  });

  toolsRouter.post('/', function(req, res) {
    res.send(req.body);
  });

  toolsRouter.get('/:id', function(req, res) {
    if (req.params.id > 0 && req.params.id <= tools.length) {
      res.send({
        'tool': tools[req.params.id-1]
      });
    }
    else {
      res.send(404, 'Not found');
    }
  });

  toolsRouter.put('/:id', function(req, res) {
    res.send({
      'tool': {
        id: req.params.id
      }
    });
  });

  toolsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/tools', toolsRouter);
};
