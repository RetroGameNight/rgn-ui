/*
 * Retro Game Night
 * Copyright (c) 2015 Sasha Fahrenkopf, Cameron White
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
import './ChallengeForm.less'
import React, { PropTypes } from 'react'

export default class ChallengeForm extends React.Component {
  static contextTypes = {
    router: React.PropTypes.func.isRequired
  }
  constructor(props) {
    super(props)
    this.state = {
      player: props.challenge ? props.challenge.player : "",
      game: props.challenge ? props.challenge.game : "",
      trial: props.challenge ? props.challenge.trial : "",
    }
  }
  handleChange = (event) => {
    this.setState({[event.target.id]: event.target.value})
  }
  handleSubmit = (event) => {
    event.preventDefault()
    if (this.props.challenge) {
      this.props.flux.getActions('api').updateChallenge(this.props.challenge.id, this.state)
      this.context.router.transitionTo('challenges')
    } else {
      this.props.flux.getActions('api').newChallenge(this.state)
    }
    if(this.props.onAfterSubmit) {
      this.props.onAfterSubmit()
    }
  }
  render() {
    return (
      <form className="form">
        <div className="form-group">
          <label htmlFor="name">Opponent</label>
          <input type="text" className="form-control" id="player" 
                 value={this.state.player} onChange={this.handleChange}/>
        </div>
        {/* Game isn't a valid key for the challenge end point*/}
        <div className="form-group">
          <label htmlFor="system">Game</label>
          <input type="text" className="form-control" id="game"
                 value={this.state.game} onChange={this.handleChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="system">Trial</label>
          <input type="text" className="form-control" id="trial" 
                 value={this.state.trial} onChange={this.handleChange}/>
        </div>
        <button type="submit" className="btn btn-default"
                onClick={this.handleSubmit}>Issue Challenge</button>
      </form>
    )
  }
}

ChallengeForm.propTypes = {
  onAfterSubmit: PropTypes.func,
}
