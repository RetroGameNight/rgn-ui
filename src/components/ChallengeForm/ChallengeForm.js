/*
 * Retro Game Night
 * Copyright (c) 2015 Sasha Fahrenkopf, ... add your name
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
import './ChallengeForm.less';
import React, { PropTypes } from 'react';

export default class ChallengeForm extends React.Component {
  static contextTypes = {
    router: React.PropTypes.func.isRequired
  }
  constructor(props) {
    super(props)
    this.state = {
      name: props.challenge ? props.challenge.name : "",
      game: props.challenge ? props.challenge.game : "",
    }
  }
  handleChange = (event) => {
    this.setState({[event.target.id]: event.target.value});
  }
  handleSubmit = (event) => {
    event.preventDefault()
    if (this.props.challenge) {
      this.props.flux.getActions('api').updateChallenge(this.props.challenge.id, this.state)
      this.context.router.transitionTo('challenges')
    } else {    
      this.props.flux.getActions('api').newChallenge(this.state)  
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
          <label for="system">Game</label>
          <input type="text" className="form-control" id="game" 
                 value={this.state.game} onChange={this.handleChange}/>
        </div>
        <button type="submit" className="btn btn-default"
                onClick={this.handleSubmit}>Submit</button>
      </form>
    )
  }
}
