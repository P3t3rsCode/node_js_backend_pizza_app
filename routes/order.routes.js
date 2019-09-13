const router = require('express').Router();
let Order = require('../controllers/order.controller')



router.route('/placeOrder').post((req,res)=>{
  
   res.send(Order.create_order(req.body))
})




module.exports=router;