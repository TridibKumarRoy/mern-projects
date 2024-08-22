const mongoose = require("mongoose");

exports.DBConnect = async () => {
  await mongoose
    .connect(process.env.DATABASEURI)
    .then(() => console.log("Connected! to database"));
};


