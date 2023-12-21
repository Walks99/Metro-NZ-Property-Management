import React from "react";
import SearchAndFilter from "./searchAndFilter/SearchAndFilter";
import Dropdown from "./filterButtons/FilterButton";
import styles from "./PropertyListing.module.css";
import Navbar from "../../common-components/navbar/Navbar";
import Footer from "../../common-components/footer/Footer";
import Properties from "./Properties/Properties";

export default function PropertyListing() {
  const filterTexts = [
    [
      "Price",
      "Below $500",
      "$500 - $600",
      "$600 - $700",
      "$700 - $800",
      "$800 - $900",
      "$900+",
    ],
    ["Beds", "1", "2", "3", "4", "4+"],
    ["Baths", "1", "2", "3", "4", "4+"],
    ["Pet Friendly", "Yes", "No"],
    ["Parking", "1", "2", "3", "4"],
    ["More Filter", "Yes", "No"],
  ];

  return (
    <div className={styles.PropertyListingContainer}>
      <Navbar></Navbar>
      <div className={styles.mainSection}>
        <SearchAndFilter className={styles.SearchComponent} />
        <div className={styles.filterButtons}>
          {filterTexts.map((options, index) => (
            <Dropdown key={index} options={options} />
          ))}
        </div>
        <Properties className={styles.properties}></Properties>
      </div>
      <Footer></Footer>
    </div>
  );
}
