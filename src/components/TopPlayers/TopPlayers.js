/*
 * Retro Game Night
 * Copyright (c) 2015 Sasha Fahrenkopf, Cameron White
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
import React from 'react'
import FluxComponent from 'flummox/component'
import Table from '../Table/Table'

export default class TopPlayers extends React.Component {
  render() {
    return (
      <FluxComponent connectToStores={['api']}>
        <TopPlayersInner {...this.props} />
      </FluxComponent>
    )
  }
}

class TopPlayersInner extends React.Component {
  render() {
    const headers = ['Rank', 'Player']
    return (
      <Table headers={headers}/>
    )
  }
}
