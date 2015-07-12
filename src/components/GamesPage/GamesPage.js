import React from 'react'; // eslint-disable-line no-unused-vars
import flux from '../../flux'
import FluxComponent from 'flummox/component'
import _ from 'underscore'
import Grid from '../Grid'
import GameForm from '../GameForm'

export default class GamesPage extends React.Component {
  componentDidMount() {
    flux.getActions('api').getGames()
  }
  render() {
    return (
      <FluxComponent connectToStores={['api']}>
        <GamesPageInner {...this.props} />
      </FluxComponent> 
    )
  }
}

class GamesPageInner extends React.Component {
  newGame() {
    flux.getActions('api').newGame({})
  }
  render() {
    const games = _.chain(this.props.games)
        .sortBy('name')
        .map(each => <Grid object={each} />)
    const size = _.chain(this.props.games).values().size()
    return (
      <div>
        <h1>Games Page - #{size}</h1>
        <a className="btn btn-default" onClick={this.newGame}>New Game</a>
        <FluxComponent connectToStores={['api']}>
          <GameForm />
        </FluxComponent> 
        { games }
      </div>
    )
  }
}