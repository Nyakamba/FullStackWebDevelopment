const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");
const app = express();
const PORT = 5000;

//connect to mongodb
//1.Create the client
const client = new MongoClient("some mongodb url", {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
//*function to connect
const connectDB = async () => {
  try {
    await client.connect();
    console.log("MongoDB Connected successifully");
  } catch (error) {
    console.log(error);
  }
};
//*call the function
connectDB();
//* start the server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
