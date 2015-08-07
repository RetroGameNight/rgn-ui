/*
 * Retro Game Night
 * Copyright (c) 2015 Sasha Fahrenkopf, ... add your name
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
import './GameForm.less'
import flux from '../../flux/flux'
import React, { PropTypes } from 'react'

export default class GameForm extends React.Component {
  static contextTypes = {
    router: React.PropTypes.func.isRequired
  }
  constructor(props) {
    super(props)

    this.state = {
      name: props.game ? props.game.name : '',
      system: props.game ? props.game.system : '',
    }
  }
  handleChange = (event) => {
    this.setState({[event.target.id]: event.target.value})
  }
  handleSubmit = (event) => {
    event.preventDefault()
    if (this.props.game) {
      this.props.flux.getActions('api').updateGame(this.props.game.id, this.state)
      this.context.router.transitionTo('games')
    } else {
      this.props.flux.getActions('api').newGame(this.state)
    }
  }
  render() {
    return (
      <form className="form-inline">
        <div className="form-group">
          <label for="name">Name</label>
          <input type="text" className="form-control" id="name"
                 value={this.state.name} onChange={this.handleChange}/>
        </div>
        <div className="form-group">
          <label for="system">System</label>
          <input type="text" className="form-control" id="system"
                 value={this.state.system} onChange={this.handleChange}/>
        </div>
        <button type="submit" className="btn btn-default"
                onClick={this.handleSubmit}>Submit</button>
      </form>
    )
  }
}
