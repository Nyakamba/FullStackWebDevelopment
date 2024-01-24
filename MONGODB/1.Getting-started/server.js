const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");
const app = express();
const PORT = 5000;
//useraneme:omwegaenock

//connect to mongodb
//1.Create the client
const client = new MongoClient(
  "mongodb+srv://omwegaenock:xEeDNDmj7un0meYi@myfirstproject.dkrmwcc.mongodb.net/students-database",
  {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  }
);
//*function to connect
const connectDB = async () => {
  try {
    await client.connect();
    console.log("MongoDB Connected successifully");
    //1.Database name(school)
    const database = client.db("masynctech");
    //2.Collections(students)
    const students = database.collection("students");
    //! ----CREATE  OPERATIONS---
    //3.Document() using the insertOne
    // const result = await students.insertOne({
    //   name: "Agnes",
    //   age: 20,
    //   subjects: ["Maths", "Physics"],
    // });

    //3.Document() using the insertMany
    // const result = await students.insertMany([
    //   {
    //     name: "John",
    //     age: 26,
    //     grade: "B",
    //     pass: false,
    //     subjects: ["Chemistry", "Biology"],
    //   },
    //   {
    //     name: "Joseph",
    //     age: 30,
    //     grade: "B",
    //     pass: false,
    //     subjects: ["Chemistry", "Biology"],
    //   },
    // ]);

    //! ----READ  OPERATIONS---
    //! Find()
    // resultCursor = students.find();
    // const result = await resultCursor.toArray();
    //! FindOne()
    const result = await students.findOne({ name: "Joseph" });
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
//*call the function
connectDB();
//* start the server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
