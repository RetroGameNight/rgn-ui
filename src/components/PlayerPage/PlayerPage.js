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
import ObjectTable from '../ObjectTable'
import Page from '../Page'

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
        <h1>Player Page</h1>
        <ObjectTable object={player} />
      </Page>
    )
  }
}
