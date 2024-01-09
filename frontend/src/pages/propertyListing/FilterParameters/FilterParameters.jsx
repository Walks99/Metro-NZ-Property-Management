import Styles from "./FilterParameters.module.scss";
import React from "react";

function FilterParameters({
  // Price range props
  selectedStartOfPriceRange,
  selectedEndOfPriceRange,
  setSelectedStartOfPriceRange,
  setSelectedEndOfPriceRange,
  // Number of bedrooms props
  selectedNumberOfBedrooms,
  setSelectedNumberOfBedrooms,
  // Number of bathrooms props
  selectedNumberOfBathrooms,
  setSelectedNumberOfBathrooms,
  // Number of carparks props
  selectedNumberOfCarparks,
  setSelectedNumberOfCarparks,
  // Pet friendly props
  selectedPetFriendly,
  setSelectedPetFriendly,

}) {
  // ------------- Price range arrays -------------
  const startOfPriceRange = [
    25, 50, 75, 100, 125, 150, 175, 200, 225, 250, 275, 300, 325, 350, 375, 400,
    425, 450, 475, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1100,
    1200, 1300, 1400, 1500, 1750, 2000, 2250, 2500, 2750, 3000,
  ];

  const endOfPriceRange = [
    25, 50, 75, 100, 125, 150, 175, 200, 225, 250, 275, 300, 325, 350, 375, 400,
    425, 450, 475, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1100,
    1200, 1300, 1400, 1500, 1750, 2000, 2250, 2500, 2750, 3000,
  ];
  // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ End - Price range arrays
  // ------------- Number of bedrooms array -------------
  const numberOfBedrooms = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ End - Number of bedrooms array
  // ------------- Number of bathrooms array -------------
  const numberOfBathrooms = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ End - Number of bathrooms array
  // ------------- Number of carparks array -------------
  const numberOfCarparks = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ End - Number of carparks array
  // ------------- Pet friendly array -------------
  // const petFriendly = ["Yes", "No"]
  const petFriendlyOptions = ["Yes", "No"]
  // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ End - Pet friendly array

  // ------- Starting and ending price range functions --------
  const handleStartOfPriceRangeChange = (event) => {
    const selectedStartValue = event.target.value;
    setSelectedStartOfPriceRange(selectedStartValue);
  };

  const handleEndOfPriceRangeChange = (event) => {
    const selectedEndValue = event.target.value;
    setSelectedEndOfPriceRange(selectedEndValue);
  };
  // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ End - Starting and ending price range functions

  // ------- Number of bedrooms function --------
  const handleSelectedNumberOfBedrooms = (event) => {
    const selectedBedroomsValue = event.target.value;
    setSelectedNumberOfBedrooms(selectedBedroomsValue);
  }
  // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ End - Number of bedrooms function
  // ------- Number of bathrooms function --------
  const handleSelectedNumberOfBathrooms = (event) => {
    const selectedBathroomssValue = event.target.value;
    setSelectedNumberOfBathrooms(selectedBathroomssValue);
  }
  // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ End - Number of bedrooms function
  // ------- Number of carparks function --------
  const handleSelectedNumberOfCarparks = (event) => {
    const selectedCarparksValue = event.target.value;
    setSelectedNumberOfCarparks(selectedCarparksValue);
  }
  // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ End - Number of carparks function
  // ------- Pet friendly function --------
  const handleSelectedPetFriendly = (event) => {
    const selectedPetFriendlyValue = event.target.value;
    console.log(selectedPetFriendlyValue);
    setSelectedPetFriendly(selectedPetFriendlyValue);
  }
  // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ End - Pet friendly function

  return (
    <div className={Styles.filterParametersContainer}>
      {/* ---------------- Rent per week container -------------------- */}
      <div className={Styles.rentPerWeekContainer}>
        <p>Rental per week</p>

        <div className={Styles.priceRangeOptionsContainer}>
          <select
            id="startOfPriceRange"
            name="startOfPriceRange"
            onChange={handleStartOfPriceRangeChange}
            value={selectedStartOfPriceRange}
          >
            <option value="selectedStartOfPriceRange">Any</option>
            {startOfPriceRange.map((startOfPriceRange) => (
              <option key={startOfPriceRange} value={startOfPriceRange}>
                {startOfPriceRange}
              </option>
            ))}
          </select>
          <p>-</p>
          <select
            id="endOfPriceRange"
            name="endOfPriceRange"
            onChange={handleEndOfPriceRangeChange}
            value={selectedEndOfPriceRange}
          >
            <option value="SelectedEndOfPriceRange">Any</option>
            {endOfPriceRange.map((endOfPriceRange) => (
              <option key={endOfPriceRange} value={endOfPriceRange}>
                {endOfPriceRange}
              </option>
            ))}
          </select>
        </div>
      </div>
      {/* ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ End - Rent per week container */}
      {/* ---------------- Number of bedrooms container -------------------- */}
      <div className={Styles.numberOfBedroomsContainer}>
        <p>Bedrooms</p>
        <select
            id="numberOfBedrooms"
            name="numberOfBedrooms"
            onChange={handleSelectedNumberOfBedrooms}
            value={selectedNumberOfBedrooms}
          >
            <option value="selectedNumberOfBedrooms">Any</option>
            {numberOfBedrooms.map((numberOfBedrooms) => (
              <option key={numberOfBedrooms} value={numberOfBedrooms}>
                {numberOfBedrooms}
              </option>
            ))}
          </select>
      </div>
      {/* ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ End -  Number of bedrooms container*/}
      {/* ---------------- Number of bathrooms container -------------------- */}
      <div className={Styles.numberOfBedroomsContainer}>
        <p>Bathrooms</p>
        <select
            id="numberOfBathrooms"
            name="numberOfBathrooms"
            onChange={handleSelectedNumberOfBathrooms}
            value={selectedNumberOfBathrooms}
          >
            <option value="selectedNumberOfBathrooms">Any</option>
            {numberOfBathrooms.map((numberOfBathrooms) => (
              <option key={numberOfBathrooms} value={numberOfBathrooms}>
                {numberOfBathrooms}
              </option>
            ))}
          </select>
      </div>
      {/* ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ End -  Number of bedrooms container*/}
      {/* ---------------- Number of carparks container -------------------- */}
      <div className={Styles.numberOfBedroomsContainer}>
        <p>Carparks</p>
        <select
            id="numberOfCarparks"
            name="numberOfCarparks"
            onChange={handleSelectedNumberOfCarparks}
            value={selectedNumberOfCarparks}
          >
            <option value="selectedNumberOfCarparks">Any</option>
            {numberOfCarparks.map((numberOfCarparks) => (
              <option key={numberOfCarparks} value={numberOfCarparks}>
                {numberOfCarparks}
              </option>
            ))}
          </select>
      </div>
      {/* ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ End -  Number of carparks container*/}
      {/* ---------------- Pet Friendly container -------------------- */}
      <div>
      <p>Pet friendly</p>
<select
    id="preferredPetFriendly"
    name="preferredPetFriendly"
    onChange={handleSelectedPetFriendly}
    value={JSON.stringify(selectedPetFriendly)}
  >
    <option value="">Any</option>
    {petFriendlyOptions.map((option, index) => {
      return (
        <option key={index} value={option}>
          {option}
        </option>
      );
    })}
  </select>
</div>
      {/* ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ End -  Number of carparks container*/}

    </div>
  );
}

export default FilterParameters;
