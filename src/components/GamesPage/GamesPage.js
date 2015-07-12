import React from 'react'; // eslint-disable-line no-unused-vars
import flux from '../../flux'
import FluxComponent from 'flummox/component'
import _ from 'underscore'
import Grid from '../Grid'
import GameForm from '../GameForm'
import Page from '../Page'

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
        .map(each => <div>
          <Grid object={each} />
          <DeleteButton id={each.id}/>
        </div>)
    const size = _.chain(this.props.games).values().size()
    return (
      <Page>
        <h1>Games Page - #{size}</h1>
        <a className="btn btn-default" onClick={this.newGame}>New Game</a>
        <FluxComponent connectToStores={['api']}>
          <GameForm />
        </FluxComponent> 
        { games }
      </Page>
    )
  }
}

class DeleteButton extends React.Component {
  handleClick = (event) => {
    flux.getActions('api').deleteGame(this.props.id)
  }
  render() {
    return (
      <button className="btn btn-default"
              onClick={this.handleClick}>
        Delete - {this.props.id}
      </button>
    )
  }
}
