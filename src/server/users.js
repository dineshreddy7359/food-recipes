const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const config = require('./../config/keys');
var users = require('./../schemaModels/users');

/* get users list. */
router.get('/getUserDetails', (req, res, next) => {
    users.find((err, data) => {
        if(err) {
            res.send(JSON.stringify(err));
        }
        else {
            res.send(data);
        }
    });
});

/* post users data. */
router.post('/saveUserDetails', (req, res, next) => {
    var jwtToken  = generateJWTToken(req.body.userName, req.body.emailId);
    var userObject = {
        userName: req.body.userName,
        emailId: req.body.emailId,
        password: req.body.password,
        role: req.body.role,
        token: jwtToken
    };
    users.create(userObject, (err, data) => {
        if(err) {
            res.send(JSON.stringify(err));
        }
        else {
            res.send(data);
        }
    });
});

/* patch or update users data. */
router.patch('/updateUserDetails', (req, res, next) => {
    users.findByIdAndUpdate((err, data) => {
        if(err) {
            res.send(JSON.stringify(err));
        }
        else {
            res.send(data);
        }
    });
});

/* delete user from users list. */
router.delete('/deleteUserDetails', (req, res, next) => {
    users.remove((err, data) => {
        if(err) {
            res.send(JSON.stringify(err));
        }
        else {
            res.send(data);
        }
    });
});

function generateJWTToken(userName, emailId) {
    const HEADER = {
        algorithm: 'HS256',
        // expiresIn: 60 * 60
    };
    const PAYLOAD = {
        client_id: config.clientId, 
        client_secret: config.clientSecret,
        user_name: userName,
        email_id: emailId
    };
    const SECRET = config.secret;
    return jwt.sign(PAYLOAD, SECRET, HEADER);
};

module.exports = router;
