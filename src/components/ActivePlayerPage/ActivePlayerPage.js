/*
 * Retro Game Night
 * Copyright (c) 2015 Sasha Fahrenkopf, Cameron White
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
import './ActivePlayerPage.less'
import React from 'react'
import FluxComponent from 'flummox/component'
import _ from 'underscore'

export default class ActivePlayerPage extends React.Component {
  render() {
    return (
      <FluxComponent connectToStores={['api']}>
        <ActivePlayerPageInner />
      </FluxComponent>
    )
  }
}

class ActivePlayerPageInner extends React.Component {
  loggedIn() {
    if (this.props.activeUser) {
      return true
    } else {
      return false
    }
  }
  render() {
    let content = []
    if (this.loggedIn()) {
      const rows = _.pairs(this.props.activeUser)
        .map((pair) => {
          return (
            <tr>
              <td>{pair[0]}</td>
              <td>{pair[1]}</td>
            </tr>
          )
        })
      content = (
        <table className="table">
          <tr>
            <th>Key</th>
            <th>Value</th>
          </tr>
          {rows}
        </table>
      )
    } else {
      content = [
        <h2>Not Logged In</h2>
      ]
    }
    return (
      <div>
        <h1>Active Player Page</h1>
        {content}
      </div>
    )
  }
}
