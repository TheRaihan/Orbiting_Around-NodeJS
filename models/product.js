const fs = require("fs");
const path = require("path");

const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "products.json"
);

const getProdFFile = (cb) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) cb([]);
    else cb(JSON.parse(fileContent));
  });
};

module.exports = class Product {
  constructor(title, imgURL, des, price) {
    this.title = title;
    this.imgURL = imgURL;
    this.des = des;
    this.price = price;
  }

  save() {
    this.id = Math.random().toString();
    getProdFFile((products) => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    getProdFFile(cb);
  }
};
