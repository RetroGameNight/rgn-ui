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
  constructor() {
    super()
    this.state = {
      name: "",
      game: ""
    }
  }
  handleChange = (event) => {
    this.setState({[event.target.id]: event.target.value});
  }
  handleSubmit = (event) => {
    event.preventDefault()
    this.props.flux.getActions('api').newChallenge(this.state)  
  }
  render() {
    return (
      <form>
        <h3>Challenge Form</h3>
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
