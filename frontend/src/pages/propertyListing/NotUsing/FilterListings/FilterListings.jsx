import React, { useState } from "react";
import Styles from "./FilterListings.module.scss";
import AucklandTowns from "./AucklandTowns/AucklandTowns.jsx";
import NorthlandTowns from "./NorthlandTowns/NorthlandTowns.jsx";

function FilterListings() {
  const locations = [
    "Northland",
    "Auckland",
    "Waikato",
    "Bay of Plenty",
    "Gisborne",
    "Hawke's Bay",
    "Taranaki",
    "Manawatu/Whanganui",
    "Wellington",
    "Nelson / Tasman",
    "Marlborough",
    "West Coast",
    "Canterbury",
    "Otago",
    "Southland",
  ];

  const [selectedLocation, setSelectedLocation] =
    useState("NoLocationSelected");

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  return (
    <div className={Styles.filterParameterContainer}>
      <div className={Styles.filterParameter}>
        <label htmlFor="location">Location</label>
        <select
          id="location"
          name="location"
          value={selectedLocation}
          onChange={handleLocationChange}
        >
          <option value="NoLocationSelected">--Select Location--</option>
          {locations.map((location, index) => (
            <option key={index} value={location}>
              {location}
            </option>
          ))}
        </select>
      </div>

      <div>
        <p>District</p>
        {selectedLocation === "Auckland" ? (
          <AucklandTowns />
        ) : selectedLocation === "Northland" ? (
          <NorthlandTowns />
        ) : null}
      </div>
    </div>
  );
}

export default FilterListings;
