'use strict';

import React from 'react';

require('styles/activeuser/PublicProfilePanel.sass');

class PublicProfilePanelComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: props.activeUser ? props.activeUser.name : '',
      email: props.activeUser ? props.activeUser.email : '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }
  handleChange(event) {
    this.setState({[event.target.id]: event.target.value})
  }
  handleClick() {
    const { id } = this.props.activeUser
    this.context.flux.getActions('api').updateUser(id, this.state)
  }
  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">Public profile</div>
          <div className="panel-body">
            <form>
              <div class="form-group">
                <label for="name">Name</label>
                <input type="text" className="form-control" id="name"
                    onChange={this.handleChange}
                    value={this.state.name}/>
              </div>
              <div class="form-group">
                <label for="email">Email address</label>
                <input type="email" className="form-control" id="email"
                    onChange={this.handleChange}
                    value={this.state.email}/>
              </div>
              <button type="submit" className="btn btn-default"
                  onClick={this.handleClick}>Update</button>
            </form>
          </div>
      </div>
    )
  }
}

PublicProfilePanelComponent.displayName = 'ActiveuserPublicProfilePanelComponent';

// Uncomment properties you need
// PublicProfilePanelComponent.propTypes = {};
// PublicProfilePanelComponent.defaultProps = {};
PublicProfilePanelComponent.contextTypes = {
  flux: React.PropTypes.func.isRequired,
}


export default PublicProfilePanelComponent;
