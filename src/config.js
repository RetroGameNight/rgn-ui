/*
 * Retro Game Night
 * Copyright (c) 2015 Sasha Fahrenkopf, Cameron White
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
export default {
  server: {
    location: {
      port: (process.env.PORT || 5000),
    },
  },
  api: {
    location: {
      scheme: (process.env.API_LOCATION_SCHEME || 'http'),
      host: (process.env.API_LOCATION_HOST || 'localhost'),
      port: (process.env.API_LOCATION_PORT || 3000),
    },
  },
}
