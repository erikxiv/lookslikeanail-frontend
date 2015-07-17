var jsonBody = require('body/json');

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
  var index = tools.length+1;

  toolsRouter.get('/', function(req, res) {
    res.send({
      'tools': tools
    });
  });

  toolsRouter.post('/', function(req, res) {
    jsonBody(req, res, function(err, body) {
      console.log(body);
      body.tool['id'] = index++;
      tools.push(body.tool);
      res.send(body);
    })
  });

  toolsRouter.get('/:id', function(req, res) {
    if (req.params.id > 0 && req.params.id <= tools.length) {
      res.send({
        'tool': tools[req.params.id-1]
      });
    }
    else {
      res.status(404).send('Not found');
    }
  });

  toolsRouter.put('/:id', function(req, res) {
    jsonBody(req, res, function(err, body) {
      console.log(body);
      body.tool['id'] = req.params.id
      tools[req.params.id-1] = body.tool;
      res.send(body);
    })
  });

  toolsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/tools', toolsRouter);
};
