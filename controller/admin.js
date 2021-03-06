const Product = require("../models/product");

exports.getAddPrdct = (req, res, next) => {
  res.render("admin/add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
  });
};

exports.postAddPrdct = (req, res, next) => {
  const title = req.body.title;
  const imgURL = req.body.imgURL;
  const price = req.body.price;
  const des = req.body.des;
  const product = new Product(title, price, des, imgURL);
  product
    .save()
    .then((result) => {
      console.log("Created Product");
      res.redirect("/admin/products");
    })
    .catch((err) => console.log(err));

  res.redirect("/");
};
/*
exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("admin/products", {
      prods: products,
      pageTitle: "Admin Products",
      path: "/admin/products",
    });
  });
};

*/
