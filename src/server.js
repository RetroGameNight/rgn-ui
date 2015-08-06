import express from 'express'

const app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello world');
});

const server = app.listen(3000, () => {
  console.log('rgn-ui listening at http://%s:%s', 'localhost', 3000);
});