/*
 * Retro Game Night
 * Copyright (c) 2015 Sasha Fahrenkopf, ... add your name
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
import './Page.less';
import React, { PropTypes } from 'react';
import { Link } from 'react-router';

export default class Page extends React.Component {
  render() {
    return (
      <div>
      	<div>          
      		<Link to="app" className="navbar-brand row">
            <img src={require('./logo-small.png')} width="300" height="35" alt="React" />
          </Link>
        </div>
        <div>{this.props.children}</div>
      </div>
    );
  }
}
