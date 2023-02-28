const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const MongoClient = require("mongodb").MongoClient;
const routesurl = require("./Routes/Routes");

//app config

const app = express();
var PORT = process.env.PORT || 4000;
require("dotenv").config();

//middleware
app.use(express.json());
app.use(cors());
app.use("/api/applicant", require("./Routes/applicants"));
app.use("/api/application", require("./Routes/applications"));
app.use("/api/position", require("./Routes/positions"));
app.use("/api/recruiter", require("./Routes/recruiter"));
app.use("/api/auth", require("./Routes/auth"));

mongoose.set("strictQuery", false);

async function connectToDatabase() {
  try {
    await mongoose.connect(
      `mongodb+srv://admin:admin2023@cluster0.2bhecal.mongodb.net/ATSDB?retryWrites=true&w=majority`
    );
    console.log("connected to database");
  } catch (error) {
    console.error("Error connecting to database:", error.message);
  }
}

connectToDatabase();
//listener
app.listen(PORT, (err) => {
  if (err) console.log("Error in server setup");
  console.log("Server listening on Port", PORT);
});
