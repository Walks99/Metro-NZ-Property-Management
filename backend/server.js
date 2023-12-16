// -------------------------------------------------- DEPENDENCIES  ---------------------------------------------------
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// ------------------------------------------------------- ENV -------------------------------------------------------
dotenv.config();

// Assign env variables
const PORT = process.env["PORT"];
const MONGODB_URI = process.env["MONGODB_URI"];
const DB_NAME = process.env["DB_NAME"];
const ENV_NAME = process.env["ENV_NAME"];
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// ------------------------------------------ MONGO DB DATABASE CONNECTION ------------------------------------------
// Database connection
const mongoose = require("mongoose");
// Map global promise - get rid of warning
mongoose.Promise = global.Promise;
// Connect to Database
// mongoose.connect("mongodb://localhost:27017/datarecords", { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connect(`${MONGODB_URI}/${DB_NAME}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// ------------------------------------------ CREATE INSTANCE OF EXPRESS APP -----------------------------------------
const app = express();
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// -------------------------------------------------- ENABLE CORS  ---------------------------------------------------
app.use(cors({ origin: "*", credentials: true }));

// Define Mongoose schema and model for the 'documents' collection
const documentSchema = new mongoose.Schema({
  message: String,
});

const Document = mongoose.model("Document", documentSchema);
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// ----------------------------------------- ENDPOINT - ROOT TEST ----------------------------------------------------
app.get("/", async (req, res) => {
  res.json({ message: "It works yeah baby!", env_name: `${ENV_NAME}` });
});
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// -------------------------------- ENDPOINT - POST DOCUMENT TO DB ---------------------------------------------------
app.use(express.json()); // Parse JSON bodies

app.post("/api/senddocument", async (req, res) => {
  try {
    // Extract the document data from the request body
    const documentData = req.body;

    // Create a new document based on the model and the data from the request body
    const newDocument = new Document(documentData);

    // Save the document to the 'documents' collection
    await newDocument.save();

    console.log("Document added to database collection 'documents'");
    // Send confirmation message back to the user
    res
      .status(200)
      .json({ message: "Document added to database collection 'documents'" });
  } catch (error) {
    console.error(
      "Error adding document to database collection 'documents':",
      error
    );
    res.status(500).json({ error: "Internal Server Error" });
  }
});
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// --------------------------------- ENDPOINT - RETRIEVE DOCUMENTS FROM DB -------------------------------------------
app.get("/api/retrievedocument", async (req, res) => {
  try {
    // Query the database to retrieve a document
    const retrievedocument = await mongoose.connection
      .collection("documents") // name of collection to retrieve from
      .find({})
      .toArray();

    console.log("Retrieved document:", retrievedocument);
    // Send retrieved document back to Postman
    res.json(retrievedocument);
  } catch (error) {
    console.error("Error querying the database:", error);
  }
});
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// --------------------------------- ENDPOINT - DELETE DOCUMENTS FROM DB ---------------------------------------------
app.delete("/api/deletedocuments/:id", async (req, res) => {
  const documentId = req.params.id;

  try {
    const deletedDocument = await Document.findByIdAndDelete(documentId);

    if (deletedDocument) {
      // Document was found and deleted successfully
      res.status(200).json({ message: "Document deleted successfully" });
    } else {
      // Document with the specified ID was not found
      res.status(404).json({ message: "Document not found" });
    }
  } catch (error) {
    // Handle any errors that occur during the deletion process
    console.error("Error deleting document:", error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
});
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// ------------------------------------------------ SERVER LISTENING -------------------------------------------------
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log(`GET root endpoint: http://localhost:${PORT}/`);
  console.log(
    `POST document endpoint: http://localhost:${PORT}/api/senddocument`
  );
  console.log(
    `GET document endpoint: http://localhost:${PORT}/api/retrievedocument`
  );
});
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
