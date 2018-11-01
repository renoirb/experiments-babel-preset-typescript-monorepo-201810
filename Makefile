
node_modules:
	yarn
	yarn bootstrap

%.ts: node_modules
	$(info Lint and prettify all TypeScript files)
	node_modules/.bin/prettier --parser typescript --write "packages/**/*.ts"

%.md: node_modules
	$(info Lint and prettify all Markdown files)
	node_modules/.bin/prettier --parser markdown --write "**/*.md"

%.json: node_modules
	$(info Lint and prettify all JSON files)
	node_modules/.bin/prettier --parser json --write "**/*.json"

.PHONY: lint
lint: node_modules %.md %.json %.ts

.PHONY: tsc
tsc: node_modules lint
	$(info tsc stands for TypeScript (type) Check(er))
	yarn lerna run tsc

.PHONY: build
build: node_modules
	$(info Run build task for each packages/*)
	yarn lerna run build

.PHONY: test
test: node_modules
	$(info Run test task for each packages/*)
	yarn lerna run test

.PHONY: release
release: node_modules
	$(info Creating a new release)
	yarn lerna version
	yarn lerna publish 

