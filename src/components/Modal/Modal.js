/*
 * Retro Game Night
 * Copyright (c) 2015 Sasha Fahrenkopf, ... add your name
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
import './Modal.less'
import React from 'react'

export default class Modal extends React.Component {
  // <Modal
  //   handleCancelButtonClick={/* A function */}
  //   title={/* a string */}
  constructor(props) {
    super(props)
  }
  modalIsClosed() {
    return !this.props.isOpen
  }
  render() {
    const handleCancelButtonClick = this.props.handleCancelButtonClick
    if (this.modalIsClosed()) {
      return (<div></div>)
    } else {
      return (
        <div className="Modal">
          <div className="modal-dialog">
            <div className="modal-content">
              <ModalHeader 
                  handleClick={handleCancelButtonClick}/>
              <ModalContent>
                {this.props.children}
              </ModalContent>
          </div>
        </div>
      )
    }
  }
}

class ModalHeader extends React.Component {
  render() {
    const title = 
      this.props.title && <h4 className="modal-title">{this.props.title}</h4>
    return (
      <div className="modal-header">
        <button type="button" class="close"
                ref="modalCloseButton"
                onClick={this.props.handleClick}>
          <span>&times;</span>
        </button>
        {title}
      </div>
    ) 
  }
}

class ModalContent extends React.Component {
  render() {
    return (
      <div className="modal-body">
        {this.props.children}
      </div>
    )
  }
}
