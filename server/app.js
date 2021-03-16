const express = require('express');
const parser = require('body-parser');
const path = require('path');
const router = require('./routes.js');

const app = express();
const port = 8000;

app.use('/', express.static(path.join(__dirname, '/../public')), router);

app.listen(port, () => {
  console.log(`>>> Listening on port ${port} <<<`);
});