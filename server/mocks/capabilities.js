var jsonBody = require('body/json');
var cors = require('cors');

module.exports = function(app) {
  var express = require('express');
  var capabilitiesRouter = express.Router();
  var capabilities = [
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
  var index = capabilities.length+1;

  capabilitiesRouter.get('/', function(req, res) {
    res.send({
      'capabilities': capabilities
    });
  });

  capabilitiesRouter.post('/', function(req, res) {
    jsonBody(req, res, function(err, body) {
      console.log(body);
      body.capability['id'] = index++;
      capabilities.push(body.capability);
      res.send(body);
    })
  });

  capabilitiesRouter.get('/:id', function(req, res) {
    if (req.params.id > 0 && req.params.id <= capabilities.length) {
      res.send({
        'capability': capabilities[req.params.id-1]
      });
    }
    else {
      res.status(404).send('Not found');
    }
  });

  capabilitiesRouter.put('/:id', function(req, res) {
    jsonBody(req, res, function(err, body) {
      console.log(body);
      body.capability['id'] = req.params.id
      capabilities[req.params.id-1] = body.capability;
      res.send(body);
    })
  });

  capabilitiesRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use(cors());
  app.use('/api/capabilities', capabilitiesRouter);
};
