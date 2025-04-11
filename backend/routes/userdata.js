const express = require('express');
const router = express.Router();
const UserData = require('../models/UserData');

// GET: Fetch user profile by Username
router.get('/:Username', async (req, res) => {
  try {
    const userProfile = await UserData.findOne({ Username: req.params.Username });
    if (!userProfile) {
      return res.status(404).json({ message: 'Profile not found' });
    }
    res.status(200).json(userProfile);
  } catch (err) {
    console.error('Error fetching profile:', err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
