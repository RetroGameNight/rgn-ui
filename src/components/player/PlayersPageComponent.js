'use strict';

import React from 'react';
import Page from '../PageComponent'
import PlayersGrid from './PlayersPageGridComponent'
import FluxComponent from 'flummox/component'

require('styles/player/PlayersPage.sass');

class PlayersPageComponent extends React.Component {
  componentDidMount() {
    const { flux } = this.context
    flux.getActions('api').getUsers()
  }
  componentWillUpdate() {
    const { flux } = this.context
    flux.getActions('api').getUsers()
  }
  render() {
    return (
      <Page>
        <FluxComponent connectToStores={{
          api: store => ({
            players: store.getUsers(),
          })
        }}>
          <PlayersGrid />
        </FluxComponent>,
      </Page>
    );
  }
}

PlayersPageComponent.displayName = 'PlayerPlayersPageComponent';

// Uncomment properties you need
// PlayersPageComponent.propTypes = {};
// PlayersPageComponent.defaultProps = {};
PlayersPageComponent.contextTypes = {
  flux: React.PropTypes.object.isRequired,
}


export default PlayersPageComponent;
