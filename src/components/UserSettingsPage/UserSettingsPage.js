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
    const { activeUser } = this.props
    const id = activeUser ? activeUser.id : ''
    return (
      <Page>
        <DeleteAccountPanel id={id}/>
      </Page>
    )
  }
}

class DeleteAccountPanel extends React.Component {
  handleClick = () => {
    flux.getActions('api').deleteActiveUser()
    this.context.router.transitionTo('app')
  }
  render() {
    return (
      <div className="panel panel-danger">
        <div className="panel-heading">Delete Account</div>
          <div className="panel-body">
            <p>Danger! This cannot be undone!</p>
            <button className="btn btn-danger" onClick={this.handleClick}>Delete</button>
          </div>
      </div>
    )
  }
}
DeleteAccountPanel.propTypes = {
  id: PropTypes.string.isRequired
}
DeleteAccountPanel.contextTypes = {
  router: PropTypes.func.isRequired
}

