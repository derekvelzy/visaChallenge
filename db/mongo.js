const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/visacontacts');

const db = mongoose.connection;

db.on('error', console.error.bind('console', 'connection error to database'));

db.once('open', (err) => {
  if (err) {
    console.log('error connecting to mongo', err);
  } else {
    console.log('~~~ Connected to db visacontacts ~~~');
  }
});

module.exports = db;