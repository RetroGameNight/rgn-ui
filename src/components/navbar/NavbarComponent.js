/*
 * Retro Game Night
 * Copyright (c) 2015 Sasha Fahrenkopf, Cameron White
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
'use strict';

import React from 'react';
import { Link } from 'react-router'
import FluxComponent from 'flummox/component'
import config from '../../config'
import Avatar from '../AvatarComponent'
import Login from './LoginButtonComponent'
import Logout from './LogoutButtonComponent'
import DropDown from './DropDownComponent'

require('styles/navbar/Navbar.sass');

const { scheme, host, port } = config.api.location
const API_BASENAME = `${scheme}://${host}:${port}`

class NavbarComponent extends React.Component {
  render() {
    const { isLoggedIn } = this.props
    return (
      <nav className='navigation navbar header'>
        <div className="container-fluid">
          <div className="nav navbar-header">
            <Link to="/" className="navbar-brand">
              <img src={require('../../images/logo-small.png')} 
                  width="300" height="35" alt="Retro Game Night" />
            </Link>
          </div>
            <ul className='nav navbar-nav'>
              <li><Link to='/games'>Games</Link></li>
              <li><Link to='/players'>Players</Link></li>
            </ul>
            {isLoggedIn &&
            <ul className='nav navbar-nav navbar-right'>
              <DropDown icons={[
                  <span className="glyphicon glyphicon-plus"></span>,
                  <span className="caret"></span>
                ]}>
                <a>New Score</a>
                <Link to="/new/game">New Game</Link>
                <a>New Trial</a>
                <a>New Challange</a>
              </DropDown>
              <DropDown icons={[
                  <FluxComponent connectToStores={{
                      api: store => {
                        const activeUser = store.getActiveUser()
                        return {
                          url: activeUser && activeUser.avatarURL,
                        }
                      }
                  }}>
                    <Avatar height={20} width={20} />
                  </FluxComponent>,
                  <span className="caret"></span>
                ]}>
                <Link to="/settings">Settings</Link>
                <Logout />
              </DropDown>
            </ul>}
            {(!isLoggedIn) &&
            <ul className='nav navbar-nav pull-right login'>
                <li><Login text='Sign In with Google' type='google' /></li>
                <li><Login text='Sign In with Facebook' type='facebook' /></li>
            </ul>}
        </div>
      </nav>
    );
  }
}

NavbarComponent.displayName = 'NavbarNavbarComponent';

// Uncomment properties you need
// NavbarComponent.propTypes = {};
NavbarComponent.contextTypes = {
  flux: React.PropTypes.object.isRequired,
}
// NavbarComponent.defaultProps = {};

export default NavbarComponent;

