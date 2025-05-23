const express = require('express');
const router = express.Router();
const User = require('../models/UserSchema');

// GET: Fetch user profile by Username
router.get('/:Username', async (req, res) => {
  try {
    const username = req.params.Username;
    const user = await User.findOne({ Username: username });
    const data = user.UserData;

    if (!data) {
      console.error('❌ Error: UserData not found');
      return res.status(404).json({ message: 'Profile not found' });
    }

    res.status(200).json(data);
  }
  catch (error) {
    console.error('❌ Error fetching profile:', error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
