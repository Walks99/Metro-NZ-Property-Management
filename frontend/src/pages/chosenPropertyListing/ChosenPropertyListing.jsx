import React from "react";
import { useState, useEffect } from "react";
import Styles from "./ChosenPropertyListing.module.scss";
import Footer from "../../common-components/footer/Footer";
import Navbar from "../../common-components/navbar/Navbar";
import Share from "../../assets/icons/Heart.png";
import Heart from "../../assets/icons/Share.png";
import CarDefault from "../../assets/icons/CarDefault.png";
import oneCar from "../../assets/icons/1-Car.png";
import twoCar from "../../assets/icons/2-Cars.png";
import threeCar from "../../assets/icons/3-Cars.png";
import BathroomDefault from "../../assets/icons/BathroomDefault.png";
import oneBathroom from "../../assets/icons/1-Bathroom.png";
import twoBathroom from "../../assets/icons/2-Bathroom.png";
import threeBathroom from "../../assets/icons/3-Bathroom.png";
import BedroomDefault from "../../assets/icons/BedroomDefault.png";
import oneBedroom from "../../assets/icons/1-Bedroom.png";
import twoBedroom from "../../assets/icons/2-Bedroom.png";
import threeBedroom from "../../assets/icons/3-Bedroom.png";
import fourBedroom from "../../assets/icons/4-Bedroom.png";
import PetsDefault from "../../assets/icons/PetsDefault.png";
import PetsAllowed from "../../assets/icons/PetsAllowed.png";
import PrimaryButton from "../../common-components/buttons/PrimaryButton";
import SecondaryButton from "../../common-components/buttons/SecondaryButton";
import AgentPhoto from "../../assets/agent-photos/agentPhoto.jpg";
import BookAViewingPopup from "../../common-components/popups/bookAViewing/BookAViewingPopup";
import EnquirePopup from "../../common-components/popups/enquire/EnquirePopup";
import { useParams } from "react-router-dom";

