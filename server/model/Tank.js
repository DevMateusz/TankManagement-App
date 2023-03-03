const mongoose = require('mongoose');

const TankSchema = new mongoose.Schema({
  flankNumber: { type: String, require: true  },
  poducent: { type: String, require: true },
  model: { type: String, require: true },
  actualModification: { type: String, require: true },
  vintage: { type: Number, require: true },
  entryDate: { type: Date, require: true },
  mileage: { type: Number, require: true },
  ammunition: { type: Number, require: true },
  armorThickness: [{ type: Number, require: true }],
  user: [{type: mongoose.Schema.Types.ObjectId, ref:'User'}],
},{
  timestamps: true,
});

module.exports = mongoose.model('Tank', TankSchema);