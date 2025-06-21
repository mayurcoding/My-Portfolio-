const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();

// Connect to Database (only if MONGODB_URI is available)
if (process.env.MONGODB_URI) {
    connectDB();
} else {
    console.log('MongoDB URI not found, skipping database connection');
}

// Init Middleware
app.use(cors());
app.use(express.json());

// Define Routes
app.use('/', require('./routes/main'));
app.use('/api/contact', require('./routes/contact'));

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', message: 'Server is running' });
});

const port = process.env.PORT || 5000;

// Only start server if not in Vercel environment
if (process.env.NODE_ENV !== 'production' || !process.env.VERCEL) {
    app.listen(port, () => {
        console.log(`Server is running on port: ${port}`);
    });
}

module.exports = app; 