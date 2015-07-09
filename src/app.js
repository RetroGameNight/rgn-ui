/*
 * React.js Starter Kit
 * Copyright (c) 2014 Konstantin Tarkus (@koistya), KriaSoft LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
import React from 'react';
import App from './components/App';
import Router, { Route } from 'react-router';

const mountNode = document.getElementById('app');

const routes = (
  <Route name='app' handler={App} path='/'>
  </Route>
);

Router.run(routes, (Handler, state) => {
  const params = state.params;
  React.render(<Handler params={params}/>, mountNode);
});
