const mongoose = require('mongoose');

let options = { useUnifiedTopology: true, useNewUrlParser: true };

let connection1 = mongoose.createConnection(
  'mongodb://127.0.0.1/reservationsDB',
  options
);
let connection2 = mongoose.createConnection(
  'mongodb://127.0.0.1/clientProfileDB',
  options
);
let connection3 = mongoose.createConnection(
  'mongodb://127.0.0.1/providerProfileDB',
  options
);

connection1.on('error', console.error.bind(console, 'connection error:'));
connection2.on('error', console.error.bind(console, 'connection error:'));
connection3.on('error', console.error.bind(console, 'connection error:'));

connection1.once('open', () => {
  console.log('connected to reservationsDB !!');
});
connection2.once('open', () => {
  console.log('connected to clientProfileDB !!');
});
connection3.once('open', () => {
  console.log('connected to providerProfileDB !!');
});

const reservationSchema = new mongoose.Schema({
  title: String,
  author: String,
  body: String
});
const clientProfileSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
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
  activeReservation: [{ fromReservation: String }]
});
const providerProfileSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
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
  activeReservation: [{ fromReservation: String }]
});

let ReservationModel = connection1.model(
  //model for Reservation db
  'Reservations',
  reservationSchema
);
let ClientProfileModal = connection2.model(
  //model for ClientProfile db
  'ClientProfile',
  clientProfileSchema
);
let ProviderProfileModal = connection3.model(
  //model for ProviderProfile db
  'ProviderProfile',
  providerProfileSchema
);

// let newReservation = new ReservationModel({
//   reservation: 'todays news',
//   author: 'christopher',
//   body: 'hello world!!!'
// });
// let newClientProfile = new ClientProfileModal({
//   name: 'christopher',
//   last_name: 'fajardo'
// });
// let newProviderProfile = new ProviderProfileModal({
//   name: 'mason',
//   last_name: 'fajardo'
// });
// newReservation.save((err) => {
//   if (err) return console.log(err);
// });
// newClientProfile.save((err) => {
//   if (err) return console.log(err);
// });
// newProviderProfile.save((err) => {
//   if (err) return console.log(err);
// });
