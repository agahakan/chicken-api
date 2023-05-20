const mongoose = require('mongoose');

const farmyardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
});

module.exports = mongoose.model('Farmyard', farmyardSchema);
