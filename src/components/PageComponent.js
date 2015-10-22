'use strict';

import React from 'react';

require('styles//Page.sass');

class PageComponent extends React.Component {
  render() {
    return (
      <div className="page-component">
        {this.props.children}
      </div>
    );
  }
}

PageComponent.displayName = 'PageComponent';

// Uncomment properties you need
// PageComponent.propTypes = {};
// PageComponent.defaultProps = {};


export default PageComponent;
