(function() {
  var Message, db;

  db = require('./database');

  Message = (function() {
    function Message() {}

    Message.getText = function(cb) {
      return db.query('SELECT Message FROM JobTest', function(err, results) {
        return typeof cb === "function" ? cb(results[0].Message) : void 0;
      });
    };

    return Message;

  })();

  module.exports = Message;

}).call(this);
