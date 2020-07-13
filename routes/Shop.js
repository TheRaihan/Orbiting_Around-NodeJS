const express = require('express');
const path = require('path');
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
    // console.log('shop.js-> ',adminData.products);
    const products = adminData.products;

    // res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
    res.render('shop',{prods: products});   
});


module.exports = router;