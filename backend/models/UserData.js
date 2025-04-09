const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  FullName: { type: String, required: true },
  FirstName: { type: String, required: true },
  LastName: { type: String, required: true },
  contact: { type: String },
  gmail: { type: String },
  Prn: { type: String },
  Branch: { type: String },
  Term: { type: String },
  Profile: { type: String }, // e.g., URL to the profile image
  Banner: { type: String },  // e.g., URL to the banner image
  Biotag: { type: String },
  LongBio: { type: String },
  ShortBio: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('UserData', profileSchema);
