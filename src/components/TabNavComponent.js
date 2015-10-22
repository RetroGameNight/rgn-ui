'use strict';

import React from 'react'
import { Link } from 'react-router'

require('styles//TabNav.sass')

class TabNavComponent extends React.Component {
  render() {
    const { location } = this.context
    const { tabs } = this.props
    const items = _.map(tabs, (each) => {
      const className = each.to === location.pathname ? 'active' : ''
      return (
        <li role='presentation' className={className}>
          <Link to={each.to}>{each.text}</Link> 
        </li>
      )
    })
    return (
      <ul className="nav nav-tabs">{items}</ul>
    )
  }
}

TabNavComponent.displayName = 'TabNavComponent';

// Uncomment properties you need
// TabNavComponent.propTypes = {};
// TabNavComponent.defaultProps = {};
TabNavComponent.contextTypes = {
  location: React.PropTypes.object.isRequired,
}


export default TabNavComponent;
