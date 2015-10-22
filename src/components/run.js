import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router'
import routes from './routes'
import flux from './flux'
import FluxComponent from 'flummox/component'

const mountNode = document.getElementById('app')

React.render(
  <Router>
    {routes}
  </Router>
, mountNode)
