var db = require('../db');



module.exports = {
  messages: {
    get: function (req, res) {
      var newConnection = db.connectToDB();
      newConnection.connect();
      newConnection.query("SELECT * FROM messages", function(err, results){
        if (err) {
          throw new Error(err.message);
        }
        var resultsObj = {"results": results};
        newConnection.end();
        console.log(resultsObj);
        res.send(resultsObj);
      });
    }, // a function which produces all the messages
    put: function (req, res) {
      var newConnection = db.connectToDB();
      newConnection.connect();
      var reqBody = req.body;
      newConnection.query("INSERT INTO messages VALUES (" + reqBody.id + ", '" + reqBody.text + "', '" + reqBody.username + "')", function(err, results){
        if (err) {
          throw new Error(err.message);
        }
        newConnection.end();
        res.end();
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    put: function () {}
  }
};

