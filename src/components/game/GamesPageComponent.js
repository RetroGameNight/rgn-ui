'use strict';

import React from 'react';
import Page from '../PageComponent'
import GamesGrid from './GamesPageGridComponent'
import FluxComponent from 'flummox/component'

require('styles/game/GamesPage.sass');

class GamesPageComponent extends React.Component {
  componentDidMount() {
    const { flux } = this.context
    flux.getActions('api').getGames()
  }
  componentWillUpdate() {
    const { flux } = this.context
    flux.getActions('api').getGames()
  }
  render() {
    return (
      <Page>
        <FluxComponent connectToStores={{
          api: store => ({
            games: store.getGames(),
          })
        }}>
          <GamesGrid />
        </FluxComponent>,
      </Page>
    );
  }
}

GamesPageComponent.displayName = 'GameGamesPageComponent';

// Uncomment properties you need
// GamesPageComponent.propTypes = {};
// GamesPageComponent.defaultProps = {};
GamesPageComponent.contextTypes = {
  flux: React.PropTypes.object.isRequired,
}

export default GamesPageComponent;
