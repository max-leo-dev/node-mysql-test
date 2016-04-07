1. Makefile
	remove load
	default:
		init configure
		install packages

	isntall:
		install database (fix bug in sql)
		puth data

	run:
		starting application


2. example-config.ini
	rename user to username

3. database.sql
	add "," after "Message varchar(100) NOT NULL"

4. app.coffee
	require stylus
	add middleware for stylus 

5. index.jade
	"!!!5" to "doctype html"
	"!= menu" to "link(href='/css/main.css', rel='stylesheet')"
	"p" to "h1"
	"some text" to variable "message"

6. main.styl
	add h1 color:blue

7. added grunt and grunt's dependecies to devDependencies

8. added Gruntfile.js for app configure

9. configure
	development and prodaction version
	compile coffee to simple JS for prodaction

10. move files to dev folder
