/*
 * Retro Game Night
 * Copyright (c) 2015 Sasha Fahrenkopf, ... add your name
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import './App.less';
import React, { PropTypes } from 'react';
import invariant from 'react/lib/invariant';
import Navbar from '../Navbar';
import NotFoundPage from '../NotFoundPage';
import setViewport from './setViewport';
import Router, { RouteHandler } from "react-router"

class App {

  static propTypes = {
    path: PropTypes.string.isRequired,
    viewport: PropTypes.object.isRequired,
    onSetTitle: PropTypes.func.isRequired,
    onPageNotFound: PropTypes.func.isRequired
  };

  componentDidMount() {
    window.addEventListener('popstate', this.handlePopState);
    window.addEventListener('click', this.handleClick);
  }

  componentWillUnmount() {
    window.removeEventListener('popstate', this.handlePopState);
    window.removeEventListener('click', this.handleClick);
  }

  shouldComponentUpdate(nextProps) {
    return this.props.path !== nextProps.path ||
           this.props.viewport !== nextProps.viewport;
  }

  render() {
    this.props.onSetTitle("RGN!")
    return (
      <div className="App">
        <Navbar />
        <RouteHandler />
        <div className="navbar-footer">
          <div className="container">
            <p className="text-muted">
              <span><a href="https://github.com/RetroGameNight/">Contribute!</a></span>
              <span>{'Viewport: ' + this.props.viewport.width + 'x' + this.props.viewport.height}</span>
            </p>
          </div>
        </div>
      </div>
    );
  }

  handleClick(event) {
    if (event.button === 1 || event.metaKey || event.ctrlKey || event.shiftKey || event.defaultPrevented) {
      return;
    }

    // Ensure link
    var el = event.target;
    while (el && el.nodeName !== 'A') {
      el = el.parentNode;
    }
    if (!el || el.nodeName !== 'A') {
      return;
    }

    // Ignore if tag has
    // 1. "download" attribute
    // 2. rel="external" attribute
    if (el.getAttribute('download') || el.getAttribute('rel') === 'external') {
      return;
    }

    // Ensure non-hash for the same path
    var link = el.getAttribute('href');
    if (el.pathname === location.pathname && (el.hash || link === '#')) {
      return;
    }

    // Check for mailto: in the href
    if (link && link.indexOf('mailto:') > -1) {
      return;
    }

    // Check target
    if (el.target) {
      return;
    }

    // X-origin
    var origin = window.location.protocol + '//' + window.location.hostname +
      (window.location.port ? ':' + window.location.port : '');
    if (!(el.href && el.href.indexOf(origin) === 0)) {
      return;
    }

    // Rebuild path
    var path = el.pathname + el.search + (el.hash || '');

    event.preventDefault();
  }
}

export default setViewport(App);
