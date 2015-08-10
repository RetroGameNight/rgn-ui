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
import _ from 'lodash'
import Radium from 'Radium'

const styles = {
  gameImage: {
    height: 300,
    width: 300,
    background: 'url(http://placekitten.com/g/200/300)',
    display: 'inline-block',
  },
  gameHeader: {
    display: 'inline-block',
    marginLeft: 10,
  },
  column: {
    verticalAlign: 'top',
    display: 'block',
    '@media (min-width: 993px)': {
      minWidth: '48%',
      display: 'inline-block',
      marginRight: 5,
    },
  }
}

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

@Radium
class GamePageInner extends React.Component {
  componentWillMount() {
    flux.getActions('api').getGame(this.props.params.id)
    flux.getActions('api').getTrials()
  }
  render() {
    const { game, trials } = this.props
    const trialsList = trials.map(each => (
      <li className="list-group-item">{each.name}</li>
    ))
    const feedList = _.times(5, each => (
      <li className="list-group-item">{each}</li>
    ))
    return (
      <Page>
        <div>
            <div style={ styles.gameImage } />
            <div style={ styles.gameHeader } >
              <h4 className="media-heading">{game ? game.name : ''}</h4>
              {game ? game.system : ''}
            </div>
        </div>
        <div>
          <div style={styles.column} key="column1">
            <h2>Trials</h2>
            <ul className="list-group">{trialsList}</ul>
          </div>
          <div style={styles.column} key="column2">
            <h2>Activity Feed</h2>
            <ul className="list-group">{feedList}</ul>
          </div>
        </div>
      </Page>
    )
  }
}
