/*
 * Retro Game Night
 * Copyright (c) 2015 Sasha Fahrenkopf, Cameron White
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react' // eslint-disable-line no-unused-vars
import flux from '../../flux/flux'
import FluxComponent from 'flummox/component'
import _ from 'underscore'
import ObjectTable from '../ObjectTable'
import Page from '../Page'

export default class GamePage extends React.Component {
  render() {
    return (
      <FluxComponent
        connectToStores={['api']}
        stateGetter={([api]) => {
          const { params } = this.props
          const game = api.getGame(params.id)
          const trials = game ? api.getTrialsForGame(game.name) : []
          return {
            game,
            trials,
          }
        }}
      >
        <GamePageInner {...this.props} />
      </FluxComponent>
    )
  }
}

class GamePageInner extends React.Component {
  componentWillMount() {
    flux.getActions('api').getGame(this.props.params.id)
    flux.getActions('api').getTrials()
  }
  render() {
    const { trials } = this.props
    const trialGrids = _.chain(trials)
      .map(each => <ObjectTable object={each} />)
      .value()
    return (
      <Page>
        <h1>Game Page</h1>
        <h2>Trials</h2>
        { trialGrids }
      </Page>
    )
  }
}
