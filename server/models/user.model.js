const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: [
            true,
            "Name is required"
        ],
        unique: [
            true,
            "Name must be unique"
        ],
        trim: true
    }
}, { timestamps: true });

module.exports.User = mongoose.model('User', UserSchema);
