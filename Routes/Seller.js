const express = require('express');
const router = express.Router();
const sellerController = require('../Controllers/seller');

// POST /api/seller/create-catalog
router.post('/create-catalog', sellerController.createCatalog);

// GET /api/seller/orders/:sellerId
router.get('/orders/:sellerId', sellerController.getOrders);

module.exports = router;
