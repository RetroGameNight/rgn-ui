/*
 * Retro Game Night
 * Copyright (c) 2015 Sasha Fahrenkopf, ... add your name
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
import './Grid.less';
import React, { PropTypes } from 'react';
import _ from 'underscore'

export default class Grid extends React.Component {
  render() {
    const rows = _.pairs(this.props.object)
        .map((pair) => {
          return (
            <tr>
              <td>{pair[0]}</td>
              <td>{pair[1]}</td>
            </tr>
          )
        })
    return (
      <table className="table">
        <tr>
          <th>Key</th>
          <th>Value</th>
        </tr>
        {rows}
      </table> 
    )
  }
}
