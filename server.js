const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitnessdb", { useNewUrlParser: true });


require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);


// Start the server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});