const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");

const connect = async () => {
  try {
    await mongoose.connect(
      process.env.DB || "mongodb://localhost/my_database",
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
    console.log("Conectado a la base de datos" + process.env.DB);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connect;
