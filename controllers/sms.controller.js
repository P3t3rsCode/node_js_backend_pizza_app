
const sms_controller = exports;

const Nexmo = require("nexmo");
const  nexmo_api_key = process.env.NEXMO_API_KEY;
const  nexmo_api_secret = process.env.NEXMO_API_SECRET;


const nexmo = new Nexmo({
    apiKey: nexmo_api_key,
    apiSecret: nexmo_api_secret
  });

const from = "Tominos";

sms_controller.sendSMS =(ph_no,text)=>{
    nexmo.message.sendSms(from, ph_no, text);

}