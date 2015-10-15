/*
 * Retro Game Night
 * Copyright (c) 2015 Sasha Fahrenkopf, Cameron White
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
import './Page.less'
import React from 'react'

export default class Page extends React.Component {
  render() {
    return (
      <div className="page">
        <div>{this.props.children}</div>
      </div>
    )
  }
}
