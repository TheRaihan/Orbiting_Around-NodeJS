const express = require("express");
const router = express.Router();
const prdCntrl = require("../controller/products");

// admin/add-product -- GET
router.get("/add-product", prdCntrl.getAddPrdct);

// admin/add-product -- POST
router.post("/add-product", prdCntrl.postAddPrdct);

module.exports = router;
