const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({ 
   
  fullName: {
    type: String, 
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },


  username: {
    type: String, 
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },


  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address.']
  },

  phoneNumber: {
    type: String, 
    required: true,
    unique: true,
    trim: true,
    minlength: 10
  },

  password: {
    type: String,
    required: true,
    minlength: 8
  },


  Country: {
    type: String, 
    required: true,
    unique: true,
    trim: true,
  },

 
  createdAt: {
    type: Date,
    default: Date.now
  }

});

const User = mongoose.model('Users', userSchema);

module.exports = User;