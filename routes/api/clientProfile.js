const chalk = require('chalk');
const router = require('express').Router();
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const { google, facebook } = require('../../config/socialAuth');
const {
  registerFacebook,
  registerGoogle
} = require('../../controllers/providerProfileController');
passport.use(
  new FacebookStrategy(
    facebook, //facebook settings
    async (accessToken, refreshToken, profile, cb) => {
      return cb(null, profile);
    }
  )
);
passport.use(
  new GoogleStrategy(
    google, //google settings
    async (accessToken, refreshToken, profile, cb) => {
      return cb(null, profile);
    }
  )
);

router
  .route('/auth/facebook') //login user with facebook
  .get(passport.authenticate('facebook'));
router
  .route('/auth/facebook/callback') //login user
  .get(
    passport.authenticate('facebook', {
      failureRedirect: '/auth/facebook'
    }),
    registerFacebook
  );
router
  .route('/auth/google') //login user with google
  .get(
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );
router
  .route('/auth/google/callback') //login user
  .get(
    passport.authenticate('google', {
      failureRedirect: '/auth/google'
    }),
    registerGoogle
  );
module.exports = router;
