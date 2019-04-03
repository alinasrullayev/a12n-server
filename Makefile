PATH:=./node_modules/.bin:$(PATH)
SOURCE_FILES:=$(shell find src/ -type f -name '*.ts')

PORT:=8531
MYSQL_HOST:=127.0.0.1
MYSQL_PASSWORD:=
MYSQL_USER:=root
MYSQL_DATABASE:=a12nserver

DOCKER_IMAGE_NAME:=a12n-server

export PORT
export MYSQL_HOST
export MYSQL_USER
export MYSQL_DATABASE
export MYSQL_PASSWORD

.PHONY:start run build test lint fix lint-fix start-dev watch inspect deploy
start: build
	node dist/app.js

run: start

build: dist/build

docker-build: build
	docker build -t $(DOCKER_IMAGE_NAME) .

docker-run:
	docker run -it --rm --name $(DOCKER_IMAGE_NAME)-01 $(DOCKER_IMAGE_NAME)

test:
	nyc mocha

lint:
	tslint -p .

fix:
	tslint -p . --fix

lint-fix: fix

start-dev:
	ts-node src/app.js

watch:
	tsc --watch

dist/build: $(SOURCE_FILES)
	tsc
	@# Touching this file so Makefile knows when it was last built.
	touch dist/build

inspect: build
	node --inspect dist/app.js

