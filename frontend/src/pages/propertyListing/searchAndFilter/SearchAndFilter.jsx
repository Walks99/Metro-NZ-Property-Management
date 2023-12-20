import React, { useState, useEffect } from "react";
import styles from "./search.module.css";

export default function SearchAndFilter() {
  const cities = ["Auckland", "Tauranga", "Hamilton", "Napier", "Paihia"];
  const svgMarkup = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M11 2C15.968 2 20 6.032 20 11C20 15.968 15.968 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2ZM11 18C14.8675 18 18 14.8675 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18ZM19.4853 18.0711L22.3137 20.8995L20.8995 22.3137L18.0711 19.4853L19.4853 18.0711Z" fill="rgba(255,255,255,1)"></path>
    </svg>
  `;

  const svgDataUri = `data:image/svg+xml,${encodeURIComponent(svgMarkup)}`;
  const [address, setAddress] = useState("");

  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleContainerClick = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const handleAddress = (e) => {
    setAddress(e.target.textContent);
    setDropdownVisible(false);
  };

  const handleInputChange = (e) => {
    setAddress(e.target.value);
  };

  return (
    <div
      className={`${styles.searchContainer} ${
        isDropdownVisible ? styles.active : ""
      }`}
      onClick={handleContainerClick}
    >
      <input
        className={styles.searchInput}
        type="text"
        placeholder="Address/City"
        value={address}
        onChange={handleInputChange}
      />
      <button className={styles.searchButton}>
        <img className={styles.searchIcon} src={svgDataUri} alt="mysvg" />
      </button>
      {isDropdownVisible && (
        <div className={styles.dropdown}>
          <h5 className={styles.results}>Results</h5>
          {cities.map((city) => (
            <li key={city} className={styles.places} onClick={handleAddress}>
              {city}
            </li>
          ))}
        </div>
      )}
    </div>
  );
}
