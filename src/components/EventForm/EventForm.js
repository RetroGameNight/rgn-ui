/*
 * Retro Game Night
 * Copyright (c) 2015 Sasha Fahrenkopf, ... add your name
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
import './EventForm.less';
import React, { PropTypes } from 'react';

export default class EventForm extends React.Component {
  static contextTypes = {
    router: React.PropTypes.func.isRequired
  }
  constructor(props) {
    super(props)
    this.state = {
      name: props.event ? props.event.name : "",
    }
  }
  handleChange = (event) => {
    this.setState({[event.target.id]: event.target.value});
  }
  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.props.event)
    if (this.props.event) {
      this.props.flux.getActions('api').updateEvent(this.props.event.id, this.state)
      this.context.router.transitionTo('events')
    } else {
      this.props.flux.getActions('api').newEvent(this.state)  
    }
  }
  render() {
    return (
      <form className="form-inline">
        <div className="form-group">
          <label for="name">Name</label>
          <input type="text" className="form-control" id="name" 
                 value={this.state.name} onChange={this.handleChange}/>
        </div>
        <button type="submit" className="btn btn-default"
                onClick={this.handleSubmit}>Submit</button>
      </form>
    )
  }
}
