const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const cookie_parser = require("cookie-parser");
const PORT = process.env.PORT || 80;

const app = express();

app.use(cors());
app.use(cookie_parser());
app.use(express.json());

app.listen(PORT, (req, res) => console.log(res));
