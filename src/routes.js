/*
 * Retro Game Night
 * Copyright (c) 2015 Sasha Fahrenkopf, Cameron White
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
import React from 'react' // eslint-disable-line no-unused-vars
import App from './components/App'
import NotFound from './components/NotFound'
import ChallengePage from './components/ChallengePage'
import ChallengesPage from './components/ChallengesPage'
import EventPage from './components/EventPage'
import EventsPage from './components/EventsPage'
import GamePage from './components/GamePage'
import GamesPage from './components/GamesPage'
import PlayerPage from './components/PlayerPage'
import PlayersPage from './components/PlayersPage'
import Main from './components/Main'
import { Route, NotFoundRoute, DefaultRoute } from 'react-router'

const routes = (
  <Route name='app' handler={App} path='/'>
    <DefaultRoute handler={Main} />
    <Route name='_=_' handler={Main}/>
    <Route name='player' path='player/:id' handler={PlayerPage}/>
    <Route name='players' handler={PlayersPage} />
    <Route name='game' path='game/:id' handler={GamePage} />
    <Route name='games' handler={GamesPage} />
    <Route name='challenge' path='challenge/:id' handler={ChallengePage}/>
    <Route name='challenges' handler={ChallengesPage} />
    <Route name='event' path='event/:id' handler={EventPage} />
    <Route name='events' handler={EventsPage} />
    <NotFoundRoute handler={NotFound} />
  </Route>
)

export default routes
