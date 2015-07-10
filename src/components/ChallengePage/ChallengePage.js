import React from 'react'; // eslint-disable-line no-unused-vars
import flux from '../../flux'
import FluxComponent from 'flummox/component'
import Grid from '../Grid'

export default class ChallengePage extends React.Component {
  render() {
    return (
      <FluxComponent connectToStores={['api']}>
        <ChallengePageInner {...this.props} />
      </FluxComponent> 
    )
  }
}

class ChallengePageInner extends React.Component {
  componentDidMount() {
    flux.getActions('api').getChallenge(this.props.params.id)
  }
  render() {
    return (
      <div>
        <h1>Challenge Page</h1>
        <Grid object={this.props.challenges[this.props.params.id]} />
      </div>
    )
  }
}
