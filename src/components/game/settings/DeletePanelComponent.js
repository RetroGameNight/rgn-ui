'use strict';

import React from 'react';

require('styles/game/settings/DeletePanel.sass');

class DeletePanelComponent extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    const { flux, router } = this.context
    const { game } = this.props
    const { id } = game
    flux.getActions('api').deleteGame(id)
    router.transitionTo('/games')
  }
  render() {
    return (
      <div className="panel panel-danger">
        <div className="panel-heading">Delete Game</div>
          <div className="panel-body">
            <p>Danger! This cannot be undone!</p>
            <button className="btn btn-danger" onClick={this.handleClick}>Delete</button>
          </div>
      </div>
    )
  }
}

DeletePanelComponent.displayName = 'GameSettingsDeletePanelComponent';

// Uncomment properties you need
DeletePanelComponent.propTypes = {
  game: React.PropTypes.object.isRequired,
}
// DeletePanelComponent.defaultProps = {};
DeletePanelComponent.contextTypes = {
  flux: React.PropTypes.object.isRequired,
  router: React.PropTypes.func.isRequired,
}


export default DeletePanelComponent;
