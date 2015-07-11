import React from 'react'; // eslint-disable-line no-unused-vars
import flux from '../../flux'
import FluxComponent from 'flummox/component'
import _ from 'underscore'
import Grid from '../Grid'

export default class GamePage extends React.Component {
  render() {
    return (
      <FluxComponent connectToStores={['api']}>
        <GamePageInner {...this.props} />
      </FluxComponent> 
    )
  }
}

class GamePageInner extends React.Component {
  componentDidMount() {
    flux.getActions('api').getGame(this.props.params.id)
  }
  render() {
    const game = this.props.games.find((game) => {
      return game && game.id == this.props.params.id 
    })
    return (
      <div>
        <h1>Game Page</h1>
        <Grid object={game} />
      </div>
    )
  }
}
