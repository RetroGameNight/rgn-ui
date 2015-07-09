import React from 'react'; // eslint-disable-line no-unused-vars

export default class PlayerPage extends React.Component {
  render() {
    return (
      <h1>Player Page - {this.props.params.id}</h1>
    )
  }
}