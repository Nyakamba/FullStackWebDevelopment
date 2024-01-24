const mongoose = require("mongoose");

//connect to mongoose
mongoose
  .connect(
    "mongodb+srv://omwegaenock:XqpFEe3sJXtadKMe@cluster0.ogu2spg.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("Db connected"))
  .catch((error) => console.log(error.message));
