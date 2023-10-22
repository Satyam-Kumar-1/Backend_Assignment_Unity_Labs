const express = require('express');
const router = express.Router();
const buyerController = require('../Controllers/buyer');

// GET /api/buyer/list-of-sellers
router.get('/list-of-sellers', buyerController.getListOfSellers);

// GET /api/buyer/seller-catalog/:sellerId
router.get('/seller-catalog/:sellerId', buyerController.getSellerCatalog);

// POST /api/buyer/create-order/:sellerId
router.post('/create-order/:sellerId', buyerController.createOrder);

module.exports = router;
