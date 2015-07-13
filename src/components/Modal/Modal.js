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
  constructor(props) {
    super(props)
  }
  modalIsClosed() {
    return !this.props.isOpen
  }
  render() {
    const handleCancelButtonClick = this.props.handleCancelButtonClick
    const handleSubmitButtonClick = this.props.handleSubmitButtonClick
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
              <ModalFooter 
                  handleCancelButtonClick={handleCancelButtonClick}
                  handleSubmitButtonClick={handleSubmitButtonClick}/>
            </div>
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

class ModalFooter extends React.Component {
  render() {
    const cancelButtonText = this.props.cancelButtonText || "Cancel"
    const submitButtonText = this.props.submitButtonText || "Submit"
    return (
      <div className="modal-footer">
        <button type="button" class="btn btn-default"
                onClick={this.handleCancelButtonClick}>
          {cancelButtonText}
        </button>
        <button type="button" class="btn btn-primary">
                onClick={this.handleSubmitButtonClick}>
          {submitButtonText}
        </button>
      </div>
    )
  }
}


