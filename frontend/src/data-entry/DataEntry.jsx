import React from "react";
import { useState } from "react";

function DataEntry() {
  // State variables to manage success message, retrieved documents, and selected checkboxes
  const [successMessage, setSuccessMessage] = useState(null);
  const [retrievedDocuments, setRetrievedDocuments] = useState(null);
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
  const [images, setImages] = useState();
  // const [imagePath, setImagePath] = useState('');
  // const [imageDeletedMessage, setImageDeletedMessage] = useState('');

  // ------------------------------------- FUNCTION FOR UPLOADING DOCUMENTS TO DATABASE -------------------------------------
  const makeHttpRequest = async (e) => {
    e.preventDefault();

    // Retrieve the input element by its ID
    const listingDetails = {
      listingTitle: document.getElementById("listingTitle"),
      listingDescription: document.getElementById("listingDescription"),
      propertyType: document.getElementById("propertyType"),
      bedrooms: document.getElementById("bedrooms"),
      bathrooms: document.getElementById("bathrooms"),
      carparks: document.getElementById("carparks"),
      propertyFeatures: document.getElementById("propertyFeatures"),
      additionalInformation: document.getElementById("additionalInformation"),
      petsAllowed: document.getElementById("petsAllowed"),
      country: document.getElementById("country"),
      city: document.getElementById("city"),
      suburb: document.getElementById("suburb"),
      street: document.getElementById("street"),
      streetNumber: document.getElementById("streetNumber"),
      pricePerWeek: document.getElementById("pricePerWeek"),
      image: document.getElementById("image"), // get the file input element
    };

    if (listingDetails) {

      const formData = new FormData(); // Create a new FormData object

      formData.append("listingTitle", listingDetails.listingTitle.value);
      formData.append("listingDescription", listingDetails.listingDescription.value);
      formData.append("propertyType", listingDetails.propertyType.value);
      formData.append("bedrooms", listingDetails.bedrooms.value);
      formData.append("bathrooms", listingDetails.bathrooms.value);
      formData.append("carparks", listingDetails.carparks.value);
      formData.append("propertyFeatures", listingDetails.propertyFeatures.value);
      formData.append("additionalInformation", listingDetails.additionalInformation.value);
      formData.append("petsAllowed", listingDetails.petsAllowed.value);
      formData.append("country", listingDetails.country.value);
      formData.append("city", listingDetails.city.value);
      formData.append("suburb", listingDetails.suburb.value);
      formData.append("street", listingDetails.street.value);
      formData.append("streetNumber", listingDetails.streetNumber.value);
      formData.append("pricePerWeek", listingDetails.pricePerWeek.value);

      // Append images
      for (const image of images) {
        formData.append("images", image);
      }

      try {
        const response = await fetch("http://localhost:4000/api/senddocument", {
          method: "POST",
          body: formData,
        });

        // Check if the response is successful (status code in the range 200-299)
        if (response.ok) {
          const data = await response.json();
          setSuccessMessage(data.message); // Set success message from the server
          // Clear the input field after successful upload
          listingDetails.listingTitle.value = "";
          listingDetails.listingDescription.value = "";
          listingDetails.propertyType.value = "";
          listingDetails.bedrooms.value = "";
          listingDetails.bathrooms.value = "";
          listingDetails.carparks.value = "";
          listingDetails.petsAllowed.value = "";
          listingDetails.country.value = "";
          listingDetails.city.value = "";
          listingDetails.suburb.value = "";
          listingDetails.street.value = "";
          listingDetails.streetNumber.value = "";
          listingDetails.pricePerWeek.value = "";
        } else if (response.status === 400) {
          const data = await response.json();
          setSuccessMessage(data.message);
        } else {
          console.error("Frontend:", response.statusText);
        }
      } catch (error) {
        console.error("Frontend Error:", error.message);
      }
    }
  };

  // ---------------------------------- FUNCTION FOR UPLOADING MULTIPLE IMAGES --------------------------------------
  const handleImageChange = (e) => {
    console.log("handleImageChange function hit");
    const fileList = e.target.files; // Get the list of files
    const imagesArray = Array.from(fileList); // Convert the list of files into an array
    setImages(imagesArray); // Set the images array in the state
  };
  // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

  // ---------------------------------- FUNCTION FOR RETRIEVING DOCUMENTS FROM DATABASE --------------------------------------
  const retrieveDocumentsFromDB = async (e) => {
    e.preventDefault();
    console.log("retrieveDocumentsFromDB function hit");

    try {
      // Fetch the documents from the server endpoint
      const response = await fetch(
        "http://localhost:4000/api/retrievedocument"
      );

      if (response.ok) {
        const data = await response.json();
        setRetrievedDocuments(data); // Set the retrieved documents in the state
      } else {
        console.error("Frontend:", response.statusText);
      }
    } catch (error) {
      console.error("Frontend Error:", error.message);
    }
  };

  // ---------------------------------- FUNCTION FOR DELETING DOCUMENTS FROM DATABASE --------------------------------------
  const toggleCheckbox = (documentId) => {
    console.log("toggleCheckbox function hit");
    let updatedCheckboxes;

    // Toggle the selected checkboxes based on the document ID
    if (selectedCheckboxes.includes(documentId)) {
      updatedCheckboxes = selectedCheckboxes.filter((id) => id !== documentId);
    } else {
      updatedCheckboxes = [...selectedCheckboxes, documentId];
    }

    setSelectedCheckboxes(updatedCheckboxes);
    // setMarkDoneButton(updatedCheckboxes.length > 0);
  };

  const deleteDocumentsFromDB = () => {
    console.log("deleteDocumentsFromDB function hit");
    // Create an array of delete requests for each selected document
    const deleteRequests = selectedCheckboxes.map((documentId) =>
      fetch(`http://localhost:4000/api/deletedocuments/${documentId}`, {
        method: "DELETE",
      })
        .then((response) => {
          if (response.ok) {
            console.log(`Documents ${documentId} has been deleted`);
          } else {
            console.error(`Documents ${documentId} could not be deleted`);
          }
        })
        .catch((error) => {
          console.error("Network error:", error);
        })
    );

    // After all delete requests are completed, fetch the updated list of documents
    Promise.all(deleteRequests).then(() => {
      fetch("http://localhost:4000/api/retrievedocument")
        .then((data) => data.json())
        .then((data) => {
          setRetrievedDocuments(data); // Update the state with the new data
        });
    });

    // Clear the selected checkboxes after deleting documents
    setSelectedCheckboxes([]);
  };

  // ---------------------------------- FUNCTION FOR RETRIEVING IMAGE PATH FROM DATABASE --------------------------------------
  // const displayImage = () => {
  //   console.log("displayImage function hit");
  //    try {
  //     fetch("http://localhost:4000/api/getImagePath")
  //     .then(response => response.json())
  //     .then(data => {
  //       setImagePath(data.imagePath)
  //     })
      
  //    } catch (error) {
  //     console.error("Frontend Error - displayImage function:", error.message);
  //    }
  //   }

    // const deleteImage = () => {
    //   console.log("deleteImage function hit");
    //   const imageToDelete = imagePath;
    //     try {
    //       fetch(`http://localhost:4000/api/deleteImage${imageToDelete}`, {
    //         method: "DELETE",
    //       })
    //       .then(response => setImageDeletedMessage(response.message))
    //       .then(
    //         setImagePath('')
    //       )

    //     } catch (error) {
    //       console.error("Frontend Error - deleteImage function:", error.message);
    //     }
    // }
    
  // ---------------------------------- RETURN STATEMENTS --------------------------------------
  return (
    <>
      {/* Upload document form */}
      <h1>Upload rental listings to the database</h1>
      <form onSubmit={makeHttpRequest}>
        <label htmlFor="listingTitle">Listing title: </label>
        <input type="text" id="listingTitle" name="listingTitle" style={{width: "400px", border: "solid 1px"}} />
        <br />
        <label htmlFor="listingDescription">Listing Description: </label>
        <input type="text" id="listingDescription" name="listingDescription" style={{width: "1000px", height: "400px", border: "solid 1px"}}/>
        <br />
        <label htmlFor="propertyType">Property Type: </label>
        <select id="propertyType" name="propertyType">
          <option value="NoAnswerSelected">--Select type--</option>
          <option value="Apartment">Apartment</option>
          <option value="House">House </option>
          <option value="Townhouse">Townhouse</option>
          <option value="Unit">Unit</option>
        </select>
        <br />
        <label htmlFor="bedrooms">Number of bedrooms: </label>
        <input type="Number" id="bedrooms" name="bedrooms" style={{border: "solid 1px"}}/>
        <br />
        <label htmlFor="bathrooms">Number of bathrooms: </label>
        <input type="Number" id="bathrooms" name="bathrooms" style={{border: "solid 1px"}}/>
        <br />
        <label htmlFor="carparks">Number of carparks: </label>
        <input type="Number" id="carparks" name="carparks" style={{border: "solid 1px"}}/>
        <br />
        <label htmlFor="propertyFeatures">Property features: </label>
        <input type="text" id="propertyFeatures" name="propertyFeatures" placeholder="Feature 1, Feature 2, Feature 3, Feature 4" style={{width: "1400px", border: "solid 1px"}}/>
        <br />
        <label htmlFor="additionalInformation">Additional information: </label>
        <input type="text" id="additionalInformation" name="additionalInformation" placeholder="Additional info 1, Additional info 2, Additional info 3, Additional info 4" style={{width: "1400px", border: "solid 1px"}}/>
        <br />
        <label htmlFor="petsAllowed">Pets allowed?: </label>
        <select id="petsAllowed" name="petsAllowed">
          <option value="NoAnswerSelected">--Select Yes/No--</option>
          <option value="true">Yes</option>
          <option value="false">No </option>
        </select>
        <br />
        <label htmlFor="country">Country: </label>
        <select id="country" name="country">
          <option value="selectPropertyType">--Select Country--</option>
          <option value="New Zealand">New Zealand</option>
          <option value="Australia">Australia </option>
        </select>
        <br />
        <label htmlFor="city">Town/City: </label>
        <select id="city" name="city">
          <option value="selectPropertyType">--Select City--</option>
          <option value="selectCity">Select a City</option>
          <option value="Auckland">Auckland</option>
          <option value="Wellington">Wellington</option>
          <option value="Christchurch">Christchurch</option>
          <option value="Hamilton">Hamilton</option>
          <option value="Tauranga">Tauranga</option>
          <option value="Dunedin">Dunedin</option>
          <option value="PalmerstonNorth">Palmerston North</option>
          <option value="NapierHastings">Napier-Hastings</option>
          <option value="Nelson">Nelson</option>
          <option value="Rotorua">Rotorua</option>
          <option value="NewPlymouth">New Plymouth</option>
          <option value="Whangarei">Whangarei</option>
          <option value="Invercargill">Invercargill</option>
          <option value="Whanganui">Whanganui</option>
          <option value="Gisborne">Gisborne</option>
        </select>
        <br />
        <label htmlFor="suburb">Suburb: </label>
        <input type="text" id="suburb" name="suburb" style={{border: "solid 1px"}}/>
        <br />
        <label htmlFor="street">Street: </label>
        <input type="text" id="street" name="street" style={{border: "solid 1px"}}/>
        <br />
        <label htmlFor="streetNumber">Street Number: </label>
        <input type="Number" id="streetNumber" name="streetNumber" style={{border: "solid 1px"}}/>
        <br />
        <label htmlFor="pricePerWeek">Price (per week): </label>
        <input type="Number" id="pricePerWeek" name="pricePerWeek" style={{border: "solid 1px"}}/>
        <br />
        {/* Upload multiple images */}
        <label htmlFor="image">Choose images: </label>
        <input type="file" id="image" name="image" multiple onChange={handleImageChange}/>
        {/* ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */}
        <br />
        <button type="submit">Upload</button>
      </form>

      {successMessage && <p>{successMessage}</p>}

      {/* Retrieve documents form */}
      <h1>Retrieve rental listings from the database</h1>
      <form onSubmit={retrieveDocumentsFromDB}>
        <button>Retrieve listings from database</button>
      </form>

      {/* Display retrieved documents and checkboxes */}
      {retrievedDocuments && (
        <div>
          <ul style={{ listStyleType: "none" }}>
            {retrievedDocuments.map((document) => (
              <div key={document._id} style={{ marginBottom: "40px" }}>
                <li key={document._id}>
                  <span key={document._id}>
                    <b>Property record ID:</b> {JSON.stringify(document._id)}
                    <br />
                    <b>Listing title:</b>
                    {JSON.stringify(document.listingTitle)}
                    <br />
                    <b>Listing Description:</b>
                    {JSON.stringify(document.listingDescription)}
                    <br />
                    <b>Property Type:</b>
                    {JSON.stringify(document.propertyType)}
                    <br />
                    <b>Bedrooms:</b> {JSON.stringify(document.bedrooms)}
                    <br />
                    <b>Bathrooms:</b> {JSON.stringify(document.bathrooms)}
                    <br />
                    <b>Carparks:</b> {JSON.stringify(document.carparks)}
                    <br />
                    <b>Property features:</b> {JSON.stringify(document.propertyFeatures)}
                    <br />
                    <b>Additional Information:</b> {JSON.stringify(document.additionalInformation)}
                    <br />
                    <b>Pets allowed:</b> {JSON.stringify(document.petsAllowed)}
                    <br />
                    <b>Country:</b> {JSON.stringify(document.country)}
                    <br />
                    <b>City:</b> {JSON.stringify(document.city)}
                    <br />
                    <b>Suburb:</b> {JSON.stringify(document.suburb)}
                    <br />
                    <b>Street:</b> {JSON.stringify(document.street)}
                    <br />
                    <b>Street Number: </b>
                    {JSON.stringify(document.streetNumber)}
                    <br />
                    <b>Price (per week): </b>
                    {JSON.stringify(document.pricePerWeek)}
                    <br />
                    {document.images.length > 0 && (
                      <div>
                        <b>Images and paths:</b>
                        {document.images.map((image) => {
                          return (
                            <div key={image.path} style={{display: "flex", flexDirection: "column"}}>
                              <br />
                              {JSON.stringify(image.path)}
                              <img src={`http://localhost:4000${image.path}`} alt="Uploaded" style={{width: "400px", height: "auto"}}/>
                            </div>
                          );
                        })}
                      </div>
                    )}
                    <br />
                  </span>
                </li>
                <label style={{ color: "red" }}>
                  <em>Delete property listing</em>
                </label>
                <input
                  type="checkbox"
                  id={`Checkbox-${document._id}`}
                  name={`Checkbox-${document._id}`}
                  value={document._id}
                  checked={selectedCheckboxes.includes(document._id)}
                  onChange={() => toggleCheckbox(document._id)}
                />
              </div>
            ))}
          </ul>

          {/* Display delete button if documents are available */}
          {retrievedDocuments.length > 0 && (
            <button onClick={deleteDocumentsFromDB}>
              Delete selected documents
            </button>
          )}
        </div>
      )}

      {/* Display image */}
      {/* <button onClick={displayImage}>Display image</button> */}
      {/* <button onClick={deleteImage}>Delete image</button> */}
      {/* {imagePath && <img src={`http://localhost:4000${imagePath}`} alt="Uploaded" />} */}
      {/* {imageDeletedMessage && <p>{imageDeletedMessage}</p>} */}
      </>
  );
}

export default DataEntry;
