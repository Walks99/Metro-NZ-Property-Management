import "./App.css";
import { Routes, Route } from "react-router-dom";
import DataEntry from "./data-entry/DataEntry";
import Chosenpropertylisting from "./pages/ben-walker/ChosenPropertyListing";
import PropertyListing from "./pages/propertyListing/PropertyListing";

function App() {
  return (
    <Routes>
      <Route path="/dataentry" element={<DataEntry />}></Route>
      <Route path="/propertyListing" element={<PropertyListing />}></Route>
      <Route
        path="/chosenpropertylisting"
        element={<Chosenpropertylisting />}
      ></Route>
    </Routes>
  );
}

export default App;
