// models/Seller.js
const mongoose = require('mongoose');

const sellerSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true,
    },
    // Add seller-specific fields here
});

module.exports = mongoose.model('Seller', sellerSchema);
