var jsonBody = require('body/json');
var cors = require('cors');

module.exports = function(app) {
  var express = require('express');
  var toolsRouter = express.Router();
  var tools = [
    {
      'id': 101,
      'title': 'Heroku',
      'subTitle': 'PaaS',
      'description': 'Long-winding description',
      'created': '2015-01-01T12:00:00',
      'updated': '2015-01-01T12:00:00',
      'keywords': []
    },
    {
      'id': 102,
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
    setTimeout(function() {
      res.send({
        'tools': tools
      });
    },req.query.sleep || 0);
  });

  toolsRouter.post('/', function(req, res) {
    setTimeout(function() {
      jsonBody(req, res, function(err, body) {
        console.log(body);
        body.tool['id'] = index++;
        tools.push(body.tool);
        res.send(body);
      })
    },req.query.sleep || 0);
  });

  toolsRouter.get('/:id', function(req, res) {
    setTimeout(function() {
      var tool = tools.filter(function(element) { return element.id == req.params.id }).pop();
      if (tool) {
        res.send({
          'tool': tool
        });
      }
      else {
        res.status(404).send('Not found');
      }
    },req.query.sleep || 0);
  });

  toolsRouter.put('/:id', function(req, res) {
    setTimeout(function() {
      var tool = tools.filter(function(element) { return element.id == req.params.id }).pop();
      if (tool) {
        jsonBody(req, res, function(err, body) {
          body.tool['id'] = req.params.id;
          tools = tools.map(function(element) {
            return (element.id == req.params.id) ? body.tool : element;
          });
          res.send(body);
        })
      }
      else {
        res.status(404).send('Not found');
      }
    },req.query.sleep || 0);
  });

  toolsRouter.delete('/:id', function(req, res) {
    setTimeout(function() {
      tools = tools.filter(function(element) {
        return element.id != req.params.id;
      });
      res.status(200).send({"tool": {}});
    },req.query.sleep || 0);
  });

  app.use(cors());
  app.use('/api/tools', toolsRouter);
};
