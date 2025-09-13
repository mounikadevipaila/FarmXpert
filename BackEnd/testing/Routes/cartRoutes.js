const express = require('express');
const router = express.Router();
const CartItem = require('../models/cartModel'); // make sure you import the CartItem model
const { addToCart, getCartItems, removeFromCart, updateQuantity } = require('../Controller/cartController');

// Add item to cart
router.post('/add', addToCart);

// Get all cart items
router.get('/', getCartItems);

// Remove an item by ID
router.delete('/remove/:id', removeFromCart);

// Update quantity of an item by ID
router.put('/update/:id', updateQuantity);

// Clear the cart
router.delete('/clear', async (req, res) => {
  try {
    await CartItem.deleteMany({});
    res.status(200).json({ message: "Cart cleared successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
