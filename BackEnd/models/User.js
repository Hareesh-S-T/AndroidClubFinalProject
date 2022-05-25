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
    dob: {
        type: Date,
        required: true,
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
    pfpURI: {
        type: String,
        default: 'https://www.pngarts.com/files/10/Default-Profile-Picture-Transparent-Image.png',
    },
    notes: {
        type: String,
    },
    topic: {
        type: String,
        default: 'home',
    }
    // otpCreatedAt: {
    //     type: Date,
    //     required: true,
    //     default: Date.now,
    // },
})

module.exports = mongoose.model('User', userSchema);