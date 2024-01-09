import React from "react";
import styles from "./PropertyListing.module.css";
import Navbar from "../../common-components/navbar/Navbar";
import Footer from "../../common-components/footer/Footer";
import Properties from "./Properties/Properties";
import FilterParameters from "./FilterParameters/FilterParameters.jsx";
import { useState } from "react";

export default function PropertyListing() {
  // Price range state variables
  const [selectedStartOfPriceRange, setSelectedStartOfPriceRange] = useState(false);
  const [selectedEndOfPriceRange, setSelectedEndOfPriceRange] = useState(false);
  // Number of bedrooms state variables
  const [selectedNumberOfBedrooms, setSelectedNumberOfBedrooms] = useState(false);
  // Number of bathrooms state variables
  const [selectedNumberOfBathrooms, setSelectedNumberOfBathrooms] = useState(false);
  // Number of carparks
  const [selectedNumberOfCarparks, setSelectedNumberOfCarparks] = useState(false);
  // Pet friendly
  // const [selectedPetFriendly, setSelectedPetFriendly] = useState(false);


  return (
    <div className={styles.PropertyListingContainer}>
      <Navbar></Navbar>
      <div className={styles.mainSection}>
        <div className={styles.searchAndFilterAndFilterTextsOptions}>
          <FilterParameters
          // Price range props
            selectedStartOfPriceRange={selectedStartOfPriceRange}
            selectedEndOfPriceRange={selectedEndOfPriceRange}
            setSelectedStartOfPriceRange={setSelectedStartOfPriceRange}
            setSelectedEndOfPriceRange={setSelectedEndOfPriceRange}
          // Number of bedrooms props
            selectedNumberOfBedrooms={selectedNumberOfBedrooms}
            setSelectedNumberOfBedrooms={setSelectedNumberOfBedrooms}
            // Number of bathrooms props
            selectedNumberOfBathrooms={selectedNumberOfBathrooms}
            setSelectedNumberOfBathrooms={setSelectedNumberOfBathrooms}
            // Number of carparks props
            selectedNumberOfCarparks={selectedNumberOfCarparks}
            setSelectedNumberOfCarparks={setSelectedNumberOfCarparks}
            // Pet friendly props
            // selectedPetFriendly={selectedPetFriendly}
            // setSelectedPetFriendly={setSelectedPetFriendly}
          />
        </div>
        <Properties
          className={styles.properties}
          // Price range props
          selectedStartOfPriceRange={selectedStartOfPriceRange}
          selectedEndOfPriceRange={selectedEndOfPriceRange}
          // Number of bedrooms props
          selectedNumberOfBedrooms={selectedNumberOfBedrooms}
          // Number of bathrooms props
          selectedNumberOfBathrooms={selectedNumberOfBathrooms}
          // Number of carparks props
          selectedNumberOfCarparks={selectedNumberOfCarparks}
          // Pet friendly props
          // selectedPetFriendly={selectedPetFriendly}
        ></Properties>
      </div>
      <Footer></Footer>
    </div>
  );
}
