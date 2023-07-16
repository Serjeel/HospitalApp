require("./config/database").connect();
const express = require("express");
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const productsRoute = require("./routes/productsRoute");

app.use("/products", productsRoute);

module.exports = app;