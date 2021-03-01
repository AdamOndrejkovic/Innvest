const mongoose = require('mongoose');
const mongooseTypePhone = require('mongoose-type-phone');

const UserSchema = new mongoose.Schema({
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
    phoneNumber: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('user', UserSchema);