const express = require('express');
const path = require('path');
const routes = require('./routes.js');
const bodyParser = require('body-parser');

const port = 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log(`Serving ${req.method} request on url ${req.url}`);
  next();
});

app.use(express.static(path.join(__dirname, '/../client/public')));

app.use('/api', routes);

app.get('*', (req, res) => {
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
