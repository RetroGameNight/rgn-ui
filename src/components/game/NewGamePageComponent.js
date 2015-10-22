'use strict';

import React from 'react';
import Page from '../PageComponent'

require('styles/game/NewGamePage.sass');

class NewGamePageComponent extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: props.game ? props.game.name : '',
      system: props.game ? props.game.system : '',
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event) {
    this.setState({[event.target.id]: event.target.value})
  }
  handleSubmit(event) {
    event.preventDefault()
    const { flux, router } = this.context
    if (this.props.game) {
      flux.getActions('api').updateGame(this.props.game.id, this.state)
      router.transitionTo('games')
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

NewGamePageComponent.displayName = 'GameNewGamePageComponent';

// Uncomment properties you need
// NewGamePageComponent.propTypes = {};
// NewGamePageComponent.defaultProps = {};
NewGamePageComponent.contextType = {
  router: React.PropTypes.func.isRequired,
  flux: React.PropTypes.object.isRequired,
}


export default NewGamePageComponent;
