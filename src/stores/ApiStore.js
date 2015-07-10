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
    this.register(apiActions.login, this.handleLogin);
    this.register(apiActions.logout, this.handleLogout);
    this.register(apiActions.getGame, this.handleGetGame);
    this.register(apiActions.getGames, this.handleGetGames);
    this.register(apiActions.getEvent, this.handleGetEvent);
    this.register(apiActions.getEvents, this.handleGetEvents);
    this.register(apiActions.getChallenge, this.handleGetChallenge);
    this.register(apiActions.getChallenges, this.handleGetChallenges);
    this.register(apiActions.getUser, this.handleGetUser);
    this.register(apiActions.getUsers, this.handleGetUsers);

    this.state = DEFAULT_STATE
  }
  handleLogin() {
    fetch(API_BASENAME+'/logged-in', {
        credentials: 'include' 
      })
      .then((response) => {
        return response.json()
      })  
      .then((json) => {
        this.setState({
          activeUser: json
        })
      })  
      .catch((error) => {  
        console.log('error', error)
      });
  }
  handleLogout() {
    fetch(API_BASENAME+'/logout', {
        credentials: 'include'    
      })
      .then((response) => {
        this.replaceState(DEFAULT_STATE)
      })  
      .catch((error) => {  
        console.log('error', error)
      });
  }
  handleGetGame(id) {
    this.fetchOne('/games/'+id, 'games')
  }
  handleGetGames() {
    this.fetchMany('/games/all', 'games')
  }
  handleGetChallenge(id) {
    this.fetchOne('/challenges/'+id, 'challenges')
  }
  handleGetChallenges() {
    this.fetchMany('/challenges/all', 'challenges')
  }
  handleGetUser(id) {
    this.fetchOne('/users/'+id, 'users')
  }
  handleGetUsers() {
    this.fetchMany('/users/all', 'users')
  }
  handleGetEvent(id) {
    this.fetchOne('/events/'+id, 'events')
  }
  handleGetEvents() {
    this.fetchMany('/events/all', 'events')
  }
  fetchOne(resource, into) {
    fetch(API_BASENAME+resource, {
        credentials: 'include'    
      })
      .then((response) => {
        return response.json()
      })  
      .then((json) => {
        this.setState((previousState, currentProps) => {
          return { 
            [into]: _.extend(previousState[into], { [json.id]: json }) 
          }
        })
      })  
      .catch((error) => {  
        console.log('error', error)
      });
  }
  fetchMany(resource, into) {
    fetch(API_BASENAME+resource, {
        credentials: 'include'    
      })
      .then((response) => {
        return response.json()
      })  
      .then((json) => {
        this.setState({
          [into]: _.chain(json)
            .map((each) => { 
              return [each.id, each] 
            })
            .object()
        })
      })  
      .catch((error) => {  
        console.log('error', error)
      });
  }
}
