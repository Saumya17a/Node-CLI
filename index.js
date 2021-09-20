// Import mongoose
const mongoose = require('mongoose');

// Import Customer Model
const Customer = require('./models/customer');

// Import dotenv
const dotenv = require('dotenv');


// Config the dotenv file
dotenv.config()
mongoose.Promise = global.Promise

// Connect to database
const db = mongoose.connect(process.env.DATABASE_ACCESS);


{/* Below are the set pf CRUD functions for the customer*/}

// Add Customer
const addCustomer = (customer) => {
    // Use the create method of the mongoose
    Customer.create(customer)
    .then(
        (customer) => {
            console.info('Added a new customer');
        });
}

  
  // Find Customer
  const findCustomer = (name) => {
    // 'i' will make the case insensitive
    const search = new RegExp(name, 'i');

    // Use the find method of mongoose
    Customer.find({$or: [{firstname: search}, {lastname: search}]})
      .then(customer => {
        console.info(customer);
        console.info(customer.length + ' matches found');
        
      });
  }
  
  // Update Customer
  const updateCustomer = (_id, customer) => {
    // Use the update method of mongoose
    Customer.updateOne({ _id }, customer)
      .then(customer => {
        console.info('Customer is now Updated');
      
      });
  }
  
  // Remove Customer
  const removeCustomer = (_id) => {
    // Use the remove method of mongoose
    Customer.remove({ _id })
      .then(customer => {
        console.info('Customer Removed');
      
      });
  }
  
  // List Customers
  const listCustomers = () => {

    // Find will find all the collections if no criteria is specified
    Customer.find()
      .then(customers => {
        console.info(customers);
        console.info(customers.length +  ' customer(s) are in your current system');
      });
  }
  

  // Export All Methods
  module.exports = {
    addCustomer,
    findCustomer,
    updateCustomer,
    removeCustomer,
    listCustomers
  }