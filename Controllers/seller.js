const Catalog = require('../Models/Catalog');
const Item = require('../Models/Item');
const Order = require('../Models/Order');
// Create a catalog for a seller
const createCatalog = async (req, res) => {
    try {
        const { sellerId, items } = req.body;

        // Check if the seller already has a catalog
        const existingCatalog = await Catalog.findOne({ seller: sellerId });

        if (existingCatalog) {
            // Add items to the existing catalog
            const itemIds = existingCatalog.items;

            for (const itemData of items) {
                const item = new Item({ ...itemData, seller: sellerId });
                await item.save();
                itemIds.push(item._id);
            }

            // Update the catalog with the additional item references
            await Catalog.findByIdAndUpdate(existingCatalog._id, { items: itemIds });

            return res.status(200).json({ message: 'Items added to the catalog' });
        } else {
            // Create a new catalog for the seller
            const catalog = new Catalog({ seller: sellerId, items: [] });

            for (const itemData of items) {
                const item = new Item({ ...itemData, seller: sellerId });
                await item.save();
                catalog.items.push(item._id);
            }

            await catalog.save();

            return res.status(201).json({ message: 'Catalog created with items' });
        }
    } catch (error) {
        res.status(400).json({ error: 'Catalog creation or item addition failed' });
    }
};


//Get the list of orders received by a seller
const getOrders = async (req, res) => {
    try {
        const { sellerId } = req.params;

        // Find orders where the sellerId matches the specified seller
        const orders = await Order.find({ sellerId });

        res.status(200).json(orders);
    } catch (error) {
        res.status(400).json({ error: 'Failed to retrieve orders' });
    }
};


module.exports = { createCatalog, getOrders };
