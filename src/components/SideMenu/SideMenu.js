/*
 * Retro Game Night
 * Copyright (c) 2015 Sasha Fahrenkopf, ... add your name
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import './SideMenu.less';
import React from 'react'; // eslint-disable-line no-unused-vars
import flux from '../../flux/flux'
import FluxComponent from 'flummox/component';
import { Link } from 'react-router';

let api = "http://localhost:3000";

export default class SideMenu {
  render() {
    return (
      <FluxComponent connectToStores={['api']}>
        <SideBar />
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


class Login extends React.Component {
  render() {
    let path = this.props.type;
    let URL = api + "/auth/" + path;

    return (
      <a className={this.props.type} href={URL}>{this.props.text}</a>
    )
  }
}


class Logout extends React.Component {
  clickHandler() {
    flux.getActions('api').logout('')
  }
  render() {
    return (
      <a onClick={this.clickHandler} className="logout">Logout</a>
    )
  }
}


export default class SideBar extends React.Component {
  constructor(props) {
    super(props)   
  }
  componentDidMount() {
    flux.getActions('api').login()
  }
  render() {
    let userManagementLinks = []
    if (flux.getStore('api').isLoggedIn()) {
      userManagementLinks = [
        <li><Logout /></li>
      ]
    } else {
      userManagementLinks = [
        <li><Login text="Sign In with Google" type="google" /></li>,
        <li><Login text="Sign In with Facebook" type="facebook" /></li>
      ]
      console.log(flux.getStore('api').isLoggedIn())
    }
    return (
      <div className={(this.props.visibility ? "visible " : "") + "side-bar fixed" }>
          <div>
          <ul className="menu">
            <li><NavbarLink to="games">Games</NavbarLink></li>
            <li><NavbarLink to="players">Players</NavbarLink></li>
          </ul>
          <ul className="login">
            {userManagementLinks}
          </ul>
          </div>
        </div>
    )
  }
}