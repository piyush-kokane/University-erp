const express = require('express');
const router = express.Router();
const User = require('../models/UserSchema');

router.get('/:Username', async (req, res) => {
  try {
    const username = req.params.Username;
    const user = await User.findOne({ Username: username });
    const data = user.Documents;

    if (!data) {
      console.error('❌ Error: Documents not found');
      return res.status(404).json({ message: 'data not found' });
    }

    res.status(200).json(data);
  }
  catch (error) {
    console.error('❌ Error fetching Documents:', error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
