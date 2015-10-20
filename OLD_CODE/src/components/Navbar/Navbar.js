 /*
 * Retro Game Night
 * Copyright (c) 2015 Sasha Fahrenkopf, Cameron White
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import './Navbar.less'
import React from 'react' // eslint-disable-line no-unused-vars
import { Link } from 'react-router'
import flux from '../../flux/flux'
import FluxComponent from 'flummox/component'
import IsLoggedIn from '../IsLoggedIn'
import IsNotLoggedIn from '../IsNotLoggedIn'
import config from '../../config'
import Avatar from '../Avatar'

// This is gross
window.jQuery = require('jquery')
require('bootstrap')

const { scheme, host, port } = config.api.location

const API_BASENAME = `${scheme}://${host}:${port}`

export default class Navbar {
  render() {
    return (
      <FluxComponent connectToStores={['api']}>
        <NavbarInner />
      </FluxComponent>
    )
  }
}

class NavbarInner extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isVisible: false }
  }
  toggleMenu = () => {
    this.setState({ isVisible: !this.state.isVisible })
  }
  componentDidMount() {
    flux.getActions('api').login()
  }
  loggedIn() {
    if (this.props.activeUser) {
      return true
    } else {
      return false
    }
  }
  render() {
    var icon = 'glyphicon'
    if(this.state.isVisible) {
      icon += ' glyphicon-remove'
    } else {
      icon += ' glyphicon-menu-hamburger'
    }
    return (
      <nav className='navigation navbar header'>
        <div className="container-fluid">
          <div className="nav navbar-header">
            <Link to="app" className="navbar-brand">
              <img src={require('./logo-small.png')} width="300" height="35" alt="Retro Game Night" />
            </Link>
          </div>
          <ul className='nav navbar-nav'>
            <li><Link to='games'>Games</Link></li>
            <li><Link to='players'>Players</Link></li>
          </ul>
          <IsLoggedIn>
            <ul className='nav navbar-nav navbar-right'>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown"
                    role="button" aria-haspopup="true" aria-expanded="false">
                  <span className="glyphicon glyphicon-plus"></span>
                  <span className="caret"></span>
                </a>
                <ul className="dropdown-menu">
                  <li><a>New Score</a></li>
                  <li role="separator" className="divider"></li>
                  <li><Link to="game-new">New Game</Link></li>
                  <li><a>New Trial</a></li>
                  <li><a>New Challange</a></li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown"
                    role="button" aria-haspopup="true" aria-expanded="false">
                    <Avatar url={this.state.avatarUrl}
                        height={20} width={20} />
                    <span className="caret"></span>
                </a>
                <ul className="dropdown-menu">
                  <li><Link to="user-settings">Settings</Link></li>
                  <li><Logout /></li>
                </ul>
              </li>
            </ul>
          </IsLoggedIn>
          <IsNotLoggedIn>
            <ul className='nav navbar-nav pull-right login'>
                <li><Login text='Sign In with Google' type='google' /></li>
                <li><Login text='Sign In with Facebook' type='facebook' /></li>
            </ul>
          </IsNotLoggedIn>
        </div>
      </nav>
    )
  }
}

class Login extends React.Component {
  render() {
    const path = this.props.type
    const URL = `${API_BASENAME}/auth/${path}`

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
      <a onClick={this.clickHandler}>Logout</a>
    )
  }
}
