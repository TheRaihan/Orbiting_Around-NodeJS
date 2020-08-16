const products = [];

exports.getAddPrdct = (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};

exports.postAddPrdct = (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect("/");
};

exports.getPrdct = (req, res, next) => {
  // console.log('shop.js-> ',adminData.products);
  // res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
  res.render("shop", {
    prods: products,
    pageTitle: "Shop",
    path: "/",
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true,
  });
};
