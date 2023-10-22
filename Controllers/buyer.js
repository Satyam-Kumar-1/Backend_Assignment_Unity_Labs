const Seller = require('../Models/Seller');
const Catalog = require('../Models/Catalog');
const Item = require('../Models/Item');
const Order = require('../Models/Order');
const User = require('../Models/Users');

// Get a list of all sellers
const getListOfSellers = async (req, res) => {
    try {
        const sellers = await Seller.find().populate('userId');
        res.status(200).json(sellers);
    } catch (error) {
        res.status(400).json({ error: 'Failed to retrieve sellers' });
    }
};

// Get the catalog of a seller by sellerId
const getSellerCatalog = async (req, res) => {
    try {
        const { sellerId } = req.params;
        const catalog = await Catalog.findOne({ seller: sellerId }).populate('items');
        if (!catalog) {
            return res.status(404).json({ error: 'Seller catalog not found' });
        }
        res.status(200).json(catalog);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to retrieve seller catalog' });
    }
};

// Create an order for a seller with sellerId
const createOrder = async (req, res) => {
    try {
        const { sellerId } = req.params;
        const { items, buyerId } = req.body; // Ensure you provide the buyer's user ID in the request

        const order = new Order({
            buyerId, // Use the correct field name "buyerId"
            sellerId,
            items,
        });

        await order.save();

        res.status(201).json({ message: 'Order created successfully' });
    } catch (error) {
        res.status(400).json({ error: 'Order creation failed' });
    }
};

module.exports = { getListOfSellers, getSellerCatalog, createOrder };
