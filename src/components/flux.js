/*
 * Retro Game Night
 * Copyright (c) 2015 Sasha Fahrenkopf, Cameron White
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { Flummox } from 'flummox'
import ApiActions from '../actions/api'
import ApiStore from '../stores/api'

class Flux extends Flummox {
  constructor(props) {
    super(props)

    // activeUser
    this.createActions('api', ApiActions)
    this.createStore('api', ApiStore, this)
  }
}

const flux = new Flux()

export default flux
