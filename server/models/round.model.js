const mongoose = require('mongoose');

const RoundSchema = new mongoose.Schema({
    roomId: { 
        type: String,
        required: [
            true,
            "Room id is required"
        ]
    },
    number: { 
        type: Number,
        required: [
            true,
            "Number is required"
        ]
    }
}, { timestamps: true });

module.exports.Round = mongoose.model('Round', RoundSchema);