import React from "react";
import Styles from "./ChosenPropertyListing.module.scss"
import Footer from "../../common-components/footer/Footer";
import Navbar from "../../common-components/navbar/Navbar";

function ChosenPropertyListing() {
  return (
    <div className={Styles.chosenPropertyListingContainer}>
      <Navbar />
      <p>Chosen Property listings page</p>
      <Footer />
    </div>
  );
}

export default ChosenPropertyListing;
