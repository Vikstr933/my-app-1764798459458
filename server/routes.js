import express from 'express';
import OpenAI from 'openai';

const router = express.Router();

// Sample product inventory data
const productInventory = [
  { id: 1, name: 'Laptop Pro 15', category: 'Electronics', price: 1299.99, stock: 45, description: 'High-performance laptop with 16GB RAM' },
  { id: 2, name: 'Wireless Mouse', category: 'Accessories', price: 29.99, stock: 150, description: 'Ergonomic wireless mouse with USB receiver' },
  { id: 3, name: 'USB-C Hub', category: 'Accessories', price: 49.99, stock: 80, description: '7-in-1 USB-C hub with HDMI and card reader' },
  { id: 4, name: 'Mechanical Keyboard', category: 'Accessories', price: 89.99, stock: 60, description: 'RGB mechanical keyboard with blue switches' },
  { id: 5, name: '27" Monitor', category: 'Electronics', price: 349.99, stock: 30, description: '4K UHD monitor with HDR support' },
  { id: 6, name: 'Webcam HD', category: 'Electronics', price: 79.99, stock: 95, description: '1080p webcam with built-in microphone' },
  { id: 7, name: 'Laptop Stand', category: 'Accessories', price: 39.99, stock: 120, description: 'Adjustable aluminum laptop stand' },
  { id: 8, name: 'External SSD 1TB', category: 'Storage', price: 129.99, stock: 70, description: 'Portable SSD with USB 3.2 Gen 2' },
  { id: 9, name: 'Noise-Cancelling Headphones', category: 'Audio', price: 199.99, stock: 40, description: 'Wireless headphones with active noise cancellation' },
  { id: 10, name: 'Desk Lamp LED', category: 'Accessories', price: 34.99, stock: 85, description: 'Adjustable LED desk lamp with USB charging port' }
];

// In-memory cart storage (in production, use a database)
const carts = new Map();

// Initialize OpenAI client
let openai = null;
try {
  openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
  })
} catch (error) {
  console.error('Failed to initialize OpenAI:', error.message)
}

// GET /api/products - Get all products
router.get('/products', async (req, res) => {
  try {
    const { category, search, minPrice, maxPrice } = req.query;
    let filteredProducts = [...productInventory];

    if (category) {
      filteredProducts = filteredProducts.filter(p => p.category.toLowerCase() === category.toLowerCase())
    }

    if (search) {
      const searchLower = search.toLowerCase();
      filteredProducts = filteredProducts.filter(p => 
        p.name.toLowerCase().includes(searchLower) || 
        p.description.toLowerCase().includes(searchLower)
      )
    }

    if (minPrice) {
      filteredProducts = filteredProducts.filter(p => p.price >= parseFloat(minPrice))
    }

    if (maxPrice) {
      filteredProducts = filteredProducts.filter(p => p.price <= parseFloat(maxPrice))
    }

    res.json({ success: true, data: filteredProducts, count: filteredProducts.length })
  } catch (error) {
    res.status(500).json({ success: false, error: error.message })
  }
});

// GET /api/products/:id - Get product by ID
router.get('/products/:id', async (req, res) => {
  try {
    const productId = parseInt(req.params.id);
    const product = productInventory.find(p => p.id === productId);

    if (!product) {
      return res.status(404).json({ success: false, error: 'Product not found' })
    }

    res.json({ success: true, data: product })
  } catch (error) {
    res.status(500).json({ success: false, error: error.message })
  }
});

// GET /api/cart - Get cart items
router.get('/cart', async (req, res) => {
  try {
    const sessionId = req.headers['x-session-id'] || 'default';
    const cart = carts.get(sessionId) || [];
    
    const cartWithDetails = cart.map(item => {
      const product = productInventory.find(p => p.id === item.productId);
      return {
        ...item,
        product: product || null,
        subtotal: product ? product.price * item.quantity : 0
      }
    });

    const total = cartWithDetails.reduce((sum, item) => sum + item.subtotal, 0);

    res.json({ success: true, data: cartWithDetails, total })
  } catch (error) {
    res.status(500).json({ success: false, error: error.message })
  }
});

// POST /api/cart - Add item to cart
router.post('/cart', async (req, res) => {
  try {
    const sessionId = req.headers['x-session-id'] || 'default';
    const { productId, quantity = 1 } = req.body;

    if (!productId) {
      return res.status(400).json({ success: false, error: 'Product ID is required' })
    }

    const product = productInventory.find(p => p.id === parseInt(productId));
    if (!product) {
      return res.status(404).json({ success: false, error: 'Product not found' })
    }

    if (product.stock < quantity) {
      return res.status(400).json({ success: false, error: 'Insufficient stock' })
    }

    let cart = carts.get(sessionId) || [];
    const existingItem = cart.find(item => item.productId === parseInt(productId));

    if (existingItem) {
      existingItem.quantity += quantity
    } else {
      cart.push({ productId: parseInt(productId), quantity })
    }

    carts.set(sessionId, cart);

    res.json({ success: true, message: 'Item added to cart', data: cart })
  } catch (error) {
    res.status(500).json({ success: false, error: error.message })
  }
});

// DELETE /api/cart/:productId - Remove item from cart
router.delete('/cart/:productId', async (req, res) => {
  try {
    const sessionId = req.headers['x-session-id'] || 'default';
    const productId = parseInt(req.params.productId);

    let cart = carts.get(sessionId) || [];
    cart = cart.filter(item => item.productId !== productId);
    carts.set(sessionId, cart);

    res.json({ success: true, message: 'Item removed from cart', data: cart })
  } catch (error) {
    res.status(500).json({ success: false, error: error.message })
  }
});

// POST /api/chat - Chat with AI about products
router.post('/chat', async (req, res) => {
  try {
    const { message, conversationHistory = [] } = req.body;

    if (!message) {
      return res.status(400).json({ success: false, error: 'Message is required' })
    }

    if (!openai) {
      return res.status(500).json({ success: false, error: 'OpenAI API is not configured. Please set OPENAI_API_KEY in .env file' })
    }

    // Create system message with product inventory context
    const systemMessage = {
      role: 'system',
      content: `You are a helpful product inventory assistant. You help customers find products, answer questions about inventory, and provide recommendations.

Available Products:
${productInventory.map(p => `- ${p.name} (ID: ${p.id}): ${p.description}. Price: $${p.price}, Stock: ${p.stock}, Category: ${p.category}`).join('\n')}

When customers ask about products:
1. Provide accurate information based on the inventory above
2. Suggest relevant products based on their needs
3. Mention stock availability and pricing
4. Be friendly and helpful
5. If they want to add items to cart, mention the product ID

If asked about stock, prices, or product details, use the exact information from the inventory above.`
    };

    // Build messages array
    const messages = [
      systemMessage,
      ...conversationHistory,
      { role: 'user', content: message }
    ];

    // Call OpenAI API
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: messages,
      temperature: 0.7,
      max_tokens: 500
    });

    const aiResponse = completion.choices[0].message.content;

    // Extract product IDs mentioned in the response (for potential cart additions)
    const mentionedProductIds = [];
    productInventory.forEach(product => {
      if (aiResponse.includes(`ID: ${product.id}`) || aiResponse.toLowerCase().includes(product.name.toLowerCase())) {
        mentionedProductIds.push(product.id)
      }
    });

    res.json({
      success: true,
      data: {
        response: aiResponse,
        mentionedProducts: mentionedProductIds.length > 0 ? productInventory.filter(p => mentionedProductIds.includes(p.id)) : [],
        conversationHistory: [
          ...conversationHistory,
          { role: 'user', content: message },
          { role: 'assistant', content: aiResponse }
        ]
      }
    })
  } catch (error) {
    console.error('Chat error:', error);
    res.status(500).json({ success: false, error: error.message || 'Failed to process chat message' })
  }
});

// GET /api/categories - Get all unique categories
router.get('/categories', async (req, res) => {
  try {
    const categories = [...new Set(productInventory.map(p => p.category))];
    res.json({ success: true, data: categories })
  } catch (error) {
    res.status(500).json({ success: false, error: error.message })
  }
});

export default router;