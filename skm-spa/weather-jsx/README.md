# React-JSX-Webpack Project Template

A minimal template with:
- React
- JSX
- Webpack
- ExpressJS server

Additional tools configured:
- ESLint (with [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react))
- SASS
- PostCSS (with [postcss-preset-env](https://github.com/csstools/postcss-preset-env))

Inspired by:
- [React Docs](https://reactjs.org/docs/create-a-new-react-app.html#creating-a-toolchain-from-scratch)
- [Creating a React App… From Scratch.](https://blog.usejournal.com/creating-a-react-app-from-scratch-f3c693b84658)
- [How to Create a React app from scratch using Webpack 4](https://medium.freecodecamp.org/part-1-react-app-from-scratch-using-webpack-4-562b1d231e75)
- [A tale of Webpack 4 and how to finally configure it in the right way.](https://hackernoon.com/a-tale-of-webpack-4-and-how-to-finally-configure-it-in-the-right-way-4e94c8e7e5c1)
- [SurviveJS (Webpack Book)](https://survivejs.com/webpack/)

Walkthrough guide:
https://github.com/krulik/materials/blob/master/guides/webpack-react.md

## Setup
To install the project dependencies:
```
npm install
cd server
npm install
```

## Development

During development the client code is served by Webpack Dev Server (`http://localhost:3001`) and tries to connect to the Express server on `http://localhost:8000` (see below).

```
npm start
```

This is watching and compiling from the `./src` folder into the `./public` folder (using hot-module-replacement).

### Lint

```
npm run lint
````

### Browsers List

```
npx browserslist
```

### Server
The server has its own `package.json` inside the `./server` folder and to run it first `cd server` and `npm start`. It will open the Express server on `http://localhost:8000`

## Production

For production client code is bundled into the `./public/` folder and is served by the ExpressJS alone on `http://localhost:8000` (no Webpack Dev Server needed on production).

To build:
```
npm run build
```

To run:
```
cd server
npm start
```