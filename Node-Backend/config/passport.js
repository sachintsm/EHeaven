var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
const config = require('./database');
const User = require('../models/users');

const opts = {};

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
opts.secretOrKey = config.secret;
module.exports = function(passport){    
    passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
        User.findUserById({_id: jwt_payload._doc._id}, function(err, user) {
            if (err) {
                return done(err, false);
            }
            if (user) {
                done(null, user);
            } else {
                done(null, false);
                // or you could create  a new account
            }
        });
    }));
}