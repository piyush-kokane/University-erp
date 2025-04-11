// routes/auth.js
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/UserSchema');
require('dotenv').config();

router.post('/login', async (req, res) => {
  const { Username, Password } = req.body;
  try {
    // Find user by username
    const user = await User.findOne({ Username });
    if (!user) {
      return res.status(401).json({ message: 'Invalid username' });
    }

    // Compare password
    const isMatch = await bcrypt.compare(Password, user.Password);
    console.log(isMatch)
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    // Create JWT payload
    const payload = { userId: user._id };

    // Sign token
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Send token and user data to client
    res.json({ token, userData: user.UserData });
  }
  catch (err) {
    console.error('Login error:', err.message);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
