const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema({
    code: { 
        type: String,
        required: [
            true,
            "Room code is required"
        ],
        trim: true,
    },
    ownerId: { 
        type: String,
        required: [
            true,
            "Owner id is required"
        ]
    }
}, { timestamps: true });

module.exports.Room = mongoose.model('Room', RoomSchema);