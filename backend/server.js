const express = require('express');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/userdata', require('./routes/userDataRoutes'));
app.use('/api/moreinfo', require('./routes/moreInfoRoutes'));
app.use('/api/address', require('./routes/addressRoutes'));
app.use('/api/parentinfo', require('./routes/parentInfoRoutes'));
app.use('/api/documents', require('./routes/documentsRoutes'));

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error('❌ Server Error:', err.message);
  res.status(500).json({ message: 'Internal Server Error' });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✔️ㅤServer running on port ${PORT}`));


// Find Hashed Password, comment out when not in need
/*
const Password = "456";
const saltRounds = 10;
bcrypt.hash(Password, saltRounds, (err, hashed) => {
  if (err) console.error("Error hashing password:", err);
  else console.log("Hashed Password:", hashed);
});
*/