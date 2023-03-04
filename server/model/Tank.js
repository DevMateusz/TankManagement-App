const mongoose = require('mongoose');

const TankSchema = new mongoose.Schema({
  flankNumber: { type: String, required: true },
  producent: { type: String, required: true },
  model: { type: String, required: true },
  actualModification: { type: String, required: true },
  vintage: { 
    type: Number,
    required: true,
    validate: {
      validator: function(value) {
        const currentYear = new Date().getFullYear();
        return value >= 1900 && value <= currentYear;
      },
      message: 'Vintage must be a whole number between 1900 and the current year'
    }
  },
  entryDate: {
    type: String,
    required: true,
    validate: {
      validator: function(value) {
        const today = new Date();
        const minDate = new Date('1970-01-01');
        const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
        if (!dateRegex.test(value)) {
          return false;
        }
        const date = new Date(value);
        return date >= minDate && date <= today;
      },
      message: 'Entry date must be a date between 1970 and today in the format yyyy-mm-dd'
    }
  },
  
  mileage: { 
    type: Number, 
    required: true,
    validate: {
      validator: function(value) {
        return value >= 0;
      },
      message: 'Mileage must be a non-negative number'
    }
  },
  ammunition: { type: Number, required: true },
  armorThickness: [{ type: Number, required: true }],
  user: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
},{
  timestamps: true,
});

module.exports = mongoose.model('Tank', TankSchema);
