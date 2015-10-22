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
/*
import NotFound from './components/NotFound'
import ChallengePage from './components/ChallengePage'
import ChallengesPage from './components/ChallengesPage'
import EventPage from './components/EventPage'
import EventsPage from './components/EventsPage'
import GamePage from './components/GamePage'
import GamesPage from './components/GamesPage'
import PlayerPage from './components/PlayerPage'
import PlayersPage from './components/PlayersPage'
import UserSettingsPage from './components/UserSettingsPage'
import GameCreationPage from './components/GameCreationPage'
*/
import { Route, NotFoundRoute, DefaultRoute } from 'react-router'

const routes = (
  <Route name='app' handler={App} path='/'>
    <DefaultRoute handler={ScoreBoard} />
  </Route>
)

export default routes
