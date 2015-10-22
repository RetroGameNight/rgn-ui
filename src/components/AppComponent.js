/*
 * Retro Game Night
 * Copyright (c) 2015 Sasha Fahrenkopf, Cameron White
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
'use strict';

import React from 'react';
import Navbar from './navbar/NavbarComponent'
import { RouteHandler } from 'react-router'
import flux from './flux'
import FluxComponent from 'flummox/component'

window.jQuery = require('jquery')
require("bootstrap-webpack");
require('styles//App.sass');

require('babel/polyfill')

export default class AppComponent extends React.Component {
  componentDidMount() {
    flux.getActions('api').login('')
  }
  componentWillUpdate() {
    flux.getActions('api').login('')
  }
  render() {
    return (
      <FluxComponent flux={flux}>
        <div className="App">
          <FluxComponent connectToStores={{
              api: store => ({
                  isLoggedIn: store.isLoggedIn(),
              })
          }}>
            <Navbar />
          </FluxComponent>
          <div className='container' style={{'paddingTop': 15 + 'px'}}>
            {this.props.children}
          </div>
        </div>
      </FluxComponent>
    )
  }
}