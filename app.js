const path = require("path");

const express = require("express");
const bdParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/Shop");

app.use(express.static(path.join(__dirname, "public")));

app.use(bdParser.urlencoded({ extended: false }));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "Page not Found", path: "" });
  //   res.status(404).send("<h1>Page not found</h1>" );
});

app.listen(3000);
