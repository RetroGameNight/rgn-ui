/*
 * Retro Game Night
 * Copyright (c) 2015 Sasha Fahrenkopf, Cameron White
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
import React from 'react' // eslint-disable-line no-unused-vars
import App from './AppComponent'
import ScoreBoard from './scoreboard/ScoreBoardComponent'
import ActiveUserSettings from './activeuser/ActiveUserSettingsComponent'
import NewGamePage from './game/NewGamePageComponent'
import GamePage from './game/GamePageComponent'
import GameSettings from './game/GameSettingsComponent'
import GameTrials from './game/GameTrialsComponent'
import GamesPage from './game/GamesPageComponent'
import PlayerPage from './player/PlayerPageComponent'
import PlayersPage from './player/PlayersPageComponent'
import { Route, IndexRoute } from 'react-router'

const routes = (
  <Route component={App} path='/'>
    <IndexRoute component={ScoreBoard}/>
    <Route path='player/:id' component={PlayerPage}/>
    <Route path='players' component={PlayersPage} />
    <Route path='game/:id' component={GamePage}>
        <IndexRoute component={GameSettings} />
        <Route path='trials' component={GameTrials} />
        <Route path='settings' component={GameSettings} />
    </Route>
    <Route path='games' component={GamesPage} />
    <Route path='new/game' component={NewGamePage} />
    <Route path='settings' component={ActiveUserSettings} />
  </Route>
)

export default routes
