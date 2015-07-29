import React from 'react'; // eslint-disable-line no-unused-vars
import flux from '../../flux/flux'
import FluxComponent from 'flummox/component'
import Page from '../Page'
import ChallengeForm from '../ChallengeForm'

export default class ChallengePage extends React.Component {
  render() {
    return (
      <FluxComponent connectToStores={{
        api: store => ({
          challenge: store.getChallenge(this.props.params.id),
        }),
      }}> 
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
    const { challenge } = this.props
    return (
      <Page>
        <h1>Challenge Page</h1>
        <FluxComponent connectToStores={['api']}>
          <ChallengeForm challenge={challenge} />
        </FluxComponent>
      </Page>
    )
  }
}
