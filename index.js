const config = require('./config/config');
const mongoose = require('mongoose');

mongoose.connect(
  config.MONGOOSE.URL,
  config.MONGOOSE.OPTIONS
);

const express = require('express');
const routes = require('./routes/v1');

const app = express();
const port = config.PORT;

app.use('/v1', routes);

app.get('/', (req, res) => {
  res.send();
});

app.listen(port, () => {
  console.log('Listening on port ' + port);
});
