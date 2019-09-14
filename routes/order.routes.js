const router = require("express").Router();
let Order = require("../controllers/order.controller");

router.route("/placeOrder").post((req, res) => {
  res.send(Order.create_order(req.body));
});

router.route("/AllItems").get(async (req, res) => {
  let temp = await Order.get_all_items();
  res.jsonp(temp);
});

module.exports = router;
