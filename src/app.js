/*
 * React.js Starter Kit
 * Copyright (c) 2014 Konstantin Tarkus (@koistya), KriaSoft LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import 'babel/polyfill';

import React from 'react/addons';
import FastClick from 'fastclick';
import emptyFunction from 'react/lib/emptyFunction';
import App from './components/App';

let path = decodeURI(window.location.pathname);

function run() {
  // Render the top-level React component
  let props = {
    path: path,
    onSetTitle: (title) => document.title = title,
    onSetMeta: setMetaTag,
    onPageNotFound: emptyFunction
  };
  let element = React.createElement(App, props);
  React.render(element, document.body);
}

// Run the application when both DOM is ready
// and page content is loaded
Promise.all([
  new Promise((resolve) => {
    if (window.addEventListener) {
      window.addEventListener('DOMContentLoaded', resolve);
    } else {
      window.attachEvent('onload', resolve);
    }
  }).then(() => FastClick.attach(document.body))
]).then(run);
