import Styles from "./FilterParameters.module.scss";

function FilterParameters({selectedStartOfPriceRange,
  selectedEndOfPriceRange,
  setSelectedStartOfPriceRange,
  setSelectedEndOfPriceRange}) {
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

  return (
    <div className={Styles.filterParametersContainer}>
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
    </div>
  );
}

export default FilterParameters;
