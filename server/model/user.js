const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type:String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  location: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  education: {
    type:String,
    required:true,
  },
  about:{
    type:String
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;