'use strict';

import React from 'react';

require('styles/game/GamePageHeader.sass');

const styles = {
  gameImage: {
    width: 200,
    height: 139,
    background: 'url(http://placekitten.com/g/200/139)',
    display: 'inline-block',
  },
  gameHeader: {
    display: 'inline-block',
    marginLeft: 10,
  }
}

class GamePageHeaderComponent extends React.Component {
  render() {
    const { game } = this.props
    return (
      <div>
        <div style={ styles.gameImage } />
        <div style={ styles.gameHeader } >
          <h2>{game && game.name}</h2>
          <h3>{game && game.system}</h3>
        </div>
      </div>
    );
  }
}

GamePageHeaderComponent.displayName = 'GameGamePageHeaderComponent';

// Uncomment properties you need
// GamePageHeaderComponent.propTypes = {};
// GamePageHeaderComponent.defaultProps = {};


export default GamePageHeaderComponent;
