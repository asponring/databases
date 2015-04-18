var db = require('../db');




module.exports = {
  messages: {
    get: function (req, res) {
      db.dbConnection.connect();
      db.dbConnection.query("SELECT * FROM messages", function(err, results){
        console.log("testmodel");
        res.send(results);
      });
      db.dbConnection.end();
    }, // a function which produces all the messages
    post: function () {} // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

