import React from 'react' // eslint-disable-line no-unused-vars
import flux from '../../flux/flux'
import FluxComponent from 'flummox/component'
import _ from 'underscore'
import ChallengeForm from '../ChallengeForm'
import Page from '../Page'
import { Link } from 'react-router'

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
        .map(each => <Challenge challenge={each}/>)
    return (
      <Page>
        <h1>Challenges</h1>
        <FluxComponent connectToStores={['api']}>
          <ChallengeForm />
        </FluxComponent> 
        { Challenges }
      </Page>
    )
  }
}

class Challenge extends React.Component {
  render() {
    const challenge = this.props.challenge
    return (
      <div className="media">
        <div className="media-left">
          <div className='thumbnail'></div>
        </div>
        <div className="media-body">
          <Link to="challenge" params={{ id: challenge.id }}>
            <h4 className="media-heading">{`${challenge.name} for ${challenge.game}`}</h4>
          </Link>
          {challenge.id}
        </div>
        <div className="media-left">
          <DeleteButton id={challenge.id} />
        </div>
      </div>
    )
  }
}

class DeleteButton extends React.Component {
  handleClick = (event) => {
    flux.getActions('api').deleteChallenge(this.props.id)
  }
  render() {
    return (
      <button className="btn btn-danger"
              onClick={this.handleClick}>
        Delete
      </button>
    )
  }
}
