const mongoose = require('mongoose');

const communitySchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  contactNumber: { type: String, required: true },
  price: { type: Number, required: true },
  eventName: { type: String, required: true },
  paymentId: { type: String, required: true },
  verified: { type: Boolean, required: true },
}, { timestamps: true });

const Community = mongoose.model('Community', communitySchema);

module.exports = Community;