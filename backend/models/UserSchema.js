const mongoose = require('mongoose');

const userDataSchema = new mongoose.Schema({
  Role: { type: String, required: true, enum: ["student", "faculty", "admin"] },
  Status: { type: String, required: true }, 
  FullName: { type: String, required: true },
  FirstName: { type: String, required: true },
  LastName: { type: String, required: true },
  Contact: { type: String, required: true },
  Gmail: { type: String, required: true },
  Prn: { type: String, required: true },
  Branch: { type: String, required: true },
  Term: { type: String, required: true },
  Profile: { type: String, required: true },
  Banner: { type: String, required: true },
  Biotag: { type: String, required: true },
  LongBio: { type: String, required: true },
  ShortBio: { type: String, required: true }
});

const UserSchema = new mongoose.Schema({
  Username: { type: String, required: true, unique: true },
  Password: { type: String, required: true },
  UserData: { type: userDataSchema, required: true }
});

module.exports = mongoose.model('users', UserSchema); // users is name of collectioon
