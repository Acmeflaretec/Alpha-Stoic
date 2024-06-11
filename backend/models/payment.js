const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  contactNumber: { type: String, required: true },
  price: { type: Number, required: true },
  eventName: { type: String, required: true },
  paymentId: { type: String, required: true },
  verified: { type: Boolean, required: true },
}, { timestamps: true });

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;