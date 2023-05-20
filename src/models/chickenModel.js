const mongoose = require('mongoose');

const chickenSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  birthday: {
    type: Date,
  },
  weight: {
    type: Number,
    required: true,
  },
  steps: {
    type: Number,
    default: 0,
  },
  isRunning: {
    type: Boolean,
    default: false,
  },
  farmyard: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Farmyard'
  },
  coop: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Coop'
  },
});

module.exports = mongoose.model('Chicken', chickenSchema);
