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
import Avatar from '../Avatar'

export default class PlayerPage extends React.Component {
  render() {
    return (
      <FluxComponent connectToStores={{
        api: store => ({
          player: store.getUser(this.props.params.id),
        }),
      }}>
        <PlayerPageInner {...this.props} />
      </FluxComponent>
    )
  }
}

class PlayerPageInner extends React.Component {
  componentDidMount() {
    flux.getActions('api').getUser(this.props.params.id)
  }
  render() {
    const { player } = this.props
    return (
      <Page>
        <div className="panel panel-default" 
             style={{ width: 230 }}>
          <div className="panel-body">
            <Avatar url={player ? player.avatarUrl : undefined }
                    height={300} width={200} />
            <h4 className="media-heading">{player ? player.name : ''}</h4>
            {player ? player.email : ''}
          </div>
        </div>
      </Page>
    )
  }
}
