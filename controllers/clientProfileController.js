const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../models');
const chalk = require('chalk');
const keys = require('../config/keys');

const REDIRECT_LINK = process.env.NODE_ENV
  ? 'http://127.0.0.1:3000'
  : 'https://c-fajardo.com';

module.exports = {
  registerFacebook: function(req, res) {
    console.log(chalk.hex('#348ceb')(JSON.stringify(req.user, null, 2)));
    // Find user by email
    db.User.findOne({ 'facebook.userID': req.user._json.id })
      .then(function(user) {
        if (user) {
          let payload = {
            id: user.id,
            name: user.name,
            email: user.email,
            photo: user.photo,
            phone: user.phone,
            isTxtActive: user.isTxtActive,
            since: user.createdAt,
            isPremium: user.isPremium
          };
          // Sign token
          jwt.sign(
            payload,
            keys.secretOrKey,
            {
              expiresIn: 31556926 // 1 year in seconds
            },
            (err, token) => {
              console.log(REDIRECT_LINK);
              // res.set("Bearer" + token);
              res.redirect(`${REDIRECT_LINK}?token=${token}`);
            }
          );
        } else {
          db.User.create({
            'facebook.userID': req.user._json.id,
            name: req.user._json.name,
            email: req.user._json.email,
            photo: req.user._json.picture.data.url,
            password: req.user._json.id
          })
            .then(function(user) {
              let payload = {
                id: user.id,
                name: user.name,
                email: user.email,
                photo: user.photo,
                phone: user.phone,
                isTxtActive: user.isTxtActive,
                since: user.createdAt,
                isPremium: user.isPremium
              };
              // Sign token
              jwt.sign(
                payload,
                keys.secretOrKey,
                {
                  expiresIn: 31556926 // 1 year in seconds
                },
                (err, token) => {
                  console.log(REDIRECT_LINK);
                  res.redirect(`${REDIRECT_LINK}?token=${token}`);
                }
              );
            })
            .catch((err) => {
              console.log(err);
            });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
  registerGoogle: function(req, res) {
    console.log(chalk.red(JSON.stringify(req.user, null, 2)));
    // Find user by email
    db.User.findOne({ 'google.userID': req.user._json.sub })
      .then(function(user) {
        if (user) {
          // User matched ? Create JWT Payload :
          let payload = {
            id: user.id,
            name: user.name,
            email: user.email,
            photo: user.photo,
            phone: user.phone,
            isTxtActive: user.isTxtActive,
            isPremium: user.isPremium,
            since: user.createdAt
          };
          // Sign token
          jwt.sign(
            payload,
            keys.secretOrKey,
            {
              expiresIn: 31556926 // 1 year in seconds
            },
            (err, token) => {
              console.log(REDIRECT_LINK);
              res.redirect(`${REDIRECT_LINK}?token=${token}`);
            }
          );
        } else {
          db.User.create({
            'google.userID': req.user._json.sub,
            name: req.user._json.name,
            email: req.user._json.email,
            photo: req.user._json.picture,
            password: req.user._json.sub
          })
            .then(function(user) {
              let payload = {
                id: user.id,
                name: user.name,
                email: user.email,
                photo: user.photo,
                isPremium: user.isPremium,
                since: user.createdAt
              };
              // Sign token
              jwt.sign(
                payload,
                keys.secretOrKey,
                {
                  expiresIn: 31556926 // 1 year in seconds
                },
                (err, token) => {
                  console.log(REDIRECT_LINK);
                  res.redirect(`${REDIRECT_LINK}?token=${token}`);
                }
              );
            })
            .catch((err) => {
              console.log(err);
            });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
};
