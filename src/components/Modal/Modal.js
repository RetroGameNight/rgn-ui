/*
 * Retro Game Night
 * Copyright (c) 2015 Sasha Fahrenkopf, ... add your name
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
import './Modal.less'
import React, { PropTypes } from 'react'

export default class Modal extends React.Component {
  // The Component that manages the component needs to pass
  // a boolean object to isOpen to control when the modal 
  // get displayed. The handleCancelButtonClick property is
  // what is ran when the user clicks the 'x' button in the
  // top right corner. A title may also be passed. The
  // modal supports children.
  propTypes: {
    isOpen: PropTypes.bool.isRequired,
    handleCancelButtonClick: PropTypes.func.isRequired,
    title: PropTypes.string,
  }
  constructor(props) {
    super(props)
  }
  modalIsClosed() {
    return !this.props.isOpen
  }
  render() {
    console.log(this.props.children)
    const handleCancelButtonClick = this.props.handleCancelButtonClick
    if (this.modalIsClosed()) {
      return null
    } else {
      return (
        <div className="Modal">
          <div className="modal-dialog">
            <div className="modal-content">
              <ModalHeader 
                  title={this.props.title}
                  handleClick={handleCancelButtonClick}/>
              <ModalContent>
                {this.props.children}
              </ModalContent>
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
        <button type="button" className="close"
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
    console.log(this.props.content)
    return (
      <div className="modal-body">
        {this.props.content}
      </div>
    )
  }
}
