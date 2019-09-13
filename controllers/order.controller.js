const order_contoller = exports;
let Order = require('../models/order.model')
let sms_controller = require('../controllers/sms.controller')


order_contoller.sendOrderNumber = ({ph_no,order_id})=>{
    let phNo ='44';
    phNo+= ph_no;
    let otp = Math.floor(Math.random() * 90000) + 10000;
    sms_controller.sendSMS(phNo,"Your Order no is"+order_id);
    return ;
}

order_contoller.create_order = ({phNo,cart})=>{
    let order = new Order();
    order.ph_no=phNo;
    order.order_id = Math.floor(Math.random()*900)+100;
    order.cart=cart;
    order.save();
    //send SMS
    this.sendOrderNumber(order);
    return 'Order placed'

}