
const mongoose = require('mongoose');
require('dotenv').config();

const mongoURI = process.env.DATA_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI);

    console.log('database connected' );
  } catch (err) {
    console.error('Mongoose connection error: ' + err);
    process.exit(1); // Exit process with failure
  }

  mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
  });
};

module.exports = connectDB;
