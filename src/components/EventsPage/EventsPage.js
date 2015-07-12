import React from 'react'; // eslint-disable-line no-unused-vars
import flux from '../../flux'
import FluxComponent from 'flummox/component'
import _ from 'underscore'
import Grid from '../Grid'
import EventForm from '../EventForm'
import Page from '../Page'
import { Link } from 'react-router'

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
        .map(each => <Event event={each}/>)
    return (
      <Page>
        <h1>Events</h1>
        <FluxComponent connectToStores={['api']}>
          <EventForm />
        </FluxComponent> 
        { events }
      </Page>
    )
  }
}

class Event extends React.Component {
  render() {
    const event = this.props.event
    return (
      <div className="media">
        <div className="media-left">
          <div className='thumbnail'></div>
        </div>
        <div className="media-body">
          <Link to="event" params={{ id: event.id }}>
            <h4 className="media-heading">{`${event.name}`}</h4>
          </Link>
          {event.id}
        </div>
        <div className="media-left">
          <DeleteButton id={event.id} />
        </div>
      </div>
    )
  }
}

class DeleteButton extends React.Component {
  handleClick = (event) => {
    flux.getActions('api').deleteEvent(this.props.id)
  }
  render() {
    return (
      <button className="btn btn-danger"
              onClick={this.handleClick}>
        Delete
      </button>
    )
  }
}
