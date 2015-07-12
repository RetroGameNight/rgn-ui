import { Flummox } from 'flummox';
import ApiActions from './actions/ApiActions'
import ApiStore from './stores/ApiStore'

class Flux extends Flummox {
  constructor() {
    super();

    // activeUser
    this.createActions('api', ApiActions);
    this.createStore('api', ApiStore, this);
  }
}

const flux = new Flux();

export default flux