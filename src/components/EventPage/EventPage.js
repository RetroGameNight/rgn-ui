import React from 'react'; // eslint-disable-line no-unused-vars

export default class EventPage extends React.Component {
  render() {
    return (
      <h1>Event Page - {this.props.params.id}</h1>
    )
  }
}