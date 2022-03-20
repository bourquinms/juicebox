require('dotenv').config();

const PORT = 3000;
const express = require('express');
const server = express();
const apiRouter = require('./api');
const { client } = require('./db');
client.connect();

const morgan = require('morgan');
server.use(morgan('dev'));
const bodyParser = require('body-parser');
server.use(bodyParser.json());
server.use(express.json())

server.use('/api', apiRouter);

server.listen(PORT, () => {
  console.log('The server is up on port', PORT)
});

