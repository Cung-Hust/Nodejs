const path = require("path");
const express = require("express");
const morgan = require("morgan");
const exphbs = require("express-handlebars");
const app = express();
const port = 3000;

// HTTP logger
// app.use(morgan("combined"));

// load img
app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({
  extended: true,
}))
app.use(express.json());


// Template Engine
app.engine("hbs", exphbs({
  extname: ".hbs"
}));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/news", (req, res) => {
  res.render("news");
});

app.get("/search", (req, res) => {
  res.render("search");
});

app.post("/search", (req, res) => {
  res.send("");
  console.log(req.body.search);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
