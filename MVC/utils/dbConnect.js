const mongoose = require("mongoose");
module.exports = mongoose
  .connect(
    "mongodb+srv://inovotek:Y8MtpWcYhID3JlwS@mongodb-demo.lqjq2rn.mongodb.net/school?retryWrites=true&w=majority"
  )
  .then(() => console.log("Db connected"))
  .catch(err => console.log(err.message));
