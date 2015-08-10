/*
 * Retro Game Night
 * Copyright (c) 2015 Sasha Fahrenkopf, Cameron White
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
import './Avatar.less'
import React, { PropTypes } from 'react'
import { Link } from 'react-router'

export default class Avatar extends React.Component {
  render() {
    const { url, linkTo, linkParams, height, width, alt} = this.props
    const kittenUrl = 'http://placekitten.com/g/50/50'
    if (linkTo) {
      return (
        <Link to={linkTo} params={linkParams} style={{'display': 'block'}}>
          <img src={url || kittenUrl} width={width} height={height} alt={alt} />
        </Link>
      )
    } else {
      return (
        <img src={url} width={width} height={height} alt={alt} />
      )
    }
  }
}
Avatar.propTypes = {
  url: PropTypes.string.isRequired,
  linkTo: PropTypes.string,
  linkParams: PropTypes.object,
  height: PropTypes.number,
  width: PropTypes.number,
  alt: PropTypes.string,
  float: PropTypes.string,
}
Avatar.defaultProps = {
  linkParams: {},
  linkTo: '',
  height: 50,
  width: 50,
  alt: 'User Avatar',
}
