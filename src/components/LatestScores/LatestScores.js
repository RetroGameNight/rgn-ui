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

export default class LatestScores extends React.Component {
  render() {
    return (
      <FluxComponent connectToStores={['api']}>
        <LatestScoresInner {...this.props} />
      </FluxComponent>
    )
  }
}

class LatestScoresInner extends React.Component {
  render() {
    const headers = ['Player', 'Game', 'Challenge', 'Result']
    return (
      <Table headers={headers}/>
    )
  }
}
