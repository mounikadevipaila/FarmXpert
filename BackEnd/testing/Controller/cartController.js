const CartItem = require('../Models/cartModel');

// Add to cart
const addToCart = async (req, res) => {
  try {
    console.log("🛒 Incoming addToCart request:", req.body);
    const { name, image, price, quantity, subtotal } = req.body;
    const newItem = new CartItem({ name, image, price, quantity, subtotal });
    const saved = await newItem.save();
    res.status(201).json({ message: 'Item added to cart', item: saved });
  } catch (err) {
    console.error("❌ Cart save failed:", err);
    res.status(500).json({ error: err.message });
  }
};

// Get all cart items
const getCartItems = async (req, res) => {
  try {
    const items = await CartItem.find();
    res.status(200).json(items);
  } catch (err) {
    console.error("❌ Fetch cart items failed:", err);
    res.status(500).json({ error: err.message });
  }
};

// Delete item by ID
const removeFromCart = async (req, res) => {
  try {
    console.log("🗑️ Removing cart item with ID:", req.params.id);
    const deleted = await CartItem.findByIdAndDelete(req.params.id);

    if (!deleted) {
      console.warn("⚠️ Cart item not found for ID:", req.params.id);
      return res.status(404).json({ message: 'Item not found' });
    }

    res.status(200).json({ message: 'Item deleted', item: deleted });
  } catch (err) {
    console.error("❌ Remove from cart failed:", err);
    res.status(500).json({ error: err.message });
  }
};

// Update quantity and subtotal
const updateQuantity = async (req, res) => {
  try {
    const { quantity, subtotal } = req.body;
    console.log("🔄 Updating cart item ID:", req.params.id, "to quantity:", quantity, "subtotal:", subtotal);

    const updated = await CartItem.findByIdAndUpdate(
      req.params.id,
      { quantity, subtotal },
      { new: true }
    );

    if (!updated) {
      console.warn("⚠️ Cart item not found for update, ID:", req.params.id);
      return res.status(404).json({ message: 'Item not found for update' });
    }

    res.status(200).json({ message: 'Quantity updated', item: updated });
  } catch (err) {
    console.error("❌ Update quantity failed:", err);
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  addToCart,
  getCartItems,
  removeFromCart,
  updateQuantity
};

