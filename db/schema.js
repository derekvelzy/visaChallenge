const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
  first: String,
  last: String,
  phone: String,
  email: String,
});

module.exports = mongoose.model('ContactModel', contactSchema);