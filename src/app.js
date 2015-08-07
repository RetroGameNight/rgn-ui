/*
 * React.js Starter Kit
 * Copyright (c) 2014 Konstantin Tarkus (@koistya), KriaSoft LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
require('babel/polyfill')
import React from 'react'
import Router from 'react-router'
import routes from './routes'

const mountNode = document.getElementById('app')

Router.run(routes, (Handler, state) => {
  const params = state.params
  React.render(<Handler params={params}/>, mountNode)
});
