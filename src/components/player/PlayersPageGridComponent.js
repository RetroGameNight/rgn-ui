'use strict';

import React from 'react';
import Panel from './PlayerPanelComponent'

require('styles/player/PlayersPageGrid.sass');

class PlayersPageGridComponent extends React.Component {
  render() {
    const { players } = this.props
    const panels = players.map(eachPlayer => <Panel {...eachPlayer} />)
    return (
      <div className="playerspagegrid-component">
        {panels}
      </div>
    );
  }
}

PlayersPageGridComponent.displayName = 'PlayerPlayersPageGridComponent';

// Uncomment properties you need
PlayersPageGridComponent.propTypes = {
  players: React.PropTypes.array.isRequired,  
}
PlayersPageGridComponent.defaultProps = {
  players: [],
}


export default PlayersPageGridComponent;
