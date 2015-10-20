/*
 * Retro Game Night
 * Copyright (c) 2015 Sasha Fahrenkopf, Cameron White
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

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
