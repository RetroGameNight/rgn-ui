import { Store } from 'flummox'
import _ from 'underscore'

const API_BASENAME = "http://localhost:3000"
const DEFAULT_STATE = {
  activeUser: null,
  users: {},
  games: {},
  events: {},
  challenges: {},
  scores: {},
}

export default class ApiStore extends Store {
  constructor(flux) {
    super();

    const apiActions = flux.getActions('api');
    this.registerAsync(apiActions.login, null, this.handleLogin, null);
    this.registerAsync(apiActions.logout, null, this.handleLogout, null);
    this.registerAsync(apiActions.getGame, null, this.handleGetGame, null);
    this.registerAsync(apiActions.getGames, null, this.handleGetGames, null);
    this.registerAsync(apiActions.newGame, null, this.handleNewGame, null);
    this.registerAsync(apiActions.getEvent, null, this.handleGetEvent, null);
    this.registerAsync(apiActions.getEvents, null, this.handleGetEvents, null);
    this.registerAsync(apiActions.getChallenge, null, this.handleGetChallenge, null);
    this.registerAsync(apiActions.getChallenges, null, this.handleGetChallenges, null);
    this.registerAsync(apiActions.getUser, null, this.handleGetUser, null);
    this.registerAsync(apiActions.getUsers, null, this.handleGetUsers, null);

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
  handleGetChallenge(challenge) {
    this.setOne(challenge, 'challenges')
  }
  handleGetChallenges(challenges) {
    this.setMany(challenges, 'challenges')
  }
  handleGetUser(user) {
    this.setOne(user, 'users')
  }
  handleGetUsers(users) {
    this.setMany(users, 'users')
  }
  handleGetEvent(event) {
    this.setOne(event, 'events')
  }
  handleGetEvents(events) {
    this.setMany(events, 'events')
  }
  setOne(object, into) {
    this.setState((state, currentProps) => {
      const newState = _.extend(state[into], { [object.id]: object }).value()
      return { 
        [into]: newState
      }
    })
  }
  setMany(objects, into) {
    this.setState({
      [into]: _.chain(objects)
        .map((each) => { 
          return [each.id, each] 
        })
        .object()
    })
  }
}
