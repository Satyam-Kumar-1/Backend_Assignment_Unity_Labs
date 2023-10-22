// models/Buyer.js
const mongoose = require('mongoose');

const buyerSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true,
    },
    // Add buyer-specific fields here
});

module.exports = mongoose.model('Buyer', buyerSchema);
