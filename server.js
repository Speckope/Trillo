/* eslint-disable no-path-concat */

const path = require('path');
const express = require('express');

const app = express();

const hostname = '127.0.0.1';
const port = 3000;

app.listen(port, hostname, () => {
  console.log(`Listening on port ${port}`);
  console.log(`${__dirname}`); // eslint-disable-line no-undef
});

app.use(express.static(path.join(__dirname, 'public'))); // eslint-disable-line no-undef

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html'); // eslint-disable-line no-undef
});
