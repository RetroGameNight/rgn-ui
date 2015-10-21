import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router'
import routes from './routes'

const mountNode = document.getElementById('app')

Router.run(routes, (Handler, state) => {
  const params = state.params
  ReactDOM.render(<Handler params={params}/>, mountNode)
})