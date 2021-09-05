const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const config = require('./../config/keys');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
var users = require('./../schemaModels/users');

router.use(passport.initialize());
router.use(passport.session());

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((obj, done) => {
    done(null, obj);
});

passport.use(new LocalStrategy({usernameField: 'userName', passwordField: 'password', passReqToCallback: true}, (req, userName, password, done) => {
    users.find({userName: userName, password: password}, (err, data) => {
        if(err) {
            return done(null, JSON.stringify(err));
        }
        else {
            const resData = {};
            if(data.length > 0) {
                data.forEach(element => {
                    if(element.userName == userName && element.password == password) {
                        var jwtToken  = authenticateJWTToken(element.token);
                        if(jwtToken !== undefined && jwtToken !== null) {
                            resData['userName'] = element.userName;
                            resData['password'] = element.password;
                            resData['emailId'] = element.emailId;
                            resData['role'] = element.role;
                            resData['userToken'] = element.token;
                        }
                        else {
                            return done(null, req.flash(JSON.stringify({error: 'JsonWebTokenError: invalid signature!...'})));
                        }
                    }
                });
                return done(null, JSON.stringify(resData));
            }
            else {
                return done(null, req.flash(JSON.stringify({error: 'UnAuthorised!...'})));
            }
        }
    });
}));

router.post('/users/authenticate', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) { return next(err); }
        if (!user) { return res.redirect('/login'); }
        if (user.length > 0) {
            req.logIn(user, (err) => {
                if (err) { return next(err); }
                return res.status(200).send(user);
            });
        } else {
            return res.status(500).send({error: 'UnAuthorised!...'});
        }
      })(req, res, next);
});

function authenticateJWTToken(token) {
    const SECRET = config.secret;
    return jwt.verify(token, SECRET);
};

module.exports = router;
