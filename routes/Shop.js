const express = require("express");
const router = express.Router();
const shpCtrl = require("../controller/shop");

router.get("/", shpCtrl.getIndex);

router.get("/products", shpCtrl.getPrdct);

router.get("/cart", shpCtrl.getCart);

router.get("/orders", shpCtrl.getOrders);

router.get("/checkout", shpCtrl.getCheckout);

module.exports = router;
