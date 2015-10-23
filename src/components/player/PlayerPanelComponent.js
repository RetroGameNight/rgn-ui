'use strict';

import React from 'react';
import { Link } from 'react-router'
import Avatar from '../AvatarComponent'

require('styles/player/PlayerPanel.sass');

class PlayerPanelComponent extends React.Component {
  render() {
    const { id, name, email, avatarUrl } = this.props
    return (
      <div className="panel panel-default">
        <div className="panel-body">
          <Link to={`/player/${id}`}>
            <Avatar url={avatarUrl} linkTo={`/player/${id}`} />
            <h4>{name}</h4>
            <h5>{email}</h5>
          </Link>
        </div>
      </div>
    )
  }
}

PlayerPanelComponent.displayName = 'PlayerPlayerPanelComponent';

// Uncomment properties you need
PlayerPanelComponent.propTypes = {
  id: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  email: React.PropTypes.string.isRequired,
  avatarUrl: React.PropTypes.string,
}
PlayerPanelComponent.defaultProps = {
  id: 'abc123',
  name: 'Example Name',
  email: 'example@example.com',
}


export default PlayerPanelComponent;
