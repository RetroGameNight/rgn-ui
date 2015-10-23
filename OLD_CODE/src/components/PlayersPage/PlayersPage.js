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
          <div className="col-xs-12">{ players }</div>
        </div>
      </Page>
    )
  }
}

