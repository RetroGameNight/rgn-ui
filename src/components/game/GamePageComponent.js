/*
 * Retro Game Night
 * Copyright (c) 2015 Sasha Fahrenkopf, Cameron White
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
'use strict';

import React from 'react'
import Radium from 'radium'
import FluxComponent from 'flummox/component'
import _ from 'lodash'
import Page from '../PageComponent'
import TabNav from '../TabNavComponent'
import GamePageHeader from './GamePageHeaderComponent'

require('styles/game/GamePage.sass');

class GamePageComponent extends React.Component {
  componentDidMount() {
    this.context.flux.getActions('api').getGame(this.props.params.id)
    this.context.flux.getActions('api').getTrials()
  }
  componentWillUpdate() {
    this.context.flux.getActions('api').getGame(this.props.params.id)
    this.context.flux.getActions('api').getTrials()
  }
  render() {
    const { params } = this.props
    const { id } = params
    const tabs = [
      {
        text: 'Default',
        to: `/game/${id}`
      },
      {
        text: 'Trials',
        to: `/game/${id}/trials`
      },
      {
        text: 'Settings',
        to: `/game/${id}/settings`
      } 
    ]
    return (
      <Page>
        <FluxComponent connectToStores={{
            api: store => ({
                game: store.getGame(id),
            })
        }}>
          <GamePageHeader />
          <TabNav tabs={tabs}/>
          {this.props.children}
        </FluxComponent>,
      </Page> 
    );
  }
}

GamePageComponent.displayName = 'GameGamePageComponent';

// Uncomment properties you need
// GamePageComponent.propTypes = {};
GamePageComponent.contextTypes = {
  flux: React.PropTypes.object.isRequired,
};
// GamePageComponent.defaultProps = {};


export default GamePageComponent;
