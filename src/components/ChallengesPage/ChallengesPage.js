import React from 'react'; // eslint-disable-line no-unused-vars
import flux from '../../flux'
import FluxComponent from 'flummox/component'
import _ from 'underscore'
import Grid from '../Grid'

export default class ChallengesPage extends React.Component {
  componentDidMount() {
    flux.getActions('api').getChallenges()
  }
  render() {
    return (
      <FluxComponent connectToStores={['api']}>
        <ChallengesPageInner {...this.props} />
      </FluxComponent> 
    )
  }
}

class ChallengesPageInner extends React.Component {
  newChallenge() {
    flux.getActions('api').newChallenge()
  }
  render() {
    const Challenges = _.chain(this.props.challenges)
        .values()
        .map(each => <Grid object={each} />)
    return (
      <div>
        <h1>Challenges Page</h1>
        <a className="btn btn-default" onClick={this.newChallenge}>New Challenge</a>
        { Challenges }
      </div>
    )
  }
}