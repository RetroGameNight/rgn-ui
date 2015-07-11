import React from 'react'; // eslint-disable-line no-unused-vars
import flux from '../../flux'
import FluxComponent from 'flummox/component'
import _ from 'underscore'
import Grid from '../Grid'

export default class PlayersPage extends React.Component {
  componentDidMount() {
    flux.getActions('api').getUsers()
  }
  render() {
    return (
      <FluxComponent connectToStores={['api']}>
        <PlayersPageInner {...this.props} />
      </FluxComponent> 
    )
  }
}

class PlayersPageInner extends React.Component {
  render() {
    const players = _.chain(this.props.users)
        .map(each => <Grid object={each} />)
    const size = _.chain(this.props.users).values().size()
    return (
      <div>
        <h1>Players Page - #{size}</h1>
        { players }
      </div>
    )
  }
}