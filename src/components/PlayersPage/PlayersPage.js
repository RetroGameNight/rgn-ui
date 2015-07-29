import React from 'react'; // eslint-disable-line no-unused-vars
import flux from '../../flux/flux'
import FluxComponent from 'flummox/component'
import _ from 'underscore'
import { Link } from 'react-router'
import Page from '../Page'

export default class PlayersPage extends React.Component {
  componentDidMount() {
    flux.getActions('api').getUsers()
  }
  render() {
    return (
      <FluxComponent connectToStores={['api']}>
        <PlayersPageInner {...this.props} />
      </FluxComponent> 
    )
  }
}

class PlayersPageInner extends React.Component {
  render() {
    const players = _.chain(this.props.users)
      .map(each => <Player player={each} />)
    return (
      <Page>
        <h1>Players</h1>
        { players }
      </Page>
    )
  }
}

class Player extends React.Component {
  render() {
    const player = this.props.player
    return (
      <div className="media">
        <div className="media-left">
          <div className='thumbnail'></div>
        </div>
        <div className="media-body">
          <Link to="player" params={{ id: player.id }}>
            <h4 className="media-heading">{player.name}</h4>
          </Link>
          {player.email} - {player.type}
        </div>
        <div className="media-left">
          <DeleteButton id={player.id} />
        </div>
      </div>
    )
  }
}

class DeleteButton extends React.Component {
  handleClick = (event) => {
    flux.getActions('api').deleteUser(this.props.id)
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
