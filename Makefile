default: run

DBNAME := $(shell ./getini config.ini database dbname)
DBUSER := $(shell ./getini config.ini database username)
DBPASS := $(shell ./getini config.ini database password)
MYSQL = mysql -u $(DBUSER) --password='$(DBPASS)' -D $(DBNAME)

load:
	mysql -e "CREATE MY DATABASE IF NOT EXISTS $(DBNAME)"
	$(MYSQL) < database.sql

setup: 
	cp example-config.ini config.ini
	npm install

run:
	coffee app.coffee
