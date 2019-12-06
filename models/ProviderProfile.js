const mongoose = require('mongoose');

const ProviderProfileSchema = new mongoose.Schema({
  name: { first: String, last: String },
  businessInfo: {
    name: String,
    location: {
      xAxis: Number,
      yAxis: Number
    },
    address: String,
    phone: String
  },
  age: String,
  phone: String,
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

module.exports = mongoose.model('ProviderProfile', ProviderProfileSchema);
