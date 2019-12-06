module.exports = {
  mongoURI: 'mongodb://127.0.0.1:27017/starkclass',
  secretOrKey: 'tadeo',
  saltWorkFactor: 10,
  apiUrl: process.env.URL,
  googleClientId: process.env.GOOGLECLIENTID,
  googleClientSecret: process.env.GOOGLECLIENTSECRET,
  facebookClientId: process.env.FACEBOOKCLIENTID,
  facebookClientSecret: process.env.FACEBOOKCLIENTSECRET
};
