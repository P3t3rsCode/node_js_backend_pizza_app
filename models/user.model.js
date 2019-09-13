

const mongoose = require('mongoose');


var UserSchema = new mongoose.Schema({
    ph_no:String,
    otp:String,
  }, {timestamps: true});


 const user =  mongoose.model('User', UserSchema);

  module.exports = user;