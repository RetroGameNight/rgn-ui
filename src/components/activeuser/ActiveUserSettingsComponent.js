'use strict';

import React from 'react';
import PublicProfilePanel from './PublicProfilePanelComponent'
import DeleteAccountPanel from './DeleteAccountPanelComponent'

require('styles/activeuser/ActiveUserSettings.sass');

class ActiveUserSettingsComponent extends React.Component {
  render() {
    return (
      <div className="activeusersettings-component">
        <PublicProfilePanel /> 
        <DeleteAccountPanel />
      </div>
    );
  }
}

ActiveUserSettingsComponent.displayName = 'ActiveuserActiveUserSettingsComponent';

// Uncomment properties you need
// ActiveUserSettingsComponent.propTypes = {};
// ActiveUserSettingsComponent.defaultProps = {};


export default ActiveUserSettingsComponent;
