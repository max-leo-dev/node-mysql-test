(function() {
  var app, assets, express, http, port, server, stylus;

  http = require('http');

  express = require('express');

  assets = require('connect-assets');

  stylus = require('stylus');

  app = express();

  app.configure(function() {
    app.use(assets({
      src: __dirname + '/public'
    }));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express["static"](__dirname + '/public'));
    app.use(app.router);
    app.use(stylus.middleware({
      src: __dirname + '/resourse',
      dest: __dirname + '/public/css',
      debug: true,
      force: true
    }));
    return app.set('views', 'views');
  });

  app.get('/', function(req, res) {
    var Message;
    Message = require('./Message');
    return Message.getText(function(text) {
      var message;
      message = text;
      return res.render('index.jade', {
        message: message
      });
    });
  });

  server = http.createServer(app);

  port = 8020;

  server.listen(port);

  console.log('Server running at http://127.0.0.1:' + port);

}).call(this);
