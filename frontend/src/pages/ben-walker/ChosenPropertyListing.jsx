import React from "react";
import Styles from "./ChosenPropertyListing.module.scss"
import Footer from "../../common-components/footer/Footer";
import Navbar from "../../common-components/navbar/Navbar";

function ChosenPropertyListing() {
  return (
    <div className={Styles.chosenPropertyListingContainer}>
      <Navbar />
      <propertyimages className={Styles.propertyImagesContainer}>
          <p style={{color: "red"}} className={Styles.mainImageContainer}><img className={Styles.mainImage}src={process.env.PUBLIC_URL + "/images/3-amano-avenue-epsom-auckland/2081897491.jpg"} alt="Main of property"/></p>
          <p style={{color: "red"}} className={Styles.additionalImageContainer}><img className={Styles.additionalImage} src={process.env.PUBLIC_URL + "/images/3-amano-avenue-epsom-auckland/2081897497.jpg"} alt="Main of property"/></p>
          <p style={{color: "red"}} className={Styles.additionalImageContainer}><img className={Styles.additionalImage} src={process.env.PUBLIC_URL + "/images/3-amano-avenue-epsom-auckland/2081897504.jpg"} alt="Main of property"/></p>
          <p style={{color: "red"}} className={Styles.additionalImageContainer}><img className={Styles.additionalImage} src={process.env.PUBLIC_URL + "/images/3-amano-avenue-epsom-auckland/2081897505.jpg"} alt="Main of property"/></p>
          <p style={{color: "red"}} className={Styles.additionalImageContainer}><img className={Styles.additionalImage} src={process.env.PUBLIC_URL + "/images/3-amano-avenue-epsom-auckland/2081897507.jpg"} alt="Main of property"/></p>

      </propertyimages>
      <Footer />
    </div>
  );
}

export default ChosenPropertyListing;
