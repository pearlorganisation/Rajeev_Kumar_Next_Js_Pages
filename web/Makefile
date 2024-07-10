.DEFAULT_GOAL := all

build:
	rm -rf .next
	npm run build
cp:
	rm -rf ../../www.thoughtglow/*
	cp -r out/* ../../www.thoughtglow/

all: build cp
	echo 'done'

dev:
	npm run dev
