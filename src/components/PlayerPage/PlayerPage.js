import React from 'react'; // eslint-disable-line no-unused-vars
import flux from '../../flux'
import FluxComponent from 'flummox/component'
import Grid from '../Grid'

export default class PlayerPage extends React.Component {
  render() {
    return (
      <FluxComponent connectToStores={['api']}>
        <PlayerPageInner {...this.props} />
      </FluxComponent> 
    )
  }
}

class PlayerPageInner extends React.Component {
  componentDidMount() {
    flux.getActions('api').getUser(this.props.params.id)
  }
  render() {
    return (
      <div>
        <h1>Player Page</h1>
        <Grid object={this.props.users[this.props.params.id]} />
      </div>
    )
  }
}
