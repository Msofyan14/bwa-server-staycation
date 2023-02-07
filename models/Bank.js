const mongoose = require("mongoose");

const bankSchema = new mongoose.Schema({
  nameBank: {
    type: String,
    required: true,
  },
  nomorRekening: {
    type: Number,
    require: true,
  },
  name: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Bank", bankSchema);
