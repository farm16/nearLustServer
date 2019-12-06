const mongoose = require('mongoose');

const ReservationSchema = new mongoose.Schema({
  reservationType: String,
  reservationCreationTime: { type: Date, default: Date.now },
  _reservationToId: Schema.Types.ObjectId,
  _reservationFromId: Schema.Types.ObjectId,
  reservationTimeIn: Date,
  reservationTimeOut: Date,
  isActive: Boolean,
  isUpdated: Boolean,
  note: String
});

module.exports = mongoose.model('Reservation', ReservationSchema);
