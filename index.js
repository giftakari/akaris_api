const express = require("express");
const mongoose = require("mongoose");
const routes = require("./src/routes/akarisRoutes");
const app = express();


//DB CONNECTION
  mongoose.connect('mongodb://localhost/Akarisdb', {
      useNewUrlParser: true,
      useCreateIndex: true
    })
    .then(() => console.log("DB Connected. Great!!"));

//MIDDLEWARE
app.use(express.json());


//==SERVING ROUTES



//====SERVER===
const port = process.env.PORT || 3000;
app.listen(port, () =>
  console.log(`My application app listening on port ${port}!`)
);
