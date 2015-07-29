import React from 'react'; // eslint-disable-line no-unused-vars
import flux from '../../flux/flux'
import FluxComponent from 'flummox/component'
import _ from 'underscore'
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
  constructor(props) {
    super(props)
    this.state = {
      isCreateFormModalOpen: false
    }
  }
  newEvent() {
    flux.getActions('api').newEvent()
  }
  handleClick = (event) => {
    if (event.target.id == "openCreateEvent") {
      this.setState({
        isCreateFormModalOpen: true
      })
    } else if (event.target.id == "closeCreateEvent") {
      this.setState({
        isCreateFormModalOpen: false
      })
    }
  }
  render() {
    const events = _.chain(this.props.events)
        .map(each => <Event event={each}/>)
    return (
      <Page>
        <Modal isOpen={this.state.isCreateFormModalOpen}>
          <div className="modal-header">
            <button type="button" class="close"
                    id="closeCreateEvent"
                    onClick={this.handleClick}>
              <span>&times;</span>
            </button>
            <h4 className="modal-title">Create Event</h4>
          </div>
          <div className="modal-body">
            <FluxComponent connectToStores={['api']}>
              <EventForm />
            </FluxComponent> 
          </div>
        </Modal>
        <h1>Events</h1>
        <button className="btn btn-default"
                id="openCreateEvent"
                onClick={this.handleClick}>
          Create Event
        </button>
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
