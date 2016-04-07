DBNAME=$(shell ./getini config.ini database dbname)
DBUSER=$(shell ./getini config.ini database username)
DBPASS=$(shell ./getini config.ini database password)
MYSQL=mysql -u $(DBUSER) --password='$(DBPASS)' -D $(DBNAME)

default: 
	cp example-config.ini config.ini
	npm install

install:	
	$(MYSQL) -e "CREATE DATABASE IF NOT EXISTS $(DBNAME)"
	$(MYSQL) < database.sql

run:
	coffee app.coffee
