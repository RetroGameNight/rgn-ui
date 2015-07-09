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
import Router, { RouteHandler } from "react-router"

export default class App {
  render() {
    return (
      <div className="App">
        <Navbar />
        <RouteHandler />
        <div className="navbar-footer">
          <div className="container">
            <p className="text-muted">
            </p>
          </div>
        </div>
      </div>
    );
  }
}
