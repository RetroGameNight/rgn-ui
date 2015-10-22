'use strict';

import React from 'react';
import LatestChallenges from './LatestChallengesComponent'
import LatestScores from './LatestScoresComponent'
import TopPlayers from './TopPlayersComponent'

require('styles/scoreboard/ScoreBoard.sass');

class ScoreBoardComponent extends React.Component {
  render() {
    return (
      <div className="scoreboard-component">
        <TopPlayers />
        <LatestChallenges />
        <LatestScores />
      </div>
    );
  }
}

ScoreBoardComponent.displayName = 'ScoreboardScoreBoardComponent';

// Uncomment properties you need
// ScoreBoardComponent.propTypes = {};
// ScoreBoardComponent.defaultProps = {};


export default ScoreBoardComponent;
