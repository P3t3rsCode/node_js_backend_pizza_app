const router = require('express').Router();
let User = require('../controllers/user.controller')



router.route('/sendOTP').post((req,res)=>{
  
   res.send(User.sendOTP(req.body))
})


router.route('/verifyOTP').post((req,res)=>{
    User.verifyOTP(req.body).then(result=>res.send(result))
 })

 router.route('/test').get((req,res)=>{
     res.send('helllo');
 })


module.exports=router;