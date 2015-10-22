'use strict';

import React from 'react';

require('styles/navbar/LogoutButton.sass');

class LogoutButtonComponent extends React.Component {
  constructor(props) {
    super(props)
    this.clickHandler = this.clickHandler.bind(this)
  }
  clickHandler() {
    this.context.flux.getActions('api').logout()
  }
  render() {
    return (
      <a onClick={this.clickHandler}>Logout</a>
    );
  }
}

LogoutButtonComponent.displayName = 'NavbarLogoutButtonComponent';

// Uncomment properties you need
// LogoutButtonComponent.propTypes = {};
// LogoutButtonComponent.defaultProps = {};
LogoutButtonComponent.contextTypes = {
  flux: React.PropTypes.object.isRequired,
}


export default LogoutButtonComponent;
