const mongoose = require("mongoose");

const ClientProfileSchema = new mongoose.Schema({
  Name: { first: String, last: String },
  age: String,
  companyName: String,
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

module.exports = mongoose.model("ClientProfile", ClientProfileSchema);
