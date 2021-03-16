const express = require('express');
const parser = require('body-parser');
const path = require('path');
const router = require('./routes.js');

const app = express();
const port = 8000;

app.use(parser.json());

app.use('/', express.static(path.join(__dirname, '/../public')), router);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/../public/index.html'));
})

app.listen(port, () => {
  console.log(`>>> Listening on port ${port} <<<`);
});