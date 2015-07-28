import React from 'react'; // eslint-disable-line no-unused-vars
import flux from '../../flux/flux'
import FluxComponent from 'flummox/component'
import Grid from '../Grid'
import Page from '../Page'

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
    const player = this.props.users.find((user) => {
      return user && user.id == this.props.params.id 
    })
    return (
      <Page>
        <h1>Player Page</h1>
        <Grid object={player} />
      </Page>
    )
  }
}