function ChosenPropertyListing() {
  const [properties, setProperties] = useState([]);
  const { id } = useParams();
  const [morePropertyDetails, setMorePropertyDetails] = useState(false);
  const [contactAgentPopup, setContactAgenctPopup] = useState(false);
  const [enquirePopup, setEnquirePopup] = useState(false);

  const showMorePropertyDetails = () => {
    setMorePropertyDetails(!morePropertyDetails);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:4000/api/retrieveproperties/${id}`
        );
        const requestedProperty = await response.json();
        setProperties([requestedProperty]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div className={Styles.chosenPropertyListingContainer}>
      <Navbar />

      {properties?.map((property) => (
        <>
          <div className={Styles.propertyImagesContainer}>
            {property.images.map((image, index) => (
              <img
                className={
                  index === 0 ? Styles.mainImage : Styles.additionalImage
                }
                src={`http://localhost:4000${image.path}`}
                alt={`${image.originalname}`}
              />
            ))}
          </div>
          <propertydetailscontainer className={Styles.propertyDetailsContainer}>
            <propertydetails className={Styles.propertyDetails}>
              <propertyicons className={Styles.propertyIcons}>
                <div>
                  {/* --- CARPARKS ICON --- */}
                  {property.carparks === 1 ? (
                    <img
                      src={oneCar}
                      alt="Car icon"
                      className={Styles.bedBathShowCarPetsIcons}
                    />
                  ) : property.carparks === 2 ? (
                    <img
                      src={twoCar}
                      alt="Car icon"
                      className={Styles.bedBathShowCarPetsIcons}
                    />
                  ) : property.carparks === 3 ? (
                    <img
                      src={threeCar}
                      alt="Car icon"
                      className={Styles.bedBathShowCarPetsIcons}
                    />
                  ) : (
                    <img
                      src={CarDefault}
                      alt="Car icon"
                      className={Styles.bedBathShowCarPetsIcons}
                    />
                  )}
                  {/* ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */}
                  {/* --- BEDROOMS ICON --- */}
                  {property.bedrooms === 1 ? (
                    <img
                      src={oneBedroom}
                      alt="Bedrooms icon"
                      className={Styles.bedBathShowCarPetsIcons}
                    />
                  ) : property.bedrooms === 2 ? (
                    <img
                      src={twoBedroom}
                      alt="Bedrooms icon"
                      className={Styles.bedBathShowCarPetsIcons}
                    />
                  ) : property.bedrooms === 3 ? (
                    <img
                      src={threeBedroom}
                      alt="Bedrooms icon"
                      className={Styles.bedBathShowCarPetsIcons}
                    />
                  ) : property.bedrooms === 4 ? (
                    <img
                      src={fourBedroom}
                      alt="Bedrooms icon"
                      className={Styles.bedBathShowCarPetsIcons}
                    />
                  ) : (
                    <img
                      src={BedroomDefault}
                      alt="Bedrooms icon"
                      className={Styles.bedBathShowCarPetsIcons}
                    />
                  )}
                  {/* ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */}
                  {/* --- BATHROOMS ICON ---*/}
                  {property.bathrooms === 1 ? (
                    <img
                      src={oneBathroom}
                      alt="Bathrooms icon"
                      className={Styles.bedBathShowCarPetsIcons}
                    />
                  ) : property.bathrooms === 2 ? (
                    <img
                      src={twoBathroom}
                      alt="Bathrooms icon"
                      className={Styles.bedBathShowCarPetsIcons}
                    />
                  ) : property.bathrooms === 3 ? (
                    <img
                      src={threeBathroom}
                      alt="Bathrooms icon"
                      className={Styles.bedBathShowCarPetsIcons}
                    />
                  ) : (
                    <img
                      src={BathroomDefault}
                      alt="Bathrooms icon"
                      className={Styles.bedBathShowCarPetsIcons}
                    />
                  )}
                  {/* ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */}
                  {/* --- PET'S ALLOWED ICON ---*/}
                  {property.petsAllowed === true ? (
                    <img
                      src={PetsAllowed}
                      alt="Pets icon"
                      className={Styles.bedBathShowCarPetsIcons}
                    />
                  ) : (
                    <img
                      src={PetsDefault}
                      alt="Pets icon"
                      className={Styles.bedBathShowCarPetsIcons}
                    />
                  )}
                  {/* ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */}
                </div>
                <div>
                  <img
                    src={Heart}
                    alt="Like this page"
                    className={Styles.likeAndShareIcon}
                  />
                  <img
                    src={Share}
                    alt="Share this page"
                    className={Styles.likeAndShareIcon}
                  />
                </div>
              </propertyicons>

              <p style={{ fontWeight: "bold", marginTop: "10px" }}>
                {property.streetNumber} {property.street}, {property.suburb}
                <br />
                {property.city}
              </p>
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "22px",
                  marginTop: "10px",
                }}
              >
                {property.pricePerWeek}
              </p>
              <h1 style={{ color: "rgb(231,52,54)", marginTop: "20px" }}>
                {property.listingTitle}
              </h1>
              <p style={{ marginTop: "20px" }}>
                {property.listingDescription}{" "}
              </p>

              {morePropertyDetails ? (
                <>
                  <SecondaryButton
                    onClick={showMorePropertyDetails}
                    displayText="Show less"
                    width={"18%"}
                    height={"40px"}
                    marginTop={"14px"}
                    marginBottom={"14px"}
                  />
                  <div>
                    <h1
                      style={{
                        color: "rgb(231,52,54)",
                        marginTop: "20px",
                        marginBottom: "12px",
                      }}
                    >
                      Property features
                    </h1>
                    <ul style={{}}>
                      {property.propertyFeatures
                        .split(",")
                        .map((item, index) => (
                          <li key={`property features: ${index}`}>
                            {item.trim()}
                          </li>
                        ))}
                    </ul>
                  </div>
                  <div>
                    <h1
                      style={{
                        color: "rgb(231,52,54)",
                        marginTop: "20px",
                        marginBottom: "12px",
                      }}
                    >
                      Additional information
                    </h1>
                    <ul style={{ marginBottom: "40px" }}>
                      {property.additionalInformation
                        .split(",")
                        .map((item, index) => (
                          <li key={`additonal information: ${index}`}>
                            {item.trim()}
                          </li>
                        ))}
                    </ul>
                  </div>
                </>
              ) : (
                <>
                  <SecondaryButton
                    onClick={showMorePropertyDetails}
                    displayText="Show more"
                    width={"18%"}
                    height={"40px"}
                    marginTop={"14px"}
                    marginBottom={"14px"}
                  />
                </>
              )}
            </propertydetails>

            <agentcontactdetails
              className={Styles.agentContactDetailsContainer}
            >
              <div className={Styles.agentContactDetails}>
                <div className={Styles.agentImageContainer}>
                  <img
                    src={AgentPhoto}
                    alt="Property agent"
                    className={Styles.agentPhoto}
                  />
                </div>
                <div
                  className={
                    Styles.agentNameRoleBookViewingMakeEnquiryContainer
                  }
                >
                  <div className={Styles.agentNameAndRole}>
                    <p style={{ fontWeight: "bold", fontSize: "18px" }}>
                      Penny Rose
                    </p>
                    <p>Residential Rentals</p>
                  </div>
                  <div className={Styles.bookViewingEnquireButtons}>
                    <SecondaryButton
                      displayText="Book a viewing"
                      width={"45%"}
                      height={"40px"}
                      onClick={() => setContactAgenctPopup(true)}
                    />
                    <BookAViewingPopup
                      trigger={contactAgentPopup}
                      setTrigger={setContactAgenctPopup}
                    />

                    <PrimaryButton
                      displayText="Enquire"
                      width={"45%"}
                      height={"40px"}
                      onClick={() => setEnquirePopup(true)}
                    />
                    <EnquirePopup
                      trigger={enquirePopup}
                      setTrigger={setEnquirePopup}
                    />
                  </div>
                </div>
              </div>
            </agentcontactdetails>
          </propertydetailscontainer>
        </>
      ))}
      <Footer />
    </div>
  );
}

export default ChosenPropertyListing;
