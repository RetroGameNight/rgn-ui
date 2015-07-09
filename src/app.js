/*
 * React.js Starter Kit
 * Copyright (c) 2014 Konstantin Tarkus (@koistya), KriaSoft LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
import React from 'react';
import App from './components/App';
import NotFound from './components/NotFound'
import ChallangePage from './components/ChallangePage'
import ChallangesPage from './components/ChallangesPage'
import EventPage from './components/EventPage'
import EventsPage from './components/EventsPage'
import GamePage from './components/GamePage'
import GamesPage from './components/GamesPage'
import PlayerPage from './components/PlayerPage'
import PlayersPage from './components/PlayersPage'
import Router, { Route, NotFoundRoute, DefaultRoute } from 'react-router';

const mountNode = document.getElementById('app');

const routes = (
  <Route name='app' handler={App} path='/'>
    <DefaultRoute handler={EventsPage} />
    <Route name='player' path='player/:id' handler={PlayerPage}/>
    <Route name='players' handler={PlayersPage} />
    <Route name='game' path='game/:id' handler={GamePage} />
    <Route name='games' handler={GamesPage} />
    <Route name='challange' path='challange/:id' handler={ChallangePage}/>
    <Route name='challanges' handler={ChallangesPage} />
    <Route name='event' path='event/:id' handler={EventPage} />
    <Route name='events' handler={EventsPage} />
    <NotFoundRoute handler={NotFound} />
  </Route>
);

Router.run(routes, (Handler, state) => {
  const params = state.params;
  React.render(<Handler params={params}/>, mountNode);
});
