/*
 * Retro Game Night
 * Copyright (c) 2015 Sasha Fahrenkopf, ... add your name
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react'; // eslint-disable-line no-unused-vars
import { Link } from 'react-router';
import flux from '../../flux'
import FluxComponent from 'flummox/component';


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

class Logout extends React.Component {
  clickHandler() {
    flux.getActions('activeUser').logout('')
  }
  render() {
    return (
      <a onClick={this.clickHandler} className="btn btn-default">Logout</a>
    )
  }
}

export default class Navbar {
  render() {
    return (
      <FluxComponent connectToStores={['activeUser']}>
        <NavbarInner />
      </FluxComponent>
    )
  }
}

class NavbarLink extends React.Component {
  static contextTypes = {
    router: React.PropTypes.func.isRequired
  }
  render() {
    const currentRoutes = this.context.router.getCurrentRoutes();
    const activeRouteName = currentRoutes[currentRoutes.length - 1].name;
    let className = ""
    if (this.props.to == activeRouteName) {
      className = "active"
    } 
    return (
      <Link className={className} to={this.props.to}>{this.props.children}</Link>
    )
  }
}

class NavbarInner {
  loggedIn() {
    if (this.props.activeUser) {
      return true
    } else {
      return false
    }
  }
  componentDidMount() {
    flux.getActions('activeUser').login()
  }
  render() {
    let userManagementLinks = []
    if (this.loggedIn()) {
      userManagementLinks = [
        <li><Logout /></li>
      ]
    } else {
      userManagementLinks = [
        <li><SignIn text="Sign In with Google" type="google" /></li>,
        <li><SignIn text="Sign In with Facebook" type="facebook" /></li>
      ]
    }
    return (
      <div className="navbar-top" role="navigation">
        <div className="container">
          <Link to="app" className="navbar-brand row">
            <img src={require('./logo-small.png')} width="300" height="35" alt="React" />
          </Link>
          <ul className="nav navbar-nav  navbar-left">
            <li><NavbarLink to="events">Events</NavbarLink></li>
            <li><NavbarLink to="challenges">Challenges</NavbarLink></li>
            <li><NavbarLink to="games">Games</NavbarLink></li>
            <li><NavbarLink to="players">Players</NavbarLink></li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            {userManagementLinks}
          </ul>
        </div>
      </div>
    );
  }
}
