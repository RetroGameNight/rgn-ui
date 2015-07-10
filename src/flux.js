import { Flummox } from 'flummox';
import ActiveUserActions from './actions/ActiveUserActions'
import ActiveUserStore from './stores/ActiveUserStore'

class Flux extends Flummox {
  constructor() {
    super();

    // activeUser
    this.createActions('activeUser', ActiveUserActions);
    this.createStore('activeUser', ActiveUserStore, this);
  }
}

const flux = new Flux();

export default flux