import React from "react";
import Styles from "./ChosenPropertyListing.module.scss";
import Footer from "../../common-components/footer/Footer";
import Navbar from "../../common-components/navbar/Navbar";
import Share from "../../assets/icons/Heart.png";
import Heart from "../../assets/icons/Share.png";
import CarDefault from "../../assets/icons/CarDefault.png";
import BathroomDefault from "../../assets/icons/BathroomDefault.png";
import BedroomDefault from "../../assets/icons/BedroomDefault.png";
import PetsDefault from "../../assets/icons/PetsDefault.png";
// import SecondaryButton from "../../common-components/buttons/SecondaryButton";

function ChosenPropertyListing() {
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
              <img src={CarDefault} alt="Like this page" />
              <img src={BedroomDefault} alt="Like this page" />
              <img src={BathroomDefault} alt="Like this page" />
              <img src={PetsDefault} alt="Like this page" />
            </div>
            <div>
              <img src={Heart} alt="Like this page" />
              <img src={Share} alt="Share this page" />
            </div>
          </propertyicons>

          <p>Property address</p>
          <p>Weekly rent</p>
          <p>Listing title</p>
          <p>Listing description</p>
          <p>Property address</p>

          <button className={Styles.showMoreButton}>Show more</button>
        </propertydetails>

        <agentcontactdetails className={Styles.agentContactDetails}>
          <p>agent contact details</p>
        </agentcontactdetails>
      </propertydetailscontainer>
      <Footer />
    </div>
  );
}

export default ChosenPropertyListing;
