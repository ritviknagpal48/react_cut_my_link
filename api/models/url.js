const mongoose = require('mongoose');

const urlSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  long_url: { type: String, required: true },
  base_url: { type: String, required: true },
  short_id: { type: String, required: true },
  date: { type: String, default: Date.now }
});
module.exports = mongoose.model('Url', urlSchema);
