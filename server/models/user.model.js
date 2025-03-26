const mongoose = require('mongoose');
const EMAIL_REGEX = /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/;

function emailValidation(val){
    return EMAIL_REGEX.test(val);
}

const UserSchema = new mongoose.Schema({
    nickname: { 
        type: String,
        required: [
            true,
            "Nickname is required"
        ],
        trim: true,
    },
    email: { 
        type: String,
        required: [
            true,
            "Email is required"
        ],
        unique: [
            true,
            "Email must be unique"
        ],
        trim: true,
        validate: {
            validator: val => emailValidation(val),
            message: "Please enter a valid email"
        }
    }
}, { timestamps: true });

module.exports.User = mongoose.model('User', UserSchema);