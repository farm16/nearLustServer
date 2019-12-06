require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const fs = require('fs');
const https = require('https');
const cors = require('cors');

const app = express();
const routes = require('./routes');
app.use(cors());
passport.serializeUser((user, cb) => {
  cb(null, user);
});
passport.deserializeUser((user, cb) => {
  cb(null, user);
});
app.use(passport.initialize());

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

connection1
  .on(
    'error',
    console.error.bind(console, 'connection error on reservationsDB:')
  )
  .once('open', () => {
    console.log('connected to reservationsDB !!');
  });
connection2
  .on(
    'error',
    console.error.bind(console, 'connection error on clientProfileDB:')
  )
  .once('open', () => {
    console.log('connected to clientProfileDB !!');
  });
connection3
  .on(
    'error',
    console.error.bind(console, 'connection error on providerProfileDB:')
  )
  .once('open', () => {
    console.log('connected to providerProfileDB !!');
  });
