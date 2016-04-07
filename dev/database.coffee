mysql = require 'mysql'
ini = require 'node-ini'

# Configuration file
inipath = './config.ini'
cfg = ini.parseSync inipath

# Database connection
db = cfg.database
dbname = db.dbname 

connection = mysql.createConnection
	host: db.host
	user: db.username
	password: db.password
	database: dbname

connection.connect()

module.exports = connection