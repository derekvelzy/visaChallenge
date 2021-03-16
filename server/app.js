const express = require('express');
const parser = require('body-parser');
const path = require('path');

const app = express();
const port = 8000;

app.use('/', express.static(path.join(__dirname, '/../public')));

app.listen(port, () => {
  console.log(`>>> Listening on port ${port} <<<`);
});