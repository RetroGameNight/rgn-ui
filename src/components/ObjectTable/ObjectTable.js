/*
 * Retro Game Night
 * Copyright (c) 2015 Sasha Fahrenkopf, Cameron White
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
import './ObjectTable.less'
import React, { PropTypes } from 'react'
import _ from 'underscore'

export default class ObjectTable extends React.Component {
  // Given a object ObjectTable will display a table where the
  // the first column is the key of every properity and the
  // second column is the value of every properity.
  propTypes: {
    object: PropTypes.object.isRequired
  }
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
