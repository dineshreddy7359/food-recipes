module.exports = {
    secret: 'mean',
    // clientId: 'xhLpk3gkmhEcG9kesJ0AX7e4NG3fwIgl',
    // clientSecret: 'uqW0Xzqhwij-m67UKF7whvd5XDUPIYGwmDDcEHVkTcNbKaemAneFJtZGfZ4StQIo',
    mongoURI: 'mongodb+srv://DBUser:DBAccess@123@dbcluster1.7dpvl.mongodb.net/DBProject1?retryWrites=true&w=majority',
    mongoCFG: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        ssl: true,
        authSource: 'admin',
        retryWrites: true
    }
};
