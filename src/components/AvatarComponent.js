/*
 * Retro Game Night
 * Copyright (c) 2015 Sasha Fahrenkopf, Cameron White
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
'use strict';

import React from 'react';
import { Link } from 'react-router'

require('styles//Avatar.sass');

class AvatarComponent extends React.Component {
  render() {
    const { url, linkTo, linkParams, height, width, alt} = this.props
    const kittenUrl = `http://placekitten.com/g/${width}/${height}`
    if (linkTo) {
      return (
        <Link to={linkTo} params={linkParams} style={{'display': 'block'}}>
          <img src={url || kittenUrl} width={width} height={height} alt={alt} />
        </Link>
      )
    } else {
      return (
        <img src={url || kittenUrl} width={width} height={height} alt={alt} />
      )
    }
  }
}

AvatarComponent.displayName = 'AvatarComponent';

// Uncomment properties you need
AvatarComponent.propTypes = {
  url: React.PropTypes.string.isRequired,
  linkTo: React.PropTypes.string,
  linkParams: React.PropTypes.object,
  height: React.PropTypes.number,
  width: React.PropTypes.number,
  alt: React.PropTypes.string,
  float: React.PropTypes.string,
}
AvatarComponent.defaultProps = {
  linkParams: {},
  linkTo: '',
  height: 50,
  width: 50,
  alt: 'User Avatar',
}

export default AvatarComponent;
