const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    contact_no: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    state: {
        type: String,
    },
    referral_code: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const userModel = mongoose.model('user', userSchema);

module.exports = userModel