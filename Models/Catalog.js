const mongoose = require('mongoose');

const catalogSchema = new mongoose.Schema({
    seller: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Seller',
        required: true,
    },
    items: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Item',
        },
    ],
});

module.exports = mongoose.model('Catalog', catalogSchema);
