/*
 * Retro Game Night
 * Copyright (c) 2015 Sasha Fahrenkopf, Cameron White
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import './Main.less'
import React from 'react'
import FluxComponent from 'flummox/component'
import LatestScores from '../LatestScores/LatestScores'
import LatestChallenges from '../LatestChallenges/LatestChallenges'
import TopPlayers from '../TopPlayers/TopPlayers'

export default class Main extends React.Component {
  render() {
    return (
      <FluxComponent connectToStores={['api']}>
        <MainInner {...this.props} />
      </FluxComponent>
    )
  }
}

class MainInner extends React.Component {
// Main constructs the default page for the site. All Bootstrap grid classes
// (columns and rows) should be kept in the Main component.
  render() {
    return (
      <div>
        <div className="col-xs-12 col-md-8">
          <h3>Latest Scores</h3>
          <LatestScores />
        </div>
        <div className="hidden-xs col-md-4">
          <h3>Top Players</h3>
          <TopPlayers />
          <h3>Latest Challenges</h3>
          <LatestChallenges />
        </div>
      </div>
    )
  }
}

