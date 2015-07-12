import React from 'react'; // eslint-disable-line no-unused-vars
import flux from '../../flux'
import FluxComponent from 'flummox/component'
import _ from 'underscore'
import Grid from '../Grid'
import GameForm from '../GameForm'
import Page from '../Page'
import { Link } from 'react-router'

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
        .map(each => <Game game={each} />)
    return (
      <Page>
        <h1>Games</h1>
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
      <button className="btn btn-danger"
              onClick={this.handleClick}>
        Delete
      </button>
    )
  }
}

class Game extends React.Component {
  render() {
    const game = this.props.game
    return (
      <div className="media">
        <div className="media-left">
          <div className='thumbnail'></div>
        </div>
        <div className="media-body">
          <Link to="game" params={{ id: game.id }}>
            <h4 className="media-heading">{`${game.name} on ${game.system}`}</h4>
          </Link>
          {game.id}
        </div>
        <div className="media-left">
          <DeleteButton id={game.id} />
        </div>
      </div>
    )
  }
}
