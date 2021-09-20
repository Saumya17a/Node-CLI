const mongoose = require('mongoose');

// Create a schema for the customer

const customerSchema = mongoose.Schema({
    firstname: { type: String },
    lastname: { type: String },
    phone: { type: String },
    email: { type: String }
  });
  
  // Export
  module.exports = mongoose.model('Customer', customerSchema);