'use strict';

import React from 'react';
import Page from '../PageComponent'

require('styles/player/PlayersPage.sass');

class PlayersPageComponent extends React.Component {
  render() {
    return (
      <Page>
        <div className="playerspage-component">
          Please edit src/components/player//PlayersPageComponent.js to update this component!
        </div>
      </Page>
    );
  }
}

PlayersPageComponent.displayName = 'PlayerPlayersPageComponent';

// Uncomment properties you need
// PlayersPageComponent.propTypes = {};
// PlayersPageComponent.defaultProps = {};


export default PlayersPageComponent;
