'use strict';

import React from 'react';
import Panel from './GamePanelComponent'

require('styles/game/GamesPageGrid.sass');

class GamesPageGridComponent extends React.Component {
  render() {
    const { games } = this.props
    const panels = games.map(eachGame => <Panel {...eachGame}/>)
    return (
      <div className="gamespagegrid-component">
        {panels}
      </div>
    );
  }
}

GamesPageGridComponent.displayName = 'GameGamesPageGridComponent';

// Uncomment properties you need
GamesPageGridComponent.propTypes = {
  games: React.PropTypes.array.isRequired, 
}
GamesPageGridComponent.defaultProps = {
  games: [],
}


export default GamesPageGridComponent;
