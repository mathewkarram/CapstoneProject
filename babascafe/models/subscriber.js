let mongoose = require('mongoose');
const subscriberSchema = new mongoose.Schema({
    name: String,
    email: String,
  });

let Subscriber= module.exports = mongoose.model('Subscriber', subscriberSchema);