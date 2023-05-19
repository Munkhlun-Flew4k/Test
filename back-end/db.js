const mongoose = require("mongoose");
const uri =
  "mongodb+srv://Flew4k:FB5JI3Jm2V426QLG@cluster0.qmtq56c.mongodb.net/";

const connect = async () => {
  try {
    await mongoose.connect(uri);
    console.log("DB connected successfully");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connect;
