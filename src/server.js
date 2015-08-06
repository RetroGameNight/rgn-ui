import express from 'express'

const app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.sendfile('build/index.html')
});

app.get('/app.js', (req, res) => {
  res.sendfile('build/app.js')
});

app.use('/assets', express.static('build/assets'));
app.use('/css', express.static('build/css'));
app.use('/fonts', express.static('build/fonts'));

const server = app.listen(3000, () => {
  console.log('rgn-ui listening at http://%s:%s', 'localhost', 3000);
});