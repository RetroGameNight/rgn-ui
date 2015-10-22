'use strict';

import React from 'react';
import Page from '../PageComponent'

require('styles/game/NewGamePage.sass');

class NewGamePageComponent extends React.Component {
  render() {
    return (
      <Page>
        <div className="newgamepage-component">
          Please edit src/components/game//NewGamePageComponent.js to update this component!
        </div>
      </Page>
    );
  }
}

NewGamePageComponent.displayName = 'GameNewGamePageComponent';

// Uncomment properties you need
// NewGamePageComponent.propTypes = {};
// NewGamePageComponent.defaultProps = {};


export default NewGamePageComponent;
