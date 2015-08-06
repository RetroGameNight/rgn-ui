import express from 'express'
import config from './config'

const app = express()

app.set('port', config.server.location.port)

app.get('/', (req, res) => {
  res.sendfile('build/index.html')
});

app.get('/app.js', (req, res) => {
  res.sendfile('build/app.js')
});

app.use('/assets', express.static('build/assets'));
app.use('/css', express.static('build/css'));
app.use('/fonts', express.static('build/fonts'));

const server = app.listen(app.get('port'), () => {
  console.log('rgn-ui listening on port %s', app.get('port'));
});