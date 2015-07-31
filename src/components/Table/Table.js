/*
 * Retro Game Night
 * Copyright (c) 2015 Sasha Fahrenkopf, Cameron White
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
import React from 'react';
import FluxComponent from 'flummox/component'
import _ from 'underscore'

export default class Table extends React.Component {
  render() {
    return (
      <FluxComponent connectToStores={['api']}>
        <TableInner {...this.props} />
      </FluxComponent> 
    )
  }
}


class TableInner extends React.Component {
  render() {
    return (
      <table className="table table-striped">
        <TableHeaders headers={this.props.headers} />
        <tbody></tbody>
      </table>
    )
  }
}


class TableHeaders extends React.Component {
  render() {
    const headers = this.props.headers
    var tags = _.map(headers, (th) => { return (<th>{th}</th>) } )
    if(headers === undefined ) {
      return null
    }
    return (
      <thead>{tags}</thead>
    )
  }
}
