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
import Page from '../Page'
import { Link } from 'react-router'
import Grid from '../Grid'
import Radium from 'radium'

export default class GamesPage extends React.Component {
  componentDidMount() {
    flux.getActions('api').getGames()
  }
  render() {
    return (
      <FluxComponent connectToStores={['api']}>
        <GamesPageInner {...this.props} />
      </FluxComponent>
    )
  }
}

class GamesPageInner extends React.Component {
  newGame() {
    flux.getActions('api').newGame({})
  }
  render() {
    const games = _.chain(this.props.games)
        .map(each => <Game game={each} />)
    return (
      <Page>
        <Grid>{ games }</Grid>
      </Page>
    )
  }
}

class DeleteButton extends React.Component {
  handleClick = () => {
    flux.getActions('api').deleteGame(this.props.id)
  }
  render() {
    return (
      <button className="btn btn-danger"
              onClick={this.handleClick}>
        Delete
      </button>
    )
  }
}

@Radium
class Game extends React.Component {
  render() {
    const game = this.props.game
    return (
      <div className="panel panel-default"
           key="container"
           style={{
             'marginRight': 10,
           }}
      >
        <div className="panel-body">
          <Link to="game" params={{ id: game.id }}>
            <span style={
              {
                'fontSize': 260,
                'paddingLeft': 260,
                'background': 'url(http://placekitten.com/g/400/278)',
                '@media (min-width: 721px)': {
                  'fontSize': 240,
                  'paddingLeft': 240,
                },
                '@media (min-width: 921px)': {
                  'fontSize': 180,
                  'paddingLeft': 180,
                }
              }
            }>&nbsp;</span>
            <h4>{`${game.name}`}</h4>
            <h5>{`${game.system}`}</h5>
          </Link>
        </div>
      </div>
    )
  }
}
