'use strict';

import React from 'react'
import Page from '../PageComponent'

require('styles/game/GamePage.sass');

class GamePageComponent extends React.Component {
  render() {
    return (
      <Page>
        <div className="gamepage-component">
          Please edit src/components/game//GamePageComponent.js to update this component!
        </div>
      </Page> 
    );
  }
}

GamePageComponent.displayName = 'GameGamePageComponent';

// Uncomment properties you need
// GamePageComponent.propTypes = {};
// GamePageComponent.defaultProps = {};


export default GamePageComponent;
