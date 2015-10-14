/*
 * Retro Game Night
 * Copyright (c) 2015 Sasha Fahrenkopf, Cameron White
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { Store } from 'flummox'
import _ from 'lodash'

const DEFAULT_STATE = {
  activeUser: null,
  users: [],
  games: [],
  events: [],
  challenges: [],
  trials: [],
  scores: [],
}

export default class ApiStore extends Store {
  constructor(flux) {super()

    const apiActions = flux.getActions('api')
    this.registerAsync(apiActions.login, null, this.handleLogin, null)
    this.registerAsync(apiActions.logout, null, this.handleLogout, null)
    this.registerAsync(apiActions.getGame, null, this.handleGetGame, null)
    this.registerAsync(apiActions.getGames, null, this.handleGetGames, null)
    this.registerAsync(apiActions.newGame, null, this.handleNewGame, null)
    this.registerAsync(apiActions.deleteGame, null, this.handleDeleteGame, null)
    this.registerAsync(apiActions.updateGame, null, this.handleUpdateGame, null)
    this.registerAsync(apiActions.getEvent, null, this.handleGetEvent, null)
    this.registerAsync(apiActions.getEvents, null, this.handleGetEvents, null)
    this.registerAsync(apiActions.newEvent, null, this.handleNewEvent, null)
    this.registerAsync(apiActions.deleteEvent, null, this.handleDeleteEvent, null)
    this.registerAsync(apiActions.updateEvent, null, this.handleUpdateEvent, null)
    this.registerAsync(apiActions.getChallenge, null, this.handleGetChallenge, null)
    this.registerAsync(apiActions.getChallenges, null, this.handleGetChallenges, null)
    this.registerAsync(apiActions.newChallenge, null, this.handleNewChallenge, null)
    this.registerAsync(apiActions.deleteChallenge, null, this.handleDeleteChallenge, null)
    this.registerAsync(apiActions.updateChallenge, null, this.handleUpdateChallenge, null)
    this.registerAsync(apiActions.getTrial, null, this.handleGetTrial, null)
    this.registerAsync(apiActions.getTrials, null, this.handleGetTrials, null)
    this.registerAsync(apiActions.newTrial, null, this.handleNewTrial, null)
    this.registerAsync(apiActions.deleteTrial, null, this.handleDeleteTrial, null)
    this.registerAsync(apiActions.updateTrial, null, this.handleUpdateTrial, null)
    this.registerAsync(apiActions.getUser, null, this.handleGetUser, null)
    this.registerAsync(apiActions.getUsers, null, this.handleGetUsers, null)
    this.registerAsync(apiActions.deleteUser, null, this.handleDeleteUser, null)
    this.registerAsync(apiActions.updateUser, null, this.handleUpdateUser, null)

    this.state = DEFAULT_STATE
  }
  /*
   * Getters
   */
  getGame(id) {
    return _.find(this.state.games, { id })
  }
  getEvent(id) {
    return _.find(this.state.events, { id })
  }
  getChallenge(id) {
    return _.find(this.state.challenges, { id })
  }
  getTrail(id) {
    return _.find(this.state.trials, { id })
  }
  getTrialsForGame(gameName) {
    return _.filter(this.state.trials, { game: gameName })
  }
  getUser(id) {
    return _.find(this.state.users, { id })
  }
  getActiveUser() {
    return this.state.activeUser
  }
  isLoggedIn() {
    return !!this.state.activeUser
  }
  /*
   * Handlers
   */
  handleLogin(user) {
    this.setState({
      activeUser: user
    })
  }
  handleLogout() {
    this.replaceState(DEFAULT_STATE)
  }
  handleGetGame(game) {
    this.setOne(game, 'games')
  }
  handleGetGames(games) {
    this.setMany(games, 'games')
  }
  handleNewGame(game) {
    this.setOne(game, 'games')
  }
  handleDeleteGame(id) {
    this.removeOneById(id, 'games')
  }
  handleUpdateGame(game) {
    this.replaceOne(game, 'games')
  }
  handleGetChallenge(challenge) {
    this.setOne(challenge, 'challenges')
  }
  handleGetChallenges(challenges) {
    this.setMany(challenges, 'challenges')
  }
  handleNewChallenge(challenge) {
    this.setOne(challenge, 'challenges')
  }
  handleDeleteChallenge(id) {
    this.removeOneById(id, 'challenges')
  }
  handleUpdateChallenge(challenge) {
    this.replaceOne(challenge, 'challenges')
  }
  handleGetTrial(challenge) {
    this.setOne(challenge, 'trials')
  }
  handleGetTrials(challenges) {
    this.setMany(challenges, 'trials')
  }
  handleNewTrial(challenge) {
    this.setOne(challenge, 'trials')
  }
  handleDeleteTrial(id) {
    this.removeOneById(id, 'trials')
  }
  handleUpdateChallenge(challenge) {
    this.replaceOne(challenge, 'challenges')
  }
  handleGetUser(user) {
    this.setOne(user, 'users')
  }
  handleGetUsers(users) {
    this.setMany(users, 'users')
  }
  handleDeleteUser(id) {
    this.removeOneById(id, 'users')
  }
  handleUpdateUser(user) {
    this.replaceOne(user, 'users')
  }
  handleGetEvent(event) {
    this.setOne(event, 'events')
  }
  handleGetEvents(events) {
    this.setMany(events, 'events')
  }
  handleNewEvent(event) {
    this.setOne(event, 'events')
  }
  handleUpdateEvent(event) {
    this.replaceOne(event, 'events')
  }
  handleDeleteEvent(id) {
    this.removeOneById(id, 'events')
  }
  setOne(object, into) {
    this.setState(state => {
      const previous = state[into]
      const newState = _.contains(previous, object) ? previous : previous.concat([object])
      return {
        [into]: newState
      }
    })
  }
  /*
   * Helpers
   */
  setMany(objects, into) {
    this.setState({
      [into]: objects
    })
  }
  replaceOne(object, into) {
    this.setState(state => {
      const previous = state[into]
      const oldObject = this.state[into].find((each) => {
        return each && each.id === object.id
      })
      const newState = _.without(previous, oldObject).concat([object])
      return {
        [into]: newState
      }
    })
  }
  removeOneById(id, into) {
    const object = this.state[into].find((each) => {
      return each && each.id === id
    })
    this.setState(state => {
      const previous = state[into]
      const newState = _.without(previous, object)
      return {
        [into]: newState
      }
    })
  }
}
