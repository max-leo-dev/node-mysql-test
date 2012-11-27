http = require 'http'
express = require 'express'
assets = require 'connect-assets'

app = express()

app.configure ->
	app.use assets
		src: __dirname + '/public'
	app.use express.bodyParser()
	app.use express.methodOverride()
	app.use express.static(__dirname + '/public')
	app.use app.router
	app.set 'views', 'views'

app.get '/', (req, res) ->
	Message = require './Message'
	Message.getText (text) ->
		message = text
		res.render 'index.jade', message: message

server = http.createServer app

port = 8020
server.listen port

console.log 'Server running at http://127.0.0.1:' + port
