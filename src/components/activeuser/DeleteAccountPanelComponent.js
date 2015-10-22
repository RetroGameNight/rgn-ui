'use strict';

import React from 'react';

require('styles/activeuser/DeleteAccountPanel.sass');

class DeleteAccountPanelComponent extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    flux.getActions('api').deleteActiveUser()
    this.context.router.transitionTo('/')
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

DeleteAccountPanelComponent.displayName = 'ActiveuserDeleteAccountPanelComponent';

// Uncomment properties you need
// DeleteAccountPanelComponent.propTypes = {};
// DeleteAccountPanelComponent.defaultProps = {};
DeleteAccountPanelComponent.propTypes = {
  id: React.PropTypes.string.isRequired
}
DeleteAccountPanelComponent.contextTypes = {
  router: React.PropTypes.func.isRequired
}

export default DeleteAccountPanelComponent;
