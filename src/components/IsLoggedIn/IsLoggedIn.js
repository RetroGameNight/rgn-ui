/*
 * Retro Game Night
 * Copyright (c) 2015 Sasha Fahrenkopf, Cameron White
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
import React from 'react';
import FluxComponent from 'flummox/component'

export default class IsLoggedIn extends React.Component {
  render() {
    return (
      <FluxComponent connectToStores={{
        api: store => ({
          isLoggedIn: store.isLoggedIn(),
        }),
      }}> 
        <IsLoggedInInner {...this.props} />
      </FluxComponent> 
    )
  }
}

class IsLoggedInInner extends React.Component {
  render() {
    if (this.props.isLoggedIn) {
      return this.props.children
    } else {
      return null
    }
  }
}
