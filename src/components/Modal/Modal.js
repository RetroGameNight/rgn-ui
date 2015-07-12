/*
 * Retro Game Night
 * Copyright (c) 2015 Sasha Fahrenkopf, ... add your name
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
import './Modal.less';
import React, { PropTypes } from 'react';

export default class Modal extends React.Component {
  constructor(props) {
    super(props)
  }
  modalShouldBeClosed() {
    return !this.props.isOpen
  }
  render() {
    if (this.modalShouldBeClosed()) {
       return (<div></div>)
    } else {
      return (
        <div className="modal-dialog">
          <div className="modal-content">
            {this.props.children}
          </div>
        </div>
      )
    }
  }
}
