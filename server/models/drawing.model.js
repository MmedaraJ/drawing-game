const mongoose = require('mongoose');

const DrawingSchema = new mongoose.Schema({
    roundId: { 
        type: String,
        required: [
            true,
            "Round id is required"
        ]
    },
    userId: { 
        type: String,
        required: [
            true,
            "User id is required"
        ]
    }
}, { timestamps: true });

module.exports.Drawing = mongoose.model('Drawing', DrawingSchema);