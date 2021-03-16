const db = require('./mongo.js');
const ContactModel = require('./schema.js');


module.exports = {
  get: async (callback) => {
    try {
      const data = await ContactModel.find({});
      callback(null, data);
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

