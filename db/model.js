const db = require('./mongo.js');
const ContactModel = require('./schema.js');


module.exports = {
  delete: async (data, callback) => {
    try {
      await ContactModel.findOneAndDelete({email: data.email});
      callback(null);
    } catch (e) {
      callback(e);
    }
  },

  get: async (callback) => {
    try {
      const data = await ContactModel.find({});
      callback(null, data);
    } catch (e) {
      callback(e);
    }
  },

  post: async (body, callback) => {
    try {
      const post = new ContactModel({
        first: body.data.first,
        last: body.data.last,
        phone: body.data.phone,
        email: body.data.email,
      });
      await post.save((err) => {
        if (err) {
          console.log('failed to add to db');
        } else {
          console.log('added to db');
        }
      })
      callback(null);
    } catch (e) {
      callback(e);
    }
  },

  patch: async (body, callback) => {
    try {
      console.log(body.data);
      const x = await ContactModel.findOneAndUpdate(
        {_id: body.data.id},
        {
          first: body.data.first,
          last: body.data.last,
          phone: body.data.phone,
          email: body.data.email
        }
      )
      callback(null);
    } catch (e) {
      callback(e);
    }
  },
};

