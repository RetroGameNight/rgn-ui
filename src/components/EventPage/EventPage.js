import React from 'react'; // eslint-disable-line no-unused-vars
import flux from '../../flux'
import FluxComponent from 'flummox/component'
import Grid from '../Grid'

export default class EventPage extends React.Component {
  render() {
    return (
      <FluxComponent connectToStores={['api']}>
        <EventPageInner {...this.props} />
      </FluxComponent> 
    )
  }
}

class EventPageInner extends React.Component {
  componentDidMount() {
    flux.getActions('api').getEvent(this.props.params.id)
  }
  render() {
    return (
      <div>
        <h1>Event Page</h1>
        <Grid object={this.props.events[this.props.params.id]} />
      </div>
    )
  }
}
