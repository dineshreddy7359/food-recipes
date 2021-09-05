const mongoose = require('mongoose');

const usersSchema = mongoose.Schema({
    userName: { type: String, required: true },
    emailId: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
    token: { type: String, required: true }
});

usersSchema.index({ userName: 1, emailId: 1, password: 1 }, { unique: true });
const users = mongoose.model('users', usersSchema);
module.exports = users;
