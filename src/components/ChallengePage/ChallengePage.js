import React from 'react'; // eslint-disable-line no-unused-vars

export default class ChallengePage extends React.Component {
  render() {
    return (
      <h1>Challenge Page - {this.props.params.id}</h1>
    )
  }
}