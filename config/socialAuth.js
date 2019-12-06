const {
  apiUrl,
  googleClientId,
  googleClientSecret,
  facebookClientSecret,
  facebookClientId
} = require('./keys');

module.exports = {
  facebook: {
    clientID: facebookClientId,
    clientSecret: facebookClientSecret,
    callbackURL: `${apiUrl}/api/users/auth/facebook/callback`,
    profileFields: [
      'id',
      'email',
      'displayName',
      'name',
      'gender',
      'picture.type(large)'
    ]
  },
  google: {
    clientID: googleClientId,
    clientSecret: googleClientSecret,
    callbackURL: `${apiUrl}/api/users/auth/google/callback`,
    profileFields: [
      'id',
      'email',
      'displayName',
      'name',
      'gender',
      'picture.type(large)'
    ]
  }
};
