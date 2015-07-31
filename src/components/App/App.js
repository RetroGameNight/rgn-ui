/*
 * Retro Game Night
 * Copyright (c) 2015 Sasha Fahrenkopf, ... add your name
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
import './App.less';
import React, { PropTypes } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Router, { RouteHandler } from "react-router"
import flux from '../../flux/flux'
import FluxComponent from 'flummox/component';

export default class App extends React.Component {
  render() {
    return (
      <FluxComponent flux={flux}>
        <AppInner />
      </FluxComponent>
    )
  }
}

class AppInner extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container" style={{"padding-top": 15 +"px"}}>
          <RouteHandler {...this.params} />
        </div>
        <Footer />
      </div>
    );
  }
}
