'use strict';

import React from 'react';
import config from '../../config'

require('styles/navbar/LoginButton.sass');

const { scheme, host, port } = config.api.location
const API_BASENAME = `${scheme}://${host}:${port}`

class LoginButtonComponent extends React.Component {
  render() {
    const path = this.props.type
    const URL = `${API_BASENAME}/auth/${path}`

    return (
      <a className={this.props.type} href={URL}>
        {this.props.text}
      </a>
    )
  }
}

LoginButtonComponent.displayName = 'NavbarLoginButtonComponent';

// Uncomment properties you need
// LoginButtonComponent.propTypes = {};
// LoginButtonComponent.defaultProps = {};


export default LoginButtonComponent;
