const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport');

const GOOGLE_CLIENT_ID = '1022311605083-ffjs73tub3834q0jksgcmhq97e3viqom.apps.googleusercontent.com';

const GOOGLE_CLIENT_SECRET = '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';

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://www.example.com/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
   done(null , profile)
  }
));

passport.serializeUser((user, done ) => {
    done( null, user )
})

passport.deserializeUser((user, done ) => {
    done( null, user )
})