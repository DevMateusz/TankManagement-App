const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  fullName: { type: String, require: true  },
  email: { type: String, require: true, lowercase: true, maxlength: 255 },
  countryOrigin: { type: String, require: true },
  password: { type: String, require: true },
  atomicButton: { type: Boolean },
  tanks: [{type: mongoose.Schema.Types.ObjectId, ref:'Tank'}],
},{
  timestamps: true,
});

module.exports = mongoose.model('User', UserSchema);