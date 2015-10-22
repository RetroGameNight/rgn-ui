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

/*
import IsLoggedIn from '../IsLoggedIn'
import IsNotLoggedIn from '../IsNotLoggedIn'
import Avatar from '../Avatar'
*/

//window.jQuery = require('jquery')
//require('bootstrap')

require('styles/navbar/Navbar.sass');

const { scheme, host, port } = config.api.location
const API_BASENAME = `${scheme}://${host}:${port}`

class NavbarComponent extends React.Component {
  render() {
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
              <Link to='/games'>Games</Link>
              <Link to='/players'>Players</Link>
            </ul>
            <ul className='nav navbar-nav navbar-right'>
              <DropDown icons={[
                  <span className="glyphicon glyphicon-plus"></span>,
                  <span className="caret"></span>
                ]}>
                <button>New Score</button>
                <Link to="/new/game">New Game</Link>
                <button>New Trial</button>
                <button>New Challange</button>
              </DropDown>
              <DropDown icons={[
                  <span className="caret"></span>,
                  <FluxComponent connectToStores={{
                      api: store => {
                        const activeUser = store.getActiveUser()
                        return {
                          url: activeUser && activeUser.avatarURL,
                        }
                      }
                  }}>
                    <Avatar height={20} width={20} />
                  </FluxComponent>
                ]}>
                <Link to="/settings">Settings</Link>
                <Logout />
              </DropDown>
            </ul>
            <ul className='nav navbar-nav pull-right login'>
                <li><Login text='Sign In with Google' type='google' /></li>
                <li><Login text='Sign In with Facebook' type='facebook' /></li>
            </ul>
        </div>
      </nav>
    );
  }
}

NavbarComponent.displayName = 'NavbarNavbarComponent';

// Uncomment properties you need
// NavbarComponent.propTypes = {};
// NavbarComponent.contextTypes = {}
// NavbarComponent.defaultProps = {};

export default NavbarComponent;

