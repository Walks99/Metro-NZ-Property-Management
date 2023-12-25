import React from "react";
import { useState } from "react";
import Styles from "./ChosenPropertyListing.module.scss";
import Footer from "../../common-components/footer/Footer";
import Navbar from "../../common-components/navbar/Navbar";
import Share from "../../assets/icons/Heart.png";
import Heart from "../../assets/icons/Share.png";
import CarDefault from "../../assets/icons/CarDefault.png";
import BathroomDefault from "../../assets/icons/BathroomDefault.png";
import BedroomDefault from "../../assets/icons/BedroomDefault.png";
import PetsDefault from "../../assets/icons/PetsDefault.png";
import PrimaryButton from "../../common-components/buttons/PrimaryButton";
import SecondaryButton from "../../common-components/buttons/SecondaryButton";
import AgentPhoto from "../../assets/agent-photos/agentPhoto.jpg";
import PopupSkeleton from "../../common-components/popups/bookAViewing/BookAViewingPopup";
// import { useParams } from "react-router-dom";

function ChosenPropertyListing() {
  // const [properties, setProperties] = useState([])
  // const { id } = useParams();
  const [morePropertyDetails, setMorePropertyDetails] = useState(false);
  const [contactAgentPopup, setContactAgenctPopup] = useState(false);
  // const [bookNowPopup, setBookNewPopup] = useState(false);
  // const [
  //   contactAgentPopupCheckboxSelected,
  //   SetContactAgentPopupCheckboxSelected,
  // ] = useState(false);

  const showMorePropertyDetails = () => {
    setMorePropertyDetails(!morePropertyDetails);
  };

  // const [formData, setFormData] = useState({
  //   fullName: "",
  //   email: "",
  //   phone: "",
  //   message: "",
  // });

  // const [allFieldsFilled, setAllFieldsFilled] = useState(false);

  // const handleInputChange = (fieldName, value) => {
  //   setFormData((prevFormData) => ({
  //     ...prevFormData,
  //     [fieldName]: value,
  //   }));
  // };

  // const checkAllFieldsFilled = () => {
  //   const filled = Object.values(formData).every(
  //     (value) => value.trim() !== ""
  //   );
  //   setAllFieldsFilled(filled);
  // };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(
  //         `http://localhost:4000/api/retrieveproperties/${id}`
  //       );
  //       const requestedProperty = await response.json();
  //       setProperties(requestedProperty);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };
  //   fetchData();
  // }, [id]);

  return (
    <div className={Styles.chosenPropertyListingContainer}>
      <Navbar />
      <propertyimages className={Styles.propertyImagesContainer}>
        <img
          className={Styles.mainImage}
          src={
            process.env.PUBLIC_URL +
            "/images/3-amano-avenue-epsom-auckland/2081897491.jpg"
          }
          alt="Main of property"
        />
        <img
          className={Styles.additionalImage}
          src={
            process.env.PUBLIC_URL +
            "/images/3-amano-avenue-epsom-auckland/2081897497.jpg"
          }
          alt="Main of property"
        />
        <img
          className={Styles.additionalImage}
          src={
            process.env.PUBLIC_URL +
            "/images/3-amano-avenue-epsom-auckland/2081897504.jpg"
          }
          alt="Main of property"
        />
        <img
          className={Styles.additionalImage}
          src={
            process.env.PUBLIC_URL +
            "/images/3-amano-avenue-epsom-auckland/2081897505.jpg"
          }
          alt="Main of property"
        />
        <img
          className={Styles.additionalImage}
          src={
            process.env.PUBLIC_URL +
            "/images/3-amano-avenue-epsom-auckland/2081897507.jpg"
          }
          alt="Main of property"
        />
      </propertyimages>

      <propertydetailscontainer className={Styles.propertyDetailsContainer}>
        <propertydetails className={Styles.propertyDetails}>
          <propertyicons className={Styles.propertyIcons}>
            <div>
              <img
                src={CarDefault}
                alt="Like this page"
                className={Styles.bedBathShowCarPetsIcons}
              />
              <img
                src={BedroomDefault}
                alt="Like this page"
                className={Styles.bedBathShowCarPetsIcons}
              />
              <img
                src={BathroomDefault}
                alt="Like this page"
                className={Styles.bedBathShowCarPetsIcons}
              />
              <img
                src={PetsDefault}
                alt="Like this page"
                className={Styles.bedBathShowCarPetsIcons}
              />
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
            15 Purple Street, Auckland
          </p>
          <p
            style={{ fontWeight: "bold", fontSize: "22px", marginTop: "10px" }}
          >
            $480/week
          </p>
          <h1 style={{ color: "rgb(231,52,54)", marginTop: "20px" }}>
            Gorgeous Two Bedrooms
          </h1>
          <p style={{ marginTop: "20px" }}>
            Gelatum, deliciae frigidissimae, est dulce alimentum quod pluribus
            saeculis in toto mundo amatur. Gelati varietates sunt innumerae, ex
            lacte factae, suco fructuum vel aromatibus additis, et in multis
            coloribus et figuris apparere possunt. Gustus ab vaniglia et cacao
            ad fructus silvestres vel mentam variare possunt, ut quisque suum
            favoritum reperiat.{" "}
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
                  <li>item</li>
                  <li>item</li>
                  <li>item</li>
                  <li>item</li>
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
                  <li>item</li>
                  <li>item</li>
                  <li>item</li>
                  <li>item</li>
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

        <agentcontactdetails className={Styles.agentContactDetailsContainer}>
          <div className={Styles.agentContactDetails}>
            <div className={Styles.agentImageContainer}>
              <img
                src={AgentPhoto}
                alt="Property agent"
                className={Styles.agentPhoto}
              />
            </div>
            <div
              className={Styles.agentNameRoleBookViewingMakeEnquiryContainer}
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
                <PopupSkeleton
                  trigger={contactAgentPopup}
                  setTrigger={setContactAgenctPopup}
                />

                <PrimaryButton
                  displayText="Enquire"
                  width={"45%"}
                  height={"40px"}
                  onClick={() => setContactAgenctPopup(!contactAgentPopup)}
                />
                {/* <Popup trigger={bookNowPopup} setTrigger={setBookNewPopup}>
                  <h1>BOOK NOW POPUP</h1>
                </Popup> */}
              </div>
            </div>
          </div>
        </agentcontactdetails>
      </propertydetailscontainer>
      <Footer />
    </div>
  );
}

export default ChosenPropertyListing;
