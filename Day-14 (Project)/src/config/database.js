const mongoose = require("mongoose")

const connectToDB = () => {
    mongoose.connect(process.env.MONGO_URL).then(() => {
      console.log("Connect to Database");
    });
}

module.exports=connectToDB