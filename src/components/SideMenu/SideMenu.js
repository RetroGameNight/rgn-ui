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
import IsLoggedIn from '../IsLoggedIn'
import IsNotLoggedIn from '../IsNotLoggedIn'
import ChallengeButton from '../ChallengeButton'

let api = "http://localhost:3000";

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

class Avatar extends React.Component {
  render() {
    const player = this.props.user
    const className = "user-avatar "
    const avatarUrl = player ? player.avatarUrl : ""
    const playerUrl = "player"

    return (
      <div className={className}>
        <Link to={playerUrl} params={{ id: player ? player.id : null}}>
          <img src={avatarUrl} width="50" height="50" alt="User Avatar" />
        </Link>

        <ChallengeButton btnText="Issue Challenge" class="challenge" />
      </div>
    )      
  }
}


class Logout extends React.Component {
  clickHandler() {
    flux.getActions('api').logout('')
  }
  render() {
    return (
      <div>
        <a onClick={this.clickHandler} className="logout">Logout</a>
      </div>
    )
  }
}


export default class SideMenu extends React.Component {
  constructor(props) {
    super(props)  
  }
  componentDidMount() {
    flux.getActions('api').login()
  }
  render() {
    let avatar = ""
    return (
      <div className={(this.props.visibility ? "visible " : "") + "side-bar fixed" }>
        <ul className="user">
          {avatar}
        </ul>
        <IsLoggedIn>
          <Avatar user={this.props.user} />
        </IsLoggedIn>
        <ul className="menu">
          <li><NavbarLink to="games">Games</NavbarLink></li>
          <li><NavbarLink to="players">Players</NavbarLink></li>
        </ul>
        <IsLoggedIn>
          <ul className="login">
              <li><Logout /></li>
          </ul>
        </IsLoggedIn>
        <IsNotLoggedIn>
          <ul className="login">
              <li><Login text="Sign In with Google" type="google" /></li>
              <li><Login text="Sign In with Facebook" type="facebook" /></li>
          </ul>
        </IsNotLoggedIn>
      </div>
    )
  }
}