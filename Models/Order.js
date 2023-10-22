const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    buyerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Buyer', // Reference to the Buyer model
        required: true,
    },
    sellerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Seller', // Reference to the Seller model
        required: true,
    },
    items: [
        {
            item: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Item', // Reference to the Item model
                required: true,
            },
            quantity: {
                type: Number,
                required: true,
            },
        },
    ],
    // Other order-specific fields
});

module.exports = mongoose.model('Order', orderSchema);
