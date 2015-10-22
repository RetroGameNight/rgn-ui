'use strict';

import React from 'react';
import Page from '../PageComponent'

require('styles/player/PlayerPage.sass');

class PlayerPageComponent extends React.Component {
  render() {
    return (
      <Page>
        <div className="playerpage-component">
          Please edit src/components/player//PlayerPageComponent.js to update this component!
        </div>
      </Page>
    );
  }
}

PlayerPageComponent.displayName = 'PlayerPlayerPageComponent';

// Uncomment properties you need
// PlayerPageComponent.propTypes = {};
// PlayerPageComponent.defaultProps = {};


export default PlayerPageComponent;
