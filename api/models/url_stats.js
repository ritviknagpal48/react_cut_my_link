const mongoose = require('mongoose');

const url_statsSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  long_url: { type: String, required: true },
  short_url: { type: String, required: true },
  country: { type: String, required: true },
  state: { type: String, required: true },
  time: { type: String, required: true }
});
module.exports = mongoose.model('Url_stats', url_statsSchema);
