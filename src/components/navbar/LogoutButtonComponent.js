'use strict';

import React from 'react';

require('styles/navbar/LogoutButton.sass');

class LogoutButtonComponent extends React.Component {
  clickHandler() {
    this.context.flux.getActions('api').logout('')
  }
  render() {
    return (
      <button onClick={this.clickHandler}>Logout</button>
    );
  }
}

LogoutButtonComponent.displayName = 'NavbarLogoutButtonComponent';

// Uncomment properties you need
// LogoutButtonComponent.propTypes = {};
// LogoutButtonComponent.defaultProps = {};
LogoutButtonComponent.contextTypes = {
  flux: React.PropTypes.object.isRequired
}


export default LogoutButtonComponent;
