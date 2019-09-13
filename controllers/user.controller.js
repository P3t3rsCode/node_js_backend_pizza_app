const user_controller = exports;
let User = require('../models/user.model')
let sms_controller = require('../controllers/sms.controller')


user_controller.sendOTP = ({ph_no})=>{
    let phNo ='44';
    phNo+= ph_no;
    let otp = Math.floor(Math.random() * 90000) + 10000;
    sms_controller.sendSMS(phNo,"Your OTP is"+otp);
    this.create_user(phNo,otp)
    return 'OTP Sent'
}

user_controller.verifyOTP =async ({otp,ph_no})=>{
    let phNo ='44';
    phNo+= ph_no;
   let user = await User.find({ph_no:phNo});
   if(user[0].otp==otp) return 'success';
   return 'failed'
   
}

user_controller.create_user = (phNo,otp)=>{
    let user = new User();
    user.otp=otp;
    user.ph_no=phNo;
    user.save();

}