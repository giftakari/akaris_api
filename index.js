const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const routes = require("./src/routes/akarisRoutes");

const app = express();

const port = process.env.PORT || 3000;

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/Akarisdb", {
  useMongoClient: true
});

//body-parder
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.get("/", (req, res) => res.send("<h1>Hello World!</h1>"));

app.listen(port, () =>
  console.log(`My application app listening on port ${port}!`)
);
