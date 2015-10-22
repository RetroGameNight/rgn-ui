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
import GamesPage from './game/GamesPageComponent'
import PlayerPage from './player/PlayerPageComponent'
import PlayersPage from './player/PlayersPageComponent'
import { Route, NotFoundRoute, DefaultRoute } from 'react-router'

const routes = (
  <Route name='app' handler={App} path='/'>
    <DefaultRoute handler={ScoreBoard} />
    <Route name='_=_' handler={ScoreBoard}/>
    <Route name='player' path='player/:id' handler={PlayerPage}/>
    <Route name='players' handler={PlayersPage} />
    <Route name='game' path='game/:id' handler={GamePage}>
        <DefaultRoute handler={GameSettings} />
        <Route path='settings' handler={GameSettings} />
    </Route>
    <Route name='games' handler={GamesPage} />
    <Route name='game-new' path='new/game' handler={NewGamePage} />
    <Route name='user-settings' handler={ActiveUserSettings} />
  </Route>
)

export default routes
