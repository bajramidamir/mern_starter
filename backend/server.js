require('dotenv').config();

// IMPORTS
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');

// SERVER INITIALIZATION
const PORT = process.env.PORT;
const app = express();

// DATABASE CONNECTION
connectDB();

// MIDDLEWARE
app.use(express.json());
app.use(cors());

// ROUTES
app.use('/api/auth', authRoutes);


app.listen(PORT, () => {
    console.log("Server is running on: http://localhost:3000");
});
