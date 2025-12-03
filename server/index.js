import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import OpenAI from 'openai';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Initialize OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// Middleware
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());

// Sample product inventory data
const productInventory = [
  { id: 1, name: 'Laptop Pro 15', category: 'Electronics', price: 1299.99, stock: 45, description: 'High-performance laptop with 16GB RAM' },
  { id: 2, name: 'Wireless Mouse', category: 'Accessories', price: 29.99, stock: 150, description: 'Ergonomic wireless mouse with USB receiver' },
  { id: 3, name: 'USB-C Hub', category: 'Accessories', price: 49.99, stock: 80, description: '7-in-1 USB-C hub with HDMI and card reader' },
  { id: 4, name: 'Mechanical Keyboard', category: 'Accessories', price: 89.99, stock: 60, description: 'RGB mechanical keyboard with blue switches' },
  { id: 5, name: 'Monitor 27"', category: 'Electronics', price: 349.99, stock: 30, description: '4K UHD monitor with HDR support' },
  { id: 6, name: 'Webcam HD', category: 'Electronics', price: 79.99, stock: 95, description: '1080p webcam with built-in microphone' },
  { id: 7, name: 'Desk Lamp LED', category: 'Office', price: 39.99, stock: 120, description: 'Adjustable LED desk lamp with touch control' },
  { id: 8, name: 'Office Chair', category: 'Furniture', price: 249.99, stock: 25, description: 'Ergonomic office chair with lumbar support' },
  { id: 9, name: 'Standing Desk', category: 'Furniture', price: 499.99, stock: 15, description: 'Electric height-adjustable standing desk' },
  { id: 10, name: 'Headphones Wireless', category: 'Audio', price: 159.99, stock: 70, description: 'Noise-cancelling wireless headphones' }
];

// System prompt for the chatbot
const systemPrompt = `You are a helpful product inventory assistant. You have access to the following product inventory:

${JSON.stringify(productInventory, null, 2)}

Your role is to:
1. Answer questions about product availability, prices, and specifications
2. Help users find products based on their needs
3. Provide information about stock levels
4. Suggest products based on categories or price ranges
5. Be friendly, concise, and helpful

When answering:
- Always reference actual products from the inventory
- Provide specific details like prices and stock levels
- If a product is out of stock (stock = 0), mention it
- If asked about a product not in inventory, politely say it's not available
- Format prices with currency symbols ($);
- Keep responses conversational and helpful`;

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' })
});

// Get all products endpoint
app.get('/api/products', (req, res) => {
  res.json({ products: productInventory })
});

// Chat endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { message, conversationHistory = [] } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' })
    }

    // Build messages array for OpenAI
    const messages = [
      { role: 'system', content: systemPrompt },
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

    const assistantMessage = completion.choices[0].message.content;

    res.json({
      message: assistantMessage,
      conversationHistory: [
        ...conversationHistory,
        { role: 'user', content: message },
        { role: 'assistant', content: assistantMessage }
      ]
    })
  } catch (error) {
    console.error('Error in chat endpoint:', error);
    
    if (error.code === 'insufficient_quota') {
      return res.status(429).json({
        error: 'OpenAI API quota exceeded. Please check your API key and billing.' 
      })
    }
    
    if (error.code === 'invalid_api_key') {
      return res.status(401).json({
        error: 'Invalid OpenAI API key. Please check your configuration.' 
      })
    }

    res.status(500).json({ 
      error: 'Failed to process chat message',
      details: error.message 
    })
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`CORS enabled for: ${process.env.CLIENT_URL || 'http://localhost:5173'}`);
  
  if (!process.env.OPENAI_API_KEY) {
    console.warn('WARNING: OPENAI_API_KEY not set in environment variables')
  }
});