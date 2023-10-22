const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    buyerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Buyer', 
        required: true,
    },
    sellerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Seller', 
        required: true,
    },
    items: [
        {
            item: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Item', 
                required: true,
            },
            quantity: {
                type: Number,
                required: true,
            },
        },
    ],
    
});

module.exports = mongoose.model('Order', orderSchema);
