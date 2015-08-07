/*
 * Retro Game Night
 * Copyright (c) 2015 Sasha Fahrenkopf, Cameron White
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
import './ChallengeButton.less'
import React, { PropTypes } from 'react'
import Router, { RouteHandler } from 'react-router'
import flux from '../../flux/flux'
import FluxComponent from 'flummox/component'
import Modal from '../Modal'
import ChallengeForm from '../ChallengeForm'

export default class ChallengeButton extends React.Component {
  render() {
    return (
      <FluxComponent connectToStores={['api']}>
        <ChallengeButtonInner {...this.props} />
      </FluxComponent>
    )
  }
}


class ChallengeButtonInner extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isModalOpen: false }
  }
  toggleModal = () => {
    this.setState({ isModalOpen: !this.state.isModalOpen })
  }
  render() {
    var classStr = 'challenge button'
    return (
      <div className='challengeBtn-container'>
       <a className={classStr} onClick={this.toggleModal}>
          {this.props.btnText}
       </a>
       <ChallengeModal visibility={this.state.isModalOpen} closeHandler={this.toggleModal} />
      </div>
    )
  }
}

class ChallengeModal extends React.Component {
  render() {
    const title = 'Challenge Him'
    return (
      <Modal isOpen={this.props.visibility}
            handleCancelButtonClick={this.props.closeHandler}
            title={title}>
            <FluxComponent connectToStores={['api']}>
              <ChallengeForm onAfterSubmit={this.props.closeHandler}/>
            </FluxComponent>
      </Modal>
    )
  }
}

