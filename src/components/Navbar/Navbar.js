/*
 * Retro Game Night
 * Copyright (c) 2015 Sasha Fahrenkopf, ... add your name
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import './Navbar.less';
import React from 'react'; // eslint-disable-line no-unused-vars
import { Link } from 'react-router';
import flux from '../../flux/flux'
import FluxComponent from 'flummox/component';
import SideMenu from '../SideMenu';


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
    return (
      <div className="navigation header">
        <div className="left-panel">
 
          <a onClick={this.toggleMenu} className="menu-toggle text-center">
            <span className="glyphicon glyphicon-menu-hamburger"></span>
          </a>
        </div>
        <div className="main-panel clearfix">
          <Link to="app" className="navbar-brand">
            <img src={require('./logo-small.png')} width="300" height="35" alt="Retro Game Night" />
          </Link>
        </div>
        <hr/>
        <SideMenu visibility={this.state.isVisible} user={this.props.activeUser} />
      </div>
    );
  }
}
