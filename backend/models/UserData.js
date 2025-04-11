const mongoose = require('mongoose');

const userDataSchema = new mongoose.Schema({
  FullName: { type: String, required: true },
  FirstName: { type: String, required: true },
  LastName: { type: String, required: true },
  contact: { type: String, required: true },
  gmail: { type: String, required: true },
  Prn: { type: String, required: true },
  Branch: { type: String, required: true },
  Term: { type: String, required: true },
  Profile: { type: String, required: true },
  Banner: { type: String, required: true },
  Biotag: { type: String, required: true },
  LongBio: { type: String, required: true },
  ShortBio: { type: String, required: true }
});

const userSchema = new mongoose.Schema({
  Username: { type: String, required: true, unique: true },
  UserData: { type: userDataSchema, required: true }
});

module.exports = mongoose.model('users', userSchema); // users is name of collectioon
