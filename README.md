# RGN UI

Copyright © 2015 Cameron White, Sasha Fahrenkopf, Andrew Reder, and Chris Loeper

Retro Game Night is an open-source score tracking web app.

Contact Information found on GitHub profile pages.

## Overview

Retro Game Night is an app designed to help the Retro Game Night organization keep score, track events, and 
whatever else they want to do. It is being designed to allow users to quickly issue challenges, enter scores
for trials, and see the players, games and recent scores.

It is a React front-end for the backend found [here](https://github.com/RetroGameNight/rgn-api). It uses ES6, Babel,
Webpack, Gulp, Lodash, SuperAgent, Express, Less, Radium and a variety of other dependecies to do it's magic. (See [package.json](https://github.com/RetroGameNight/rgn-ui/blob/master/package.json) for a full list).

## Gloabal Dependencies

`npm install --global gulp react-tools`

## Setup
1. `git clone https://github.com/RetroGameNight/rgn-ui.git`
2. `npm install`

## Dev Build
1. `gulp watch --verbose`
2. Follow instructions to start back-end

## Production Build
1. `gulp build`
2. node ./build/server.js
3. Follow terminal output for URL

# Developer Docs
Master is considerd the stable branch. Other branches may or may not build successfully.

## Build Environment
There are two important directories, `src` and `build`. The `src` directory contains the source code which is copied using Gulp and Webpack to the `build` directory. 

Gulp copies files to the build and runs the files through Webpack, which is responsible for bundling them. In that process, Gulp runs the different source files through different compilers and minification processes. Part of the Gulp process is taking all the JSX files and uses Babel to make the ES6 ES5 compliant, compiling the JSX into JS and bundling the files into one file. 

In the dev environment, server.js is not used.

## Src Structure
```
src
├── assets      -- Contains static files, e.g., .html, .xml, .txt
├── components  -- Contains individual component packages and styles
├── Flux        -- Contains Flux stores and actions
│   ├── api     -- Files to interact with backend store (endpoint definitions)
│   └── flux.js -- Responsible for registering actions with the store
├── styles      -- Global app style 
├── app.js      -- The entry point for the app
├── config.js   -- Global environment config 
├── index.html  -- The "Main" template for rendering React nodes
├── routes.js   -- React-router configuration
└── server.js   -- Production server configuration
```

## Build Structure
```
build
├── assets      -- Contains static files, e.g., .html, .xml, .txt
├── css         -- Global app styles
├── fonts       -- Global app fonts
├── app.js      -- Client-side bundle. 
├── index.html  -- HTML file that gets served 
└── server.js   -- Server-side bundle
```
## License

The hardware design and source code for this project is available under the MIT License. See the file LICENSE in this distribution for license terms.