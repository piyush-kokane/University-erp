const express = require('express');
const mongoose = require("mongoose");
const router = express.Router();
const UserData = require('../models/UserData');

// GET: Fetch user profile by Username
router.get('/:Username', async (req, res) => {
  try {
    const username = req.params.Username.trim();
    const userProfile = await UserData.findOne({ Username: username });

    if (!userProfile) {
      return res.status(404).json({ message: 'Profile not found' });
    }
    res.status(200).json(userProfile);
  }
  catch (error) {
    console.error('Error fetching profile:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
