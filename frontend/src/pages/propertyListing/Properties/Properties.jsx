import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Properties.module.scss";
import CarDefault from "../../../assets/icons/CarDefault.png";
import oneCar from "../../../assets/icons/1-Car.png";
import twoCar from "../../../assets/icons/2-Cars.png";
import threeCar from "../../../assets/icons/3-Cars.png";
import BathroomDefault from "../../../assets/icons/BathroomDefault.png";
import oneBathroom from "../../../assets/icons/1-Bathroom.png";
import twoBathroom from "../../../assets/icons/2-Bathroom.png";
import threeBathroom from "../../../assets/icons/3-Bathroom.png";
import BedroomDefault from "../../../assets/icons/BedroomDefault.png";
import oneBedroom from "../../../assets/icons/1-Bedroom.png";
import twoBedroom from "../../../assets/icons/2-Bedroom.png";
import threeBedroom from "../../../assets/icons/3-Bedroom.png";
import fourBedroom from "../../../assets/icons/4-Bedroom.png";
import PetsDefault from "../../../assets/icons/PetsDefault.png";
import PetsAllowed from "../../../assets/icons/PetsAllowed.png";

const Properties = ({selectedStartOfPriceRange, selectedEndOfPriceRange, selectedNumberOfBedrooms}) => {

  // ----------- Retrieve Documents from database on frist render -------------
  const [retrievedDocuments, setRetrievedDocuments] = useState([]);

  const retrieveDocumentsFromDB = async () => {
    try {
      const response = await fetch(
        "http://localhost:4000/api/retrievedocument"
      );

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setRetrievedDocuments(data); 
      } else {
        console.error("Frontend:", response.statusText);
      }
    } catch (error) {
      console.error("Frontend Error:", error.message);
    }
  };

  useEffect(() => {
    retrieveDocumentsFromDB();
  }, []); 
  // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ End - Retrieve Documents from database on frist render
  // ----------- Retrieve properties from DB within price range ------------
  useEffect(() => {
    if (selectedStartOfPriceRange && selectedEndOfPriceRange) {
      const fetchPropertiesWithinPriceRange = async () => {
        try {
          const response = await fetch(
            `http://localhost:4000/api/searchparameters/?pricestart=${selectedStartOfPriceRange}&priceend=${selectedEndOfPriceRange}`
          );
    
          if (response.ok) {
            const data = await response.json();
            console.log(data);
            setRetrievedDocuments(data);
          } else {
            console.error("Frontend:", response.statusText);
          }
        } catch (error) {
          console.error("Frontend Error:", error.message);
        }
      };

      fetchPropertiesWithinPriceRange();
    }

    if ((selectedStartOfPriceRange && selectedEndOfPriceRange) && selectedNumberOfBedrooms) {
      const fetchPropertiesWithinPriceRangeAndNumberOfBedrooms = async () => {
        try {
          const response = await fetch(
            `http://localhost:4000/api/searchparameters/?pricestart=${selectedStartOfPriceRange}&priceend=${selectedEndOfPriceRange}&bedrooms=${selectedNumberOfBedrooms}`
          );
    
          if (response.ok) {
            const data = await response.json();
            console.log(data);
            setRetrievedDocuments(data);
          } else {
            console.error("Frontend:", response.statusText);
          }
        } catch (error) {
          console.error("Frontend Error:", error.message);
        }
      };

      fetchPropertiesWithinPriceRangeAndNumberOfBedrooms();
    }
  }, [selectedStartOfPriceRange, selectedEndOfPriceRange, selectedNumberOfBedrooms]);
  // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ End - Retrieve properties from DB within price range

  return (
    <div className={styles.propertiesContainer}>
      {retrievedDocuments &&
        retrievedDocuments.map((document, index) => (
          <div key={index} className={styles.propertyContainer}>
            <div>
              {" "}
              <img
                src={`http://localhost:4000${document.images[0].path}`}
                alt=""
                className={styles.propertyImage}
              />
              <h2>{document.listingTitle}</h2>
            </div>

            {/* <p className={styles.priceperWeek}>${document.pricePerWeek}/week</p> */}
            <p className={styles.priceperWeek}>
              {
                document.pricePerWeek
                  .toLocaleString("en-NZ", {
                    style: "currency",
                    currency: "NZD",
                  })
                  .split(".")[0]
              }
            </p>
            <p className={styles.address}>
              {document.streetNumber} {document.street} {document.suburb},{" "}
              {document.city}
            </p>

            <div className={styles.iconsAndViewContainer}>
              <div className={styles.iconsContainer}>
                {/* --- CARPARKS ICON --- */}
                {document.carparks === 1 ? (
                  <img
                    src={oneCar}
                    alt="Car icon"
                    className={styles.bedBathShowCarPetsIcons}
                  />
                ) : document.carparks === 2 ? (
                  <img
                    src={twoCar}
                    alt="Car icon"
                    className={styles.bedBathShowCarPetsIcons}
                  />
                ) : document.carparks === 3 ? (
                  <img
                    src={threeCar}
                    alt="Car icon"
                    className={styles.bedBathShowCarPetsIcons}
                  />
                ) : (
                  <img
                    src={CarDefault}
                    alt="Car icon"
                    className={styles.bedBathShowCarPetsIcons}
                  />
                )}
                {/* ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */}
                {/* --- BEDROOMS ICON --- */}
                {document.bedrooms === 1 ? (
                  <img
                    src={oneBedroom}
                    alt="Bedrooms icon"
                    className={styles.bedBathShowCarPetsIcons}
                  />
                ) : document.bedrooms === 2 ? (
                  <img
                    src={twoBedroom}
                    alt="Bedrooms icon"
                    className={styles.bedBathShowCarPetsIcons}
                  />
                ) : document.bedrooms === 3 ? (
                  <img
                    src={threeBedroom}
                    alt="Bedrooms icon"
                    className={styles.bedBathShowCarPetsIcons}
                  />
                ) : document.bedrooms === 4 ? (
                  <img
                    src={fourBedroom}
                    alt="Bedrooms icon"
                    className={styles.bedBathShowCarPetsIcons}
                  />
                ) : (
                  <img
                    src={BedroomDefault}
                    alt="Bedrooms icon"
                    className={styles.bedBathShowCarPetsIcons}
                  />
                )}
                {/* ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */}
                {/* --- BATHROOMS ICON ---*/}
                {document.bathrooms === 1 ? (
                  <img
                    src={oneBathroom}
                    alt="Bathrooms icon"
                    className={styles.bedBathShowCarPetsIcons}
                  />
                ) : document.bathrooms === 2 ? (
                  <img
                    src={twoBathroom}
                    alt="Bathrooms icon"
                    className={styles.bedBathShowCarPetsIcons}
                  />
                ) : document.bathrooms === 3 ? (
                  <img
                    src={threeBathroom}
                    alt="Bathrooms icon"
                    className={styles.bedBathShowCarPetsIcons}
                  />
                ) : (
                  <img
                    src={BathroomDefault}
                    alt="Bathrooms icon"
                    className={styles.bedBathShowCarPetsIcons}
                  />
                )}
                {/* ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */}
                {/* --- PET'S ALLOWED ICON ---*/}
                {document.petsAllowed === true ? (
                  <img
                    src={PetsAllowed}
                    alt="Pets icon"
                    className={styles.bedBathShowCarPetsIcons}
                  />
                ) : (
                  <img
                    src={PetsDefault}
                    alt="Pets icon"
                    className={styles.bedBathShowCarPetsIcons}
                  />
                )}
                {/* ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */}
              </div>
              <div className={styles.viewListingButton}>
                <NavLink
                  className={styles.viewButton}
                  to={`/chosenpropertylisting/${document._id}`}
                >
                  VIEW
                </NavLink>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Properties;
