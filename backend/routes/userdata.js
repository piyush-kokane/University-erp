const express = require('express');
const router = express.Router();
const Profile = require('../models/UserData');

// POST: Create a new profile
router.post('/', async (req, res) => {
  try {
    const newProfile = new Profile(req.body);
    const savedProfile = await newProfile.save();
    res.status(201).json(savedProfile);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET: Fetch all profiles
router.get('/', async (req, res) => {
  try {
    const profiles = await Profile.find();
    res.status(200).json(profiles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET: Fetch a single profile by ID
router.get('/:id', async (req, res) => {
  try {
    const profile = await Profile.findById(req.params.id);
    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }
    res.status(200).json(profile);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
