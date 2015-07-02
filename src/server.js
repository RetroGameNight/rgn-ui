/*
 * React.js Starter Kit
 * Copyright (c) 2014 Konstantin Tarkus (@koistya), KriaSoft LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import _ from 'lodash';
import fs from 'fs';
import path from 'path';
import express from 'express';
import React from 'react';

var server = express();

server.set('port', (process.env.PORT || 5000));
server.use(express.static(path.join(__dirname)));

//
// Server-side rendering
// -----------------------------------------------------------------------------

// The top-level React component + HTML template for it
var App = React.createFactory(require('./components/App'));
var templateFile = path.join(__dirname, 'templates/index.html');
var template = _.template(fs.readFileSync(templateFile, 'utf8'));

server.get('*', function(req, res) {
  var data = {description: ''};
  var app = new App({
    path: req.path,
    onSetTitle: function(title) { data.title = title; },
    onSetMeta: function(name, content) { data[name] = content; },
    onPageNotFound: function() { res.status(404); }
  });
  data.body = React.renderToString(app);
  var html = template(data);
  res.send(html);
});

server.listen(server.get('port'), function() {
  if (process.send) {
    process.send('online');
  } else {
    console.log('The server is running at http://localhost:' + server.get('port'));
  }
});
