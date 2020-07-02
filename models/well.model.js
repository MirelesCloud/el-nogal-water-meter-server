const mongoose = require('mongoose')

const Schema = mongoose.Schema

const wellSchema = new Schema({
  start: { type: Number, required: true },
  end: { type: Number, required: true },
  startDate: { type: String, required: false },
  endDate: { type: String, required: false },
  startTime: { type: String, required: false },
  endTime: { type: String, required: false },
  inchesPerAcre: { type: Number, required: false },
  acreFeet: { type: Number, required: false },
  acres: { type: Number, required: false },
  hours: { type: Number, required: false }
},
  { timestamps: true}
)

module.exports = mongoose.model('el_nogal', wellSchema)