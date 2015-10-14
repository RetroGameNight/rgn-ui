/*
 * Retro Game Night
 * Copyright (c) 2015 Sasha Fahrenkopf, Cameron White
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react' // eslint-disable-line no-unused-vars
import flux from '../../flux/flux'
import FluxComponent from 'flummox/component'
import Page from '../Page'
import ObjectTable from '../ObjectTable'

export default class UserSettingsPage extends React.Component {
  componentDidMount() {
    flux.getActions('api').getEvents()
  }
  render() {
    return (
      <FluxComponent connectToStores={{
        api: store => ({
          activeUser: store.getActiveUser(),
        }),
      }}>
        <UserSettingsPageInner {...this.props} />
      </FluxComponent>
    )
  }
}

class UserSettingsPageInner extends React.Component {
  propTypes: {
    activeUser: PropTypes.object.isRequired,
  }
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Page>
        <h1>UserSettingsPage</h1>
        <ObjectTable object={this.props.activeUser} />
      </Page>
    )
  }
}

