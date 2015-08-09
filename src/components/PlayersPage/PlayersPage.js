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
import Avatar from '../Avatar'

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
  render() {
    const players = _.chain(this.props.users)
      .map(each => <Player player={each} />)
    return (
      <Page>
        <div className="row">
          <div className="col-xs-6">{ players }</div>
        </div>
      </Page>
    )
  }
}

class Player extends React.Component {
  render() {
    const player = this.props.player
    const avatarUrl = player ? player.avatarUrl : ''
    return (
        <div className="panel panel-default">
          <div className="panel-body">
            <div className="col-xs-12 col-md-8">
              <div className="avatar">
              <Avatar url={avatarUrl}
                      linkTo='player'
                      linkParams={{id: player ? player.id : ''}}/>
              </div>
              <div className="player-info">
              <Link to="player" params={{ id: player.id }}>
                <h4>{player.name}</h4>
              </Link>
              <h5>{player.email}</h5>
              </div>
            </div>
            <div className="col-xs-12 col-md-4">
              <div style={{'height': 40 + 'px', 'paddingTop': 10 + 'px'}}>
              <ChallengeButton btnText="Challenge"/>
              </div>
            </div>
          </div>
        </div>
    )
  }
}
