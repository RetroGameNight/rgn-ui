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
    flux.getActions('api').login()
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
        <PublicProfilePanel activeUser={activeUser}/>
        <DeleteAccountPanel id={id}/>
      </Page>
    )
  }
}

class PublicProfilePanel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: props.activeUser ? props.activeUser.name : '',
      email: props.activeUser ? props.activeUser.email : '',
    }
  }
  handleChange = (event) => {
    this.setState({[event.target.id]: event.target.value})
  }
  handleClick = () => {
    const { id } = this.props.activeUser
    flux.getActions('api').updateUser(id, this.state)
  }
  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">Public profile</div>
          <div className="panel-body">
            <form>
              <div class="form-group">
                <label for="name">Name</label>
                <input type="text" className="form-control" id="name"
                    onChange={this.handleChange}
                    value={this.state.name}/>
              </div>
              <div class="form-group">
                <label for="email">Email address</label>
                <input type="email" className="form-control" id="email"
                    onChange={this.handleChange}
                    value={this.state.email}/>
              </div>
              <button type="submit" className="btn btn-default"
                  onClick={this.handleClick}>Update</button>
            </form>
          </div>
      </div>
    )
  }
}
PublicProfilePanel.propTypes = {
  activeUser: PropTypes.object.isRequired
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

