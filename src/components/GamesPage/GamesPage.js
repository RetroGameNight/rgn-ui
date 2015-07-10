import React from 'react'; // eslint-disable-line no-unused-vars
import flux from '../../flux'
import FluxComponent from 'flummox/component'
import _ from 'underscore'
import Grid from '../Grid'

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
  render() {
    const games = _.chain(this.props.games)
        .values()
        .map(each => <Grid object={each} />)
    return (
      <div>
        <h1>Games Page</h1>
        { games }
      </div>
    )
  }
}