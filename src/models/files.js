const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// file schema
const fileSchema = new Schema({
  path: {
    type: String,
    required: true,
  },
  originalname: {
    type: String,
    required: true,
  },
});

module.exports = File = mongoose.model('file', fileSchema);
