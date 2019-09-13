const router = require('express').Router();
let User = require('../controllers/user.controller')



router.route('/sendOTP').post((req,res)=>{
  
   res.send(User.sendOTP(req.body))
})


router.route('/verifyOTP').post((req,res)=>{
  
    res.send(User.verifyOTP(req.body))
 })


module.exports=router;