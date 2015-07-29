import React from 'react'; // eslint-disable-line no-unused-vars
import flux from '../../flux/flux'
import FluxComponent from 'flummox/component'
import ObjectTable from '../ObjectTable'
import Page from '../Page'

export default class PlayerPage extends React.Component {
  render() {
    return (
      <FluxComponent connectToStores={{
        api: store => ({
          player: store.getUser(this.props.params.id),
        }),
      }}> 
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
    const { player } = this.props
    return (
      <Page>
        <h1>Player Page</h1>
        <ObjectTable object={player} />
      </Page>
    )
  }
}
