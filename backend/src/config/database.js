const mongoose = require("mongoose")

const connectToDB = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("Connected to DB");
    })
    .catch((error) => {
      console.log("Error connecting to DB:", error);
    });
};


module.exports=connectToDB