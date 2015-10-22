'use strict';

import React from 'react';

require('styles/navbar/DropDown.sass');

class DropDownComponent extends React.Component {
  render() {
    const { children, icons } = this.props
    const items = React.Children.map(children, each => <li>{each}</li>)
    return (
      <li className="dropdown">
        <a href="#" className="dropdown-toggle" data-toggle="dropdown"
            role="button" aria-haspopup="true" aria-expanded="false">
          {icons}
        </a>
        <ul className="dropdown-menu">{items}</ul>
      </li>
    )
  }
}

DropDownComponent.displayName = 'NavbarDropDownComponent';

// Uncomment properties you need
// DropDownComponent.propTypes = {};
DropDownComponent.defaultProps = {
  icons: (<span className="caret"></span>)
};


export default DropDownComponent;
