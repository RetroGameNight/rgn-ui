/*
 * Retro Game Night
 * Copyright (c) 2015 Sasha Fahrenkopf, ... add your name
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import './PlayersPage.less'
import React from 'react'
import flux from '../../flux/flux'
import FluxComponent from 'flummox/component'
import _ from 'underscore'
import { Link } from 'react-router'
import Page from '../Page'
import ChallengeButton from '../ChallengeButton'

export default class PlayersPage extends React.Component {
  componentDidMount() {
    flux.getActions('api').getUsers()
  }
  render() {
    return (
      <FluxComponent connectToStores={['api']}>
        <PlayersPageInner {...this.props} />
      </FluxComponent> 
    )
  }
}

class PlayersPageInner extends React.Component {
  // Seperates the players into two halves and displays them 
  // in their according columns
  // TODO:  Test with more player data!
  render() {
    const players = _.chain(this.props.users)
      .map(each => <Player player={each} />)
    var sets = _.chain(players)
              .groupBy(players, (each, index) => {return Math.floor(index/2)})
              .toArray()
              .value()
    return (
      <Page>
        <div className="row">
          <div className="col-xs-6">{ sets[0] }</div>
        </div>
        <div className="row">
          <div className="col-xs-6">{ sets[1] }</div>
        </div>
      </Page>
    )
  }
}

class Player extends React.Component {
  render() {
    const player = this.props.player
    return (
      <div className="row">
        <div className="player media">
          <div className="col-xs-12 col-md-2">
            <img src={player.avatarUrl} height="50" width="50" />
          </div>
          <div className="col-xs-12 col-md-5">
            <Link to="player" params={{ id: player.id }}>
              <h4 className="">{player.name}</h4>
            </Link>
            <h5>{player.email}</h5>
          </div>
          <div className="col-xs-12 col-md-5">
            <ChallengeButton btnText="Challenge" />
          </div>
        </div>
      </div>
    )
  }
}
