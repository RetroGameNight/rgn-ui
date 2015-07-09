import React from 'react'; // eslint-disable-line no-unused-vars

export default class GamePage extends React.Component {
  render() {
    return (
      <h1>Game Page - {this.props.params.id}</h1>
    )
  }
}