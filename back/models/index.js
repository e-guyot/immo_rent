const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ImmoSchema = new Schema({
  immo      : {
    title   : String,
    adress  : String,
    cp      : Number,
    desc    : String,
    price   : Number,
    country : String,
  }
});

const Immo = mongoose.model("immo", ImmoSchema);

module.exports = Immo;
