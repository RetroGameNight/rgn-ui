import React from 'react'; // eslint-disable-line no-unused-vars
import flux from '../../flux/flux'
import FluxComponent from 'flummox/component'
import _ from 'underscore'
import Grid from '../Grid'
import Page from '../Page'
import GameForm from '../GameForm'

export default class GamePage extends React.Component {
  render() {
    return (
      <FluxComponent connectToStores={{
        api: store => ({
          game: store.getGame(this.props.params.id),
        }),
      }}> 
        <GamePageInner {...this.props} />
      </FluxComponent> 
    )
  }
}

class GamePageInner extends React.Component {
  componentWillMount() {
    flux.getActions('api').getGame(this.props.params.id)
  }
  render() {
    const { game } = this.props 
    return (
      <Page>
        <h1>Game Page</h1>
        <FluxComponent connectToStores={['api']}>
          <GameForm game={game} />
        </FluxComponent>
      </Page>
    )
  }
}
