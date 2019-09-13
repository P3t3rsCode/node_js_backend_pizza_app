

const mongoose = require('mongoose');


var OrderSchema = new mongoose.Schema({
    ph_no:String,
    oder_id:String,
    cart:Array
  }, {timestamps: true});


 const order =  mongoose.model('Orders', OrderSchema);

  module.exports = order;