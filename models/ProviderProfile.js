const mongoose = require("mongoose");

const ProviderProfileSchema = new mongoose.Schema({
  Name: { first: String, last: String },
  age: String,
  phoneNumber: String,
  googleInfo: {
    picture: String,
    id: String
  },
  facebookInfo: {
    picture: String,
    id: String
  },
  activeReservations: [{ fromReservation: String }]
});

module.exports = mongoose.model("ProviderProfile", ProviderProfileSchema);
