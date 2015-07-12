import React from 'react'; // eslint-disable-line no-unused-vars
import flux from '../../flux'
import FluxComponent from 'flummox/component'
import Grid from '../Grid'
import Page from '../Page'

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
    const challenge = this.props.challenges.find((challenge) => {
      return challenge && challenge.id == this.props.params.id 
    })
    return (
      <Page>
        <h1>Challenge Page</h1>
        <Grid object={challenge} />
      </Page>
    )
  }
}
