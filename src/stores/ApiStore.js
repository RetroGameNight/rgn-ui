import { Store } from 'flummox'
import _ from 'underscore'

const API_BASENAME = "http://localhost:3000"
const DEFAULT_STATE = {
  activeUser: null,
  users: [],
  games: [],
  events: [],
  challenges: [],
  scores: [],
}

export default class ApiStore extends Store {
  constructor(flux) {super();

    const apiActions = flux.getActions('api');
    this.registerAsync(apiActions.login, null, this.handleLogin, null);
    this.registerAsync(apiActions.logout, null, this.handleLogout, null);
    this.registerAsync(apiActions.getGame, null, this.handleGetGame, null);
    this.registerAsync(apiActions.getGames, null, this.handleGetGames, null);
    this.registerAsync(apiActions.newGame, null, this.handleNewGame, null);
    this.registerAsync(apiActions.deleteGame, null, this.handleDeleteGame, null);
    this.registerAsync(apiActions.updateGame, null, this.handleUpdateGame, null);
    this.registerAsync(apiActions.getEvent, null, this.handleGetEvent, null);
    this.registerAsync(apiActions.getEvents, null, this.handleGetEvents, null);
    this.registerAsync(apiActions.newEvent, null, this.handleNewEvent, null);
    this.registerAsync(apiActions.deleteEvent, null, this.handleDeleteEvent, null);
    this.registerAsync(apiActions.getChallenge, null, this.handleGetChallenge, null);
    this.registerAsync(apiActions.getChallenges, null, this.handleGetChallenges, null);
    this.registerAsync(apiActions.newChallenge, null, this.handleNewChallenge, null);
    this.registerAsync(apiActions.deleteChallenge, null, this.handleDeleteChallenge, null);
    this.registerAsync(apiActions.getUser, null, this.handleGetUser, null);
    this.registerAsync(apiActions.getUsers, null, this.handleGetUsers, null);
    this.registerAsync(apiActions.deleteUser, null, this.handleDeleteUser, null);

    this.state = DEFAULT_STATE
  }
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
    this.removeOneById(id, "games")
  }
  handleUpdateGame(game) {
    this.setOne(game, "games")
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
    this.removeOneById(id, "challenges")
  }
  handleGetUser(user) {
    this.setOne(user, 'users')
  }
  handleGetUsers(users) {
    this.setMany(users, 'users')
  }
  handleDeleteUser(id) {
    this.removeOneById(id, "users")
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
  handleDeleteEvent(id) {
    this.removeOneById(id, "events")
  }
  setOne(object, into) {
    this.setState((state, currentProps) => {
      const previous = state[into]
      const newState = _.contains(previous, object) ? previous : previous.concat([object])
      return { 
        [into]: newState
      }
    })
  }
  setMany(objects, into) {
    this.setState({
      [into]: objects
    })
  }
  removeOneById(id, into) {
    const object = this.state[into].find((each) => {
      return each && each.id == id
    })
    this.setState((state, currentProps) => {
      const previous = state[into]
      const newState = _.without(previous, object)
      return { 
        [into]: newState
      }
    })
  }
}
