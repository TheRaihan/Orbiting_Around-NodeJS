const path = require("path");

const express = require("express");
const bdParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/Shop");
const errRoutes = require("./controller/404");

app.use(express.static(path.join(__dirname, "public")));

app.use(bdParser.urlencoded({ extended: false }));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errRoutes.errorCntrl);

app.listen(3000);
