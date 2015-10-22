'use strict';

import React from 'react';
import Page from '../PageComponent'

require('styles/game/GamesPage.sass');

class GamesPageComponent extends React.Component {
  render() {
    return (
      <Page>
        <div className="gamespage-component">
          Please edit src/components/game//GamesPageComponent.js to update this component!
        </div>
      </Page>
    );
  }
}

GamesPageComponent.displayName = 'GameGamesPageComponent';

// Uncomment properties you need
// GamesPageComponent.propTypes = {};
// GamesPageComponent.defaultProps = {};


export default GamesPageComponent;
