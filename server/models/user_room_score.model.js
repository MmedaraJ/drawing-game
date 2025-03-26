const mongoose = require('mongoose');

const UserRoomScoreSchema = new mongoose.Schema({
    roomId: { 
        type: String,
        required: true
    },
    userId: { 
        type: String,
        required: true
    },
    score: { 
        type: Number,
        required: true,
        default: 0
    }
}, { timestamps: true });

module.exports.UserRoomScore = mongoose.model('User', UserRoomScoreSchema);