import React from 'react'; // eslint-disable-line no-unused-vars

export default class ChallangePage extends React.Component {
  render() {
    return (
      <h1>Challange Page - {this.props.params.id}</h1>
    )
  }
}