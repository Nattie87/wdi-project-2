const mongoose = require("mongoose");

const feministSchema = new mongoose.Schema({
  name:        { type: String, trim: true, required: true },
  image:       { type: String, trim: true, required: true },
  date:        { type: String, trim: true, required: true},
  description: { type: String, trim: true },
  location:    { type: String, trim: true, required: true},
  lat:         { type: String, time: true, required: true },
  lng:         { type: String, time: true, required: true },
}, {
  timestamps: true
});

module.exports = mongoose.model("Feminist", feministSchema);
