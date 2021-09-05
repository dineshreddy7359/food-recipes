const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const config = require('./../config/keys');
const MongoStore = require('connect-mongo')(session);
var flash = require('express-flash');

/* add backend data passing routes here */
const recipes = require('./recipes');
const users = require('./users');
const login = require('./login');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({ secret: config.secret, resave: true, saveUninitialized: false, store: new MongoStore({mongooseConnection: mongoose.connection, autoReconnect: true})}));
app.use(cookieParser(config.secret));
app.use(cors());
app.use(flash());
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
        res.setHeader(
            "Access-Control-Allow-Methods",
            "GET, POST, PATCH, PUT, DELETE, OPTIONS"
        );
        return res.status(200).json({});
    }
    next();
});

/* server methods include here */
app.use('/recipes', recipes);
app.use('/users', users);
app.use('/login', login);

/* Connecting mongodb */
mongoose.connect(config.mongoURI, config.mongoCFG).then(() => {
    console.log('Connected Successfully to Database');
})
.catch((error) => {
    console.log('error', JSON.stringify(error));
    console.log('Connection Failed to Database');
});

module.exports = app;