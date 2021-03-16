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
    console.log(body);
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

  update: async (payload) => {
    const x = await ContactModel.findOneAndUpdate(
      {symbol: payload[i].symbol},
      {
        maxsupply: Math.floor(payload[i].max_supply).toString(),
        circsupply: Math.floor(payload[i].circulating_supply).toString(),
        totsupply: Math.floor(payload[i].total_supply).toString(),
        rank: payload[i].cmc_rank,
      }
    )
    console.log(x);
  },
};

