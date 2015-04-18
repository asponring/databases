var db = require('../db');
var app = require('../app.js');



module.exports = {
  messages: {
    get: function (req, res) {
      var newConnection = db.connectToDB();
      newConnection.connect();
      newConnection.query("SELECT * FROM messages", function(err, results){
        if (err) {
          throw new Error(err.message);
        }
        console.log(results);
        res.send(results);
        newConnection.end();
      });
    }, // a function which produces all the messages
    post: function () {} // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

