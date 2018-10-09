# [@renoirb/experiments-babel-preset-typescript-monorepo-201810][repolink]

Objectives:

1. Leverage [Lerna][lerna] and [Yarn Workspaces][yarn-workspaces]
1. Leverage [TypeScript][typescriptlang]'s strict-typing (Loaded using [Babel 7][babel7-migration], and [@babel/preset-env][babel-preset-env])
1. Write Babel loaded JavaScript/TypeScript once
1. Distribute as [ESNext modules][esnext-modules], to be imported and handled from the relying project repository.
1. For integration with modern Babel 7+ project.
1. Make it usable within [Nuxt 2's _modulesDir_ loading system][nuxt-modules], and also from Nuxt's _serverMiddleware_

[typescriptlang]: https://www.typescriptlang.org/
[repolink]: https://github.com/renoirb/experiments-babel-preset-typescript-monorepo-201810
[lerna]: https://lernajs.io/
[yarn-workspaces]: https://yarnpkg.com/lang/en/docs/workspaces/
[nuxt-modules]: https://nuxtjs.org/api/configuration-modulesdir
[babel7-migration]: https://babeljs.io/docs/en/v7-migration.html
[babel-preset-env]: https://babeljs.io/docs/en/babel-preset-env
[esnext-modules]: https://babeljs.io/blog/2018/06/26/on-consuming-and-publishing-es2015+-packages

## Inspired by..

### Other projects

- [deepsweet/start](https://github.com/deepsweet/start)
- [Microsoft/TypeScript-Babel-Starter](https://github.com/Microsoft/TypeScript-Babel-Starter)
- [square/babel-codemod](https://github.com/square/babel-codemod)
- [GatsbyJs/gatsby](https://github.com/gatsbyjs/gatsby)
- [transitive-bullsh\*\*/npm-es-modules](https://github.com/transitive-bullshit/npm-es-modules)
- [retextjs/retext](https://github.com/retextjs/retext)
- [Turfjs/turf](https://github.com/Turfjs/turf/blob/master/packages/turf/index.mjs)

### Reading materials

- [How to Create and Publish an NPM module in TypeScript](https://codeburst.io/https-chidume-nnamdi-com-npm-module-in-typescript-12b3b22f0724)
- [Avoid this gotcha when code-splitting with TypeScript and Webpack](https://davidea.st/articles/webpack-typescript-code-split-wont-work) (Because we will eventually have this code-split by WebPack)
- [Five tips I wish I knew when I started with Typescript](https://codeburst.io/five-tips-i-wish-i-knew-when-i-started-with-typescript-c9e8609029db)
- [Node.js (TypeScript) ...](https://codeburst.io/node-js-typescript-on-heroku-a3ac5a62cf66)
- [TypeScript 3 - What has come?](https://itnext.io/typescript-3-0-what-has-come-19f81d1fac60)
