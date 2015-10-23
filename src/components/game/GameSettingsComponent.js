'use strict';

import React from 'react';
import DeletePanel from './settings/DeletePanelComponent'

require('styles/game/GameSettings.sass');

class GameSettingsComponent extends React.Component {
  render() {
    return (
      <DeletePanel game={this.props.game} />
    );
  }
}

GameSettingsComponent.displayName = 'GameGameSettingsComponent';

// Uncomment properties you need
// GameSettingsComponent.propTypes = {};
// GameSettingsComponent.defaultProps = {};


export default GameSettingsComponent;
