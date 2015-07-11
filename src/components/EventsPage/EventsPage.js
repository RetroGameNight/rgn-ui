import React from 'react'; // eslint-disable-line no-unused-vars
import flux from '../../flux'
import FluxComponent from 'flummox/component'
import _ from 'underscore'
import Grid from '../Grid'

export default class EventsPage extends React.Component {
  componentDidMount() {
    flux.getActions('api').getEvents()
  }
  render() {
    return (
      <FluxComponent connectToStores={['api']}>
        <EventsPageInner {...this.props} />
      </FluxComponent> 
    )
  }
}

class EventsPageInner extends React.Component {
  newEvent() {
    flux.getActions('api').newEvent()
  }
  render() {
    const events = _.chain(this.props.events)
        .values()
        .map(each => <Grid object={each} />)
    return (
      <div>
        <h1>Events Page</h1>
        <a className="btn btn-default" onClick={this.newEvent}>New Event</a>
        { events }
      </div>
    )
  }
}