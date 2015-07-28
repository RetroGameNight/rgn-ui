import React from 'react'; // eslint-disable-line no-unused-vars
import flux from '../../flux/flux'
import FluxComponent from 'flummox/component'
import Page from '../Page'
import EventForm from '../EventForm'

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
    const event = this.props.events.find((event) => {
      return event && event.id == this.props.params.id 
    })
    return (
      <Page>
        <h1>Event Page</h1>
        <FluxComponent connectToStores={['api']}>
          <EventForm event={event} />
        </FluxComponent>
      </Page>
    )
  }
}
