import React from "react";
import { useState } from "react";

function AucklandSuburbs() {
  const aucklandCitySuburbs = [
    "Auckland Central",
    "Eden Terrace",
    "Epsom",
    "Freemans Bay",
    "Grafton",
    "Greenlane",
    "Herne Bay",
    "Kingsland",
    "Meadowbank",
    "Mission Bay",
    "Mt Eden",
    "Mt Wellington",
    "Newmarket",
    "Newton",
    "One Tree Hill",
    "Onehunga",
    "Orakei",
    "Parnell",
    "Penrose",
    "Point Chevalier",
    "Ponsonby",
    "Remuera",
    "Royal Oak",
    "St Heliers",
    "Westmere"
  ];

  const [selectedSuburb, setSelectedSuburb] = useState("NoSuburbSelected");

  const handleSuburbChange = (event) => {
    setSelectedSuburb(event.target.value);
  };

  return (
    <div>
      <select
        id="suburb"
        name="suburb"
        value={selectedSuburb}
        onChange={handleSuburbChange}
      >
        <option value="NoSuburbSelected">--Select Suburb--</option>
        {aucklandCitySuburbs.map((suburb, index) => (
          <option key={index} value={suburb}>
            {suburb}
          </option>
        ))}
      </select>
    </div>
  );
}

export default AucklandSuburbs;