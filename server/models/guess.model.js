const mongoose = require('mongoose');

const GuessSchema = new mongoose.Schema({
    drawingId: { 
        type: String,
        required: true
    },
    userId: { 
        type: String,
        required: true
    },
    guess: { 
        type: String,
        trim: true
    }
}, { timestamps: true });

module.exports.Guess = mongoose.model('User', GuessSchema);