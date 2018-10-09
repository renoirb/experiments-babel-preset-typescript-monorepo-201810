
node_modules:
	yarn
	yarn bootstrap

%.ts: node_modules
	node_modules/.bin/prettier --parser typescript --write "modules/**/*.ts"

%.md: node_modules
	node_modules/.bin/prettier --parser markdown --write "**/*.md"

%.json: node_modules
	node_modules/.bin/prettier --parser json --write "**/*.json"

.PHONY: lint
lint: node_modules %.md %.json %.ts

.PHONY: tsc
tsc: node_modules lint
	$(info 'tsc stands for TypeScript (type) Check(er)')
	yarn lerna run tsc

.PHONY: build
build: node_modules
	$(info 'Run TypeScript build for each modules/')
	yarn lerna run build

