import React from "react";
import Styles from "./BookAViewingPopup.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import PrimaryButton from "../../buttons/PrimaryButton";

function ContactAgentPopup(props) {
  // ------------------------------------- CHECK T&C's HAVE BEEN AGREED TO ---------------------------------------
  const [
    contactAgentPopupCheckboxSelected,
    SetContactAgentPopupCheckboxSelected,
  ] = useState(false);

  const hangleTermsAndConditionsCheckboxChange = () => {
    SetContactAgentPopupCheckboxSelected(!contactAgentPopupCheckboxSelected);
  };
  // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  // --------------------------- CHECK BOOKING DATE AND TIME HAVE BEEN SELECTED ----------------------------------
  const [bookingDateSelected, setBookingDateSelected] = useState(false);
  const [bookingTimeSelected, setBookingTimeSelected] = useState(false);
  const [bookingDateAndTimeSelected, setBookingDateAndTimeSelected] =
    useState(false);

  const handleBookingDateChange = () => {
    setBookingDateSelected(!bookingDateSelected);
  };

  const handleBookingTimeChange = () => {
    setBookingTimeSelected(!bookingTimeSelected);
  };

  useEffect(() => {
    if (bookingDateSelected && bookingTimeSelected) {
      setBookingDateAndTimeSelected(true);
    } else {
      setBookingDateAndTimeSelected(false);
    }
  }, [bookingDateSelected, bookingTimeSelected]);
  // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  // -------------------------------------- REFRESH PAGE WHEN SEND BUTTON CLICKED --------------------------------
  const [sendButtonClicked, setSendButtonClicked] = useState(false);

  useEffect(() => {
    if (sendButtonClicked) {
      window.location.reload();
    }

    setSendButtonClicked(false);
  }, [sendButtonClicked]);

  const handleSendButtonClick = () => {
    setSendButtonClicked(true);
  };
  // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

  return props.trigger ? (
    <div className={Styles.popup}>
      <div className={Styles.popupInner}>
        {/* ------------------------------------------------ CLOSE POPUP WINDOW ICON ------------------------------------------ */}
        <FontAwesomeIcon
          icon={faXmark}
          className={Styles.closeButton}
          onClick={() => props.setTrigger(false)}
        ></FontAwesomeIcon>
        {/* ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */}
        <div className={Styles.popupContainer}>
          <div className={Styles.popupContactAgentFormContainer}>
            {/* ---------------------------------------- BOOK A VIEWING POPUP HEADER --------------------------------------------- */}
            <div className={Styles.popupContactAgentFormHeader}>
              <h1>Book a viewing</h1>
              <p>Select a time and date to view the property</p>
            </div>
            {/* ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */}
            {/* ---------------------------------------- BOOK A DATE CONTAINER ------------------------------------------------- */}
            <div className={Styles.bookDateContainer}>
              <h3>Available date</h3>
              <div className={Styles.popupTermsAndConditionsCheckBox}>
                <input
                  type="checkbox"
                  id="bookingDate"
                  name="date"
                  onChange={() => {
                    handleBookingDateChange();
                  }}
                />
                <label htmlFor="bookingDate">day/month/year</label>
              </div>
            </div>
            {/* ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */}
            {/* ---------------------------------------- BOOK A TIME CONTAINER ------------------------------------------------- */}
            <div className={Styles.bookTimeContainer}>
              <h3>Available time</h3>
              <div className={Styles.popupTermsAndConditionsCheckBox}>
                <input
                  type="checkbox"
                  name="time"
                  id="bookingTime"
                  onChange={() => {
                    handleBookingTimeChange();
                  }}
                />
                <label htmlFor="bookingTime">time</label>
              </div>
            </div>
            {/* ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */}
            {/* ------------------------- IF DATE AND TIME SELECTED, SHOW T&Cs CHECKBOX ----------------------------------------- */}
            <div>
              {bookingDateAndTimeSelected && (
                <div className={Styles.popupTermsAndConditionsCheckBox}>
                  <input
                    type="checkbox"
                    id="agreeToTerms"
                    onChange={hangleTermsAndConditionsCheckboxChange}
                  />
                  <label htmlFor="agreeToTerms">
                    I agree to the
                    <span style={{ color: "red" }}>
                      {" "}
                      Property Management Terms and Conditions
                    </span>
                  </label>
                </div>
              )}
            </div>
            {/* ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */}
            {/* ----------------------- IF T&Cs CHECKBOX IS TICKED, SHOW 'CONFIRM BOOKING' BUTTON  ------------------------------ */}
            <div className={Styles.bookViewingButtonContainer}>
              {contactAgentPopupCheckboxSelected && (
                <PrimaryButton
                  displayText="Confirm booking"
                  width={"100%"}
                  height={"40px"}
                  marginTop={"6%"}
                  onClick={handleSendButtonClick}
                />
              )}
            </div>
            {/* ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */}
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default ContactAgentPopup;
