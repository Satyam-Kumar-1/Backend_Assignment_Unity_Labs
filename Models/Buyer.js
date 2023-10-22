
const mongoose = require('mongoose');

const buyerSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true,
    },
    
});

module.exports = mongoose.model('Buyer', buyerSchema);
