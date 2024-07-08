.DEFAULT_GOAL := all

build:
	rm -rf out/*
	npm run build
cp:
	rm -rf ../../checkout.thoughtglow/*
	cp -r out/* ../../checkout.thoughtglow/

all: build cp
	echo 'done'

dev:
	npm run dev
