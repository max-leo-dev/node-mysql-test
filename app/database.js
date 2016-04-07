(function() {
  var cfg, connection, db, dbname, ini, inipath, mysql;

  mysql = require('mysql');

  ini = require('node-ini');

  inipath = './config.ini';

  cfg = ini.parseSync(inipath);

  db = cfg.database;

  dbname = db.dbname;

  connection = mysql.createConnection({
    host: db.host,
    user: db.username,
    password: db.password,
    database: dbname
  });

  connection.connect();

  module.exports = connection;

}).call(this);
