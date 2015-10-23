'use strict';

import React from 'react';
import { Link } from 'react-router'
import Avatar from '../AvatarComponent'

require('styles/game/GamePanel.sass');

class GamePanelComponent extends React.Component {
  render() {
    const { id, name, system, avatarURL } = this.props
    return (
      <div className="panel panel-default col-sm-6 col-md-4 col-lg-3">
        <div className="panel-body">
          <Link to={`/game/${id}`}>
            <Avatar linkTo={`/game/${id}`} width="200" height="138"/>
            <h4>{name}</h4>
            <h5>{system}</h5>
          </Link>
        </div>
      </div>
    )
  }
}

GamePanelComponent.displayName = 'GameGamePanelComponent';

// Uncomment properties you need
GamePanelComponent.propTypes = {
  id: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  system: React.PropTypes.string.isRequired,
  avatarURL: React.PropTypes.string.isRequired,
}
GamePanelComponent.defaultProps = {
  id: 'abc123',
  name: 'Default name',
  system: 'Default system',
}


export default GamePanelComponent;
