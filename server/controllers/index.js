var models = require('../models');
var bluebird = require('bluebird');

var headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10 // Seconds.

};

module.exports = {
  messages: {
    get: function (req, res) {
      res.set(headers);
      models.messages.get(req, res);
    }, // a function which handles a get request for all messages
    put: function (req, res) {
      res.set(headers);
      models.messages.put(req, res);
    }, // a function which handles posting a message to the database
    options: function(req, res) {
      res.set(headers);
      res.end();
    }
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    put: function (req, res) {},
    options: function (req, res) {}
  }
};

