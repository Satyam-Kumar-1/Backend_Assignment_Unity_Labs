const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    seller: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Seller', // Reference to the Seller model
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    // Other item-specific fields
});

module.exports = mongoose.model('Item', itemSchema);
