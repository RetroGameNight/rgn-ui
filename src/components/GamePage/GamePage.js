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
    const { game } = this.props
    return (
      <Page>
        <div className="panel panel-default"
             style={{ width: 360 }}>
          <div className="panel-body">
            <span style={
              {
                'fontSize': 260,
                'paddingLeft': 260,
                'background': 'url(http://placekitten.com/g/325/300)',
              }
            }>&nbsp;</span>
            <h4 className="media-heading">{game ? game.name : ''}</h4>
            {game ? game.system : ''}
          </div>
        </div>
      </Page>
    )
  }
}
