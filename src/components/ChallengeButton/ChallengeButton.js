/*
 * Retro Game Night
 * Copyright (c) 2015 Sasha Fahrenkopf, Cameron White
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
import './ChallengeButton.less';
import React, { PropTypes } from 'react';
import Router, { RouteHandler } from "react-router"
import flux from '../../flux/flux'
import FluxComponent from 'flummox/component';

export default class ChallengeButton extends React.Component {
  render() {
    return (
      <FluxComponent flux={flux}>
        <ChallengeButtonInner {...this.props} />
      </FluxComponent>
    )
  }
}

class ChallengeButtonInner extends React.Component {
  clickHandler() {
    console.log("Challenge Him")
  }
  render() {
    var classStr = "challenge button"
    if(this.props.class) {
      //classStr += this.props.class
    }
    
    return (
       <a className={classStr}>
          {this.props.btnText}
       </a>
    )
  }
}