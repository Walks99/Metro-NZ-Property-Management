import "./App.css";
import { useState } from "react";

function App() {
  // State variables to manage success message, retrieved documents, and selected checkboxes
  const [successMessage, setSuccessMessage] = useState(null);
  const [retrievedDocuments, setRetrievedDocuments] = useState(null);
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);

  // ------------------------------------- FUNCTION FOR UPLOADING DOCUMENTS TO DATABASE -------------------------------------
  const makeHttpRequest = async (e) => {
    e.preventDefault();

    // Retrieve the input element by its ID
    const inputElement = document.getElementById("textcontent");

    if (inputElement) {
      // Extract the input value and create a data object
      const inputData = {
        message: inputElement.value,
      };

      // Convert the data object to JSON
      const jsonInputData = JSON.stringify(inputData);

      try {
        // Send a POST request to the server endpoint for uploading documents
        const response = await fetch("http://localhost:4000/api/senddocument", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: jsonInputData,
        });

        // Check if the response is successful (status code in the range 200-299)
        if (response.ok) {
          const data = await response.json();
          setSuccessMessage(data.message); // Set success message from the server
          // Clear the input field after successful upload
          inputElement.value = "";
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

  // ---------------------------------- FUNCTION FOR RETRIEVING DOCUMENTS FROM DATABASE --------------------------------------
  const retrieveDocumentsFromDB = async (e) => {
    e.preventDefault();
    console.log("retrieveDocumentsFromDB function hit");

    try {
      // Fetch the documents from the server endpoint
      const response = await fetch("http://localhost:4000/api/retrievedocument");

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

  return (
    <>
      {/* Upload document form */}
      <h1>Upload document to the database</h1>
      <form onSubmit={makeHttpRequest}>
        <label htmlFor="imageUpload">Enter text here </label>
        <input type="text" id="textcontent" name="textcontent" />
        <button type="submit">Upload</button>
      </form>
      {successMessage && <p>{successMessage}</p>}

      {/* Retrieve documents form */}
      <h1>Retrieve documents from the database</h1>
      <form onSubmit={retrieveDocumentsFromDB}>
        <button>Retrieve documents from database</button>
      </form>

      {/* Display retrieved documents and checkboxes */}
      {retrievedDocuments && (
        <div>
          <ul>
            {retrievedDocuments.map((document) => (
              <div key={document._id}>
                <li key={document._id}>
                  <span key={document._id}>
                    {JSON.stringify(document.message)}
                  </span>
                  <input
                    type="checkbox"
                    id={`Checkbox-${document._id}`}
                    name={`Checkbox-${document._id}`}
                    value={document._id}
                    checked={selectedCheckboxes.includes(document._id)}
                    onChange={() => toggleCheckbox(document._id)}
                  />
                </li>
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
    </>
  );
}

export default App;
