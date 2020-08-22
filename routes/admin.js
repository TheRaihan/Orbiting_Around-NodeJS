const express = require("express");
const router = express.Router();
const adminCntrl = require("../controller/admin");

// admin/add-product -- GET
router.get("/add-product", adminCntrl.getAddPrdct);

// admin/add-product -- POST
router.post("/add-product", adminCntrl.postAddPrdct);

// router.get("/products", adminCntrl.getProducts);

module.exports = router;
