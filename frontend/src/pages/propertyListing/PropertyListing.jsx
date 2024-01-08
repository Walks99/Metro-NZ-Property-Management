import React from "react";
import styles from "./PropertyListing.module.css";
import Navbar from "../../common-components/navbar/Navbar";
import Footer from "../../common-components/footer/Footer";
import Properties from "./Properties/Properties";
import FilterParameters from "./FilterParameters/FilterParameters.jsx";
import { useState } from "react";

export default function PropertyListing() {
  const [selectedStartOfPriceRange, setSelectedStartOfPriceRange] =
    useState(false);
  const [selectedEndOfPriceRange, setSelectedEndOfPriceRange] = useState(false);

  return (
    <div className={styles.PropertyListingContainer}>
      <Navbar></Navbar>
      <div className={styles.mainSection}>
        <div className={styles.searchAndFilterAndFilterTextsOptions}>
          <FilterParameters
            selectedStartOfPriceRange={selectedStartOfPriceRange}
            selectedEndOfPriceRange={selectedEndOfPriceRange}
            setSelectedStartOfPriceRange={setSelectedStartOfPriceRange}
            setSelectedEndOfPriceRange={setSelectedEndOfPriceRange}
          />
        </div>
        <Properties
          className={styles.properties}
          selectedStartOfPriceRange={selectedStartOfPriceRange}
          selectedEndOfPriceRange={selectedEndOfPriceRange}
        ></Properties>
      </div>
      <Footer></Footer>
    </div>
  );
}
