const express = require("express");
const router = express.Router();
const prdCtrl = require("../controller/products");

router.get("/", prdCtrl.getPrdct);

module.exports = router;
