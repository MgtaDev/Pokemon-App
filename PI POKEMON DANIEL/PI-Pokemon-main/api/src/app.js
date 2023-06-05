const express = require('express');
const morgan = require('morgan');
const router= require('./routes/index.js');
const cors = require('cors')
const server = express();
require('./db.js');

require('dotenv').config()
server.use(express.json())
server.use(cors({
  origin: 'http://localhost:3000'
}));
server.use('/', router);

// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});


module.exports = server;

// status: completed
