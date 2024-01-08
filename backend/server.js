// -------------------------------------------------- DEPENDENCIES  ---------------------------------------------------
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { ObjectId } = require("mongodb");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

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
mongoose.connect(`${MONGODB_URI}/${DB_NAME}`);
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// ------------------------------------------ CREATE INSTANCE OF EXPRESS APP -----------------------------------------
const app = express();
app.use(express.json()); // Parse JSON bodies
// Serve uploaded images statically
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// -------------------------------------------------- ENABLE CORS  ---------------------------------------------------
app.use(cors({ origin: "*", credentials: true }));
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// -------------------------------------------------- MULTER CONFIGURATION  ---------------------------------------------------
const uploadDir = path.join(__dirname, "uploads"); // Directory to store uploaded images

// Create the uploads directory if it doesn't exist
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const filename = `${Date.now()}-${file.originalname}`;
    cb(null, filename);
  },
});

const upload = multer({ storage: storage });
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// ----------------------------------------- MONGOOSE SCHEMA AND MODEL ------------------------------------------------
// Define Mongoose schema and model for the 'documents' collection
const documentSchema = new mongoose.Schema({
  listingTitle: String,
  listingDescription: String,
  propertyType: String,
  bedrooms: Number,
  bathrooms: Number,
  carparks: Number,
  propertyFeatures: String,
  additionalInformation: String,
  petsAllowed: Boolean,
  country: String,
  city: String,
  suburb: String,
  street: String,
  streetNumber: Number,
  pricePerWeek: Number,
  images: [{ path: String, originalname: String }],
});

const Document = mongoose.model("Document", documentSchema, "Listings");
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// ----------------------------------------- ENDPOINT - ROOT TEST ----------------------------------------------------
app.get("/", async (req, res) => {
  res.json({ message: "It works yeah baby!", env_name: `${ENV_NAME}` });
});
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// --------------------------- ENDPOINT - SERVE IMAGES TO THE FRONT END ----------------------------------------------
app.get("/api/getImagePath", (req, res) => {
  const imageName = "1703712729351-1.jpg"; // Replace with the actual image name
  res.json({ imagePath: `/uploads/${imageName}` });
});

// app.delete("/api/deleteImage/:id", (req, res) => {
//   const imageName = req.params.id;
//   const imagePath = path.join(__dirname, "uploads", imageName);
//   fs.unlink(imagePath, (error) => {
//     if (error) {
//       console.error("Error deleting image:", error);
//       res.status(500).json({ message: "Internal server error" });
//     } else {
//       console.log("Image deleted successfully");
//       res.status(200).json({ message: "Image deleted successfully" });
//     }
//   });
// });
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// -------------------------------- ENDPOINT - POST DOCUMENT TO DB ---------------------------------------------------
app.post("/api/senddocument", upload.array("images", 10), async (req, res) => {
  try {
    const documentData = req.body;
    const images = req.files; // Multer stores files in req.files

    // Map the uploaded images to an array of image paths and original names
    const imagePaths = images.map((image) => ({
      path: `/uploads/${image.filename}`,
      originalname: image.originalname,
    }));

    const newDocument = new Document({
      ...documentData,
      images: imagePaths,
    });

    await newDocument.save();

    console.log("Document added to the database collection 'documents'");
    res
      .status(200)
      .json({ message: "Document added to database collection 'documents'" });
  } catch (error) {
    console.error(
      "Error adding document to the database collection 'documents':",
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
      .collection("Listings") // name of collection to retrieve from
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
  // :id is a parameter
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
    res.status(500).json({ message: "Internal server error" });
  }
});
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// ---------------------- ENDPOINT - RETRIEVE A SPECIFIC PROPERTY LISTING FROM DATABASE ------------------------------
app.get("/api/retrieveproperties/:id", async (req, res) => {
  const propertyId = req.params.id;
  try {
    const objectId = new ObjectId(propertyId);
    // Query the database to retrieve a document
    const retrievedProperty = await mongoose.connection
      .collection("Listings") // name of collection to retrieve from
      .findOne({ _id: objectId });

    console.log(
      "/retireveproperties end point hit! Retrieved Properties:",
      retrievedProperty
    );
    // Send retrieved document back to Postman
    res.json(retrievedProperty);
  } catch (error) {
    console.error("Error querying the database:", error);
  }
});
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// ---------------------- ENDPOINT - RETRIEVE PROPERTIES WITHIN A PRICE RANGE ------------------------------
app.get('/api/searchparameters', async (req, res) => {
  const start = Number(req.query.start);
  const end = Number(req.query.end);

  try {
    const documents = await mongoose.connection
    .collection('Listings')
    .find({
      pricePerWeek: {
        $gte: start,
        $lte: end
      }
    })
    .toArray();

    console.log('Price range documents:', documents);
    res.json(documents);
  } catch (error) {
    console.error("Backend Error:", error.message);
    res.status(500).send('Error occurred while fetching data');
  }
});
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// ------------------------------------------------ SERVER LISTENING -------------------------------------------------
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
