import { Flummox } from 'flummox'
import ApiActions from './api/actions'
import ApiStore from './api/store'

class Flux extends Flummox {
  constructor() {
    super()

    // activeUser
    this.createActions('api', ApiActions)
    this.createStore('api', ApiStore, this)
  }
}

const flux = new Flux()

export default flux
