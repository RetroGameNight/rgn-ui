/*
 * Retro Game Night
 * Copyright (c) 2015 Sasha Fahrenkopf, Cameron White
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
import './Grid.less'
import React from 'react'
import Radium from 'radium'

@Radium
export default class Grid extends React.Component {
  styles = {
    width: '100%',
    display: 'inline-block',
  }
  render() {
    const items = React.Children.map(
        this.props.children,
        (each) => <GridItem>{each}</GridItem>
    )
    return (
      <div style={[
          this.styles,
      ]}>
        {items}
      </div>
    )
  }
}

@Radium
class GridItem extends React.Component {
  styles = {
    position: 'relative',
    float: 'left',
    overflow: 'hidden',
  }
  render() {
    return (
      <div style={[
          this.styles,
      ]}>
        {this.props.children}
      </div>
    )
  }
}
