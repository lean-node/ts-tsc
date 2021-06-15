# Project: ts-tsc

> How to create Node.js Apps with TypeScript

## Compiling TypeScript

### Option A: TypeScript Compiler (tsc)

Pros:

- Supports all TypeScript features
- Static type checking included
  Cons:
- Performance

### Option B: Third-party transpiler used at dev time

Possible alternatives to speed up performance:

- [esbuild](https://esbuild.github.io/)
- [swc](https://swc.rs/)

## Devtool integration

- [ts-node](https://typestrong.org/ts-node/) for tsc or swc usage
- [ts-eager](https://www.npmjs.com/package/ts-eager) for esbuild usage
- [esbuild-register](https://www.npmjs.com/package/esbuild-register)
- [esbuild-node-tsc](https://www.npmjs.com/package/esbuild-node-tsc)

## Linting (and code formatting)

- [ESLint](https://eslint.org/) with [Prettier](https://prettier.io/) - de-facto standard
- [Rome](https://rome.tools/)

## Testing

- [Jest](https://jestjs.io/) with [ts-jest](https://kulshekhar.github.io/ts-jest/)
- [Mocha](https://mochajs.org/) or many other frameworks with ts-node ...

## See also

- https://khalilstemmler.com/blogs/typescript/node-starter-project/
- https://ultimatecourses.com/blog/setup-typescript-nodejs-express
- https://basarat.gitbook.io/typescript/nodejs
- https://www.pullrequest.com/blog/intro-to-using-typescript-in-a-nodejs-express-project/
