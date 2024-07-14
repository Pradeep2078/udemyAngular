const mongoose = require("mongoose");

require("dotenv").config();

const connect = () => {
  mongoose
    .connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("DB Connected Successfully"))
    .catch((err) => {
      console.log("DB Connection Issuesss");
      console.log(err);
      process.exit(1);
    });
};

module.exports = connect;
