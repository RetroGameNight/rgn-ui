export default {
  server: {
    location: {
      port: (process.env.PORT || 5000),
    },
  },
  api: {
    location: {
      scheme: (process.env.API_LOCACTION_SCHEME || 'http'),
      host: (process.env.API_LOCATION_HOST || 'localhost'),
      port: (process.env.API_LOCATION_PORT || 3000),
    },
  },
}
