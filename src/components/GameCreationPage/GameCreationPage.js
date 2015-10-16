/*
 * Retro Game Night
 * Copyright (c) 2015 Sasha Fahrenkopf, Cameron White
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
import React from 'react'
import './GameCreationPage.less'
import Page from '../Page'
import flux from '../../flux/flux'

export default class GameCreationPage extends React.Component {
  static contextTypes = {
    router: React.PropTypes.func.isRequired,
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
      flux.getActions('api').updateGame(this.props.game.id, this.state)
      this.context.router.transitionTo('games')
    } else {
      flux.getActions('api').newGame(this.state)
    }
  }
  render() {
    return (
      <Page>
        <h2>Create a new Game</h2>
        <p>A game contians trials, challenges and scores</p>
        <hr />
        <form className="form">
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
          <button type="submit" className="btn btn-primary"
                  onClick={this.handleSubmit}>Create Game</button>
        </form>
      </Page>
    )
  }
}
