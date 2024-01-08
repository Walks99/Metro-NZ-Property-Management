import React from "react";
import { useState } from "react";
import AucklandCitySuburbs from "./AucklandSuburbs/AucklandCitySuburbs.jsx";

function AucklandTowns() {
  const aucklandDistricts = [
    "Auckland City",
    "Franklin District",
    "Manukau City",
    "North Shore City",
    "Papakura District",
    "Rodney District",
    "Waitakere City",
    "Hibiscus Coast",
    "Waiheke Island",
    "Great Barrier Island",
  ];

  const [selectedDistrict, setSelectedDistrict] =
    useState("NoDistrictSelected");

  const handleDistrictChange = (event) => {
    setSelectedDistrict(event.target.value);
  };

  return (
    <div>
      <select
        id="district"
        name="district"
        value={selectedDistrict}
        onChange={handleDistrictChange}
      >
        <option value="NoDistrictSelected">--Select District--</option>
        {aucklandDistricts.map((district, index) => (
          <option key={index} value={district}>
            {district}
          </option>
        ))}
      </select>

      {selectedDistrict === "Auckland City" ? (
          <AucklandCitySuburbs />
        ) : null}
    </div>
  );
}

export default AucklandTowns;
