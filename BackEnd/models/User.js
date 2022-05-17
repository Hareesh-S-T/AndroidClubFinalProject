const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    verified: {
        type: Boolean,
        required: true,
        default: false
    },
    otp: {
        type: Number,
        required: true,
        min: 1000,
        max: 9999
    },
    otpCreatedAt: {
        type: Date,
        required: true,
        default: Date.now,
    },
    forgotPWOTP: {
        type: Number
    }
})

module.exports = mongoose.model('User', userSchema);