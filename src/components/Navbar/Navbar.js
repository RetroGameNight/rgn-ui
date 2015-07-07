/*
 * Retro Game Night
 * Copyright (c) 2015 Sasha Fahrenkopf, ... add your name
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react'; // eslint-disable-line no-unused-vars

let api = "http://localhost:3000";

class SignIn extends React.Component {
    render() {
        let path = this.props.type;
        let URL = api + "/auth/" + path;
        
        return (
          <a className="btn btn-default" href={URL} role="button">{this.props.text}</a>
        )
    }
}

class Navbar {

  render() {
    return (
      <div className="navbar-top" role="navigation">
        <div className="container">
          <a className="navbar-brand row" href="/">
            <img src={require('./logo-small.png')} width="300" height="35" alt="React" />
          </a>
          <ul className="nav navbar-nav  navbar-left">
            <li className="active"><a href="/challenges">Challenges</a></li>
            <li><a href="/players">Players</a></li>
          </ul>
        
          <ul className="nav navbar-nav navbar-right">
            <li><SignIn text="Sign In with Google" type="google" /></li>
            <li><SignIn text="Sign In with Facebook" type="facebook" /></li>
          </ul>
        </div>
      </div>
    );
  }

}

export default Navbar;
