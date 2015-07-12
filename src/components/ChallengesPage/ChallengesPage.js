import React from 'react'; // eslint-disable-line no-unused-vars
import flux from '../../flux'
import FluxComponent from 'flummox/component'
import _ from 'underscore'
import Grid from '../Grid'
import ChallengeForm from '../ChallengeForm'
import Page from '../Page'

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
        .map(each => <div>
          <Grid object={each} />
          <DeleteButton id={each.id}/>
        </div>)
    const size = _.chain(this.props.challenges).values().size()
    return (
      <Page>
        <h1>Challenges Page - #{size}</h1>
        <a className="btn btn-default" onClick={this.newChallenge}>New Challenge</a>
        <FluxComponent connectToStores={['api']}>
          <ChallengeForm />
        </FluxComponent> 
        { Challenges }
      </Page>
    )
  }
}

class DeleteButton extends React.Component {
  handleClick = (event) => {
    flux.getActions('api').deleteChallenge(this.props.id)
  }
  render() {
    return (
      <button className="btn btn-default"
              onClick={this.handleClick}>
        Delete - {this.props.id}
      </button>
    )
  }
}
