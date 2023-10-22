
const mongoose = require('mongoose');

const sellerSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true,
    },
    
});

module.exports = mongoose.model('Seller', sellerSchema);
