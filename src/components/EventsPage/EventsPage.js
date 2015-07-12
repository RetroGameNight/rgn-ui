import React from 'react'; // eslint-disable-line no-unused-vars
import flux from '../../flux'
import FluxComponent from 'flummox/component'
import _ from 'underscore'
import Grid from '../Grid'
import EventForm from '../EventForm'
import Page from '../Page'

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
        .map(each => <div>
          <Grid object={each} />
          <DeleteButton id={each.id}/>
        </div>)
    const size = _.chain(this.props.events).values().size()
    return (
      <Page>
        <h1>Events Page - #{size}</h1>
        <a className="btn btn-default" onClick={this.newEvent}>New Event</a>
        <FluxComponent connectToStores={['api']}>
          <EventForm />
        </FluxComponent> 
        { events }
      </Page>
    )
  }
}

class DeleteButton extends React.Component {
  handleClick = (event) => {
    flux.getActions('api').deleteEvent(this.props.id)
  }
  render() {
    return (
      <button className="btn btn-default"
              onClick={this.handleClick}>
        Delete - {this.props.id}
      </button>
    )
  }
}
