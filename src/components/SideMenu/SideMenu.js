/*
 * Retro Game Night
 * Copyright (c) 2015 Sasha Fahrenkopf, ... add your name
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import './SideMenu.less'
import React from 'react' // eslint-disable-line no-unused-vars
import flux from '../../flux/flux'
import FluxComponent from 'flummox/component'
import { Link } from 'react-router'
import IsLoggedIn from '../IsLoggedIn'
import IsNotLoggedIn from '../IsNotLoggedIn'
import ChallengeButton from '../ChallengeButton'
import Avatar from '../Avatar'

let api = 'http://localhost:3000'


class Login extends React.Component {
  render() {
    let path = this.props.type
    let URL = api + '/auth/' + path

    return (
      <a className={this.props.type} href={URL}>{this.props.text}</a>
    )
  }
}

class AvatarBox extends React.Component {
  render() {
    const player = this.props.user
    const className = 'user-avatar '
    const avatarUrl = player ? player.avatarUrl : ''
    const playerUrl = 'player'

    return (
      <div className={className}>
        <Avatar url={avatarUrl}
                linkTo='player'
                linkParams={{id: player ? player.id : ''}}/>
        <ChallengeButton btnText='Issue Challenge' class='challenge' />
      </div>
    )
  }
}


class Logout extends React.Component {
  clickHandler() {
    flux.getActions('api').logout('')
  }
  render() {
    return (
      <div>
        <a onClick={this.clickHandler} className='logout'>Logout</a>
      </div>
    )
  }
}


export default class SideMenu extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    flux.getActions('api').login()
  }
  render() {
    let avatar = ''
    return (
      <div className={(this.props.visibility ? 'visible ' : '' + 'side-bar fixed')}>
        <ul className='user'>
          {avatar}
        </ul>
        <IsLoggedIn>
          <AvatarBox user={this.props.user} />
        </IsLoggedIn>
        <ul className='menu'>
          <li><Link to='games'>Games</Link></li>
          <li><Link to='players'>Players</Link></li>
        </ul>
        <IsLoggedIn>
          <ul className='login'>
              <li><Logout /></li>
          </ul>
        </IsLoggedIn>
        <IsNotLoggedIn>
          <ul className='login'>
              <li><Login text='Sign In with Google' type='google' /></li>
              <li><Login text='Sign In with Facebook' type='facebook' /></li>
          </ul>
        </IsNotLoggedIn>
      </div>
    )
  }
}
