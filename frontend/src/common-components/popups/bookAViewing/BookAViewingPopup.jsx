import React from "react";
import Styles from "./BookAViewingPopup.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import PrimaryButton from "../../buttons/PrimaryButton";
import AgentPhoto from "../../../assets/agent-photos/agentPhoto.jpg";

function ContactAgentPopup(props) {
// ---------------------------------------------- STATE VARIABLES ----------------------------------------------
  const [contactAgentPopupCheckboxSelected, SetContactAgentPopupCheckboxSelected] = useState(false);
  const [allFieldsFilled, setAllFieldsFilled] = useState(false);
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// --------------------------------------------------- LOGIC ---------------------------------------------------
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });


  const handleInputChange = (fieldName, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [fieldName]: value,
    }));
  };

  const checkAllFieldsFilled = () => {
    const filled = Object.values(formData).every(
      (value) => value.trim() !== ""
    );
    setAllFieldsFilled(filled);
  };
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

  return props.trigger ? (
    <div className={Styles.popup}>
      <div className={Styles.popupInner}>
        <FontAwesomeIcon
          icon={faXmark}
          className={Styles.closeButton}
          onClick={() => props.setTrigger(false)}
        ></FontAwesomeIcon>
        <div className={Styles.popupContainer}>
          <div className={Styles.popupAgentImageAndInfoContainer}>
            <div className={Styles.popupAgentImageContainer}>
              <img
                src={AgentPhoto}
                alt="Property agent"
                className={Styles.popupAgentPhoto}
              />
            </div>
            <div className={Styles.popupAgentinfoContainer}>
              <p style={{ fontWeight: "bold", fontSize: "18px" }}>Penny Rose</p>
              <p style={{ fontSize: "14px" }}>Residential Rentals</p>
              <button className={Styles.popupCallAgentButton}>
                +64 28 934 334
              </button>
            </div>
          </div>
          <div className={Styles.popupContactAgentFormContainer}>
            <div className={Styles.popupContactAgentFormField}>
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                placeholder="Text"
                onChange={(e) => {
                  handleInputChange("fullName", e.target.value);
                  checkAllFieldsFilled();
                }}
              />
            </div>
            <div className={Styles.popupContactAgentFormField}>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                placeholder="Text"
                onChange={(e) => {
                  handleInputChange("email", e.target.value);
                  checkAllFieldsFilled();
                }}
              />
            </div>
            <div className={Styles.popupContactAgentFormField}>
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                id="phone"
                placeholder="Text"
                onChange={(e) => {
                  handleInputChange("phone", e.target.value);
                  checkAllFieldsFilled();
                }}
              />
            </div>
            <div className={Styles.popupContactAgentFormField}>
              <label htmlFor="message">Message</label>
              <input
                type="text"
                id="message"
                placeholder="Text"
                className={Styles.messageBox}
                onChange={(e) => {
                  handleInputChange("message", e.target.value);
                  checkAllFieldsFilled();
                }}
              />
            </div>
            <div>
              {allFieldsFilled && (
                <div className={Styles.popupTermsAndConditionsCheckBox}>
                  <input
                    type="checkbox"
                    id="agreeToTerms"
                    onChange={() =>
                      SetContactAgentPopupCheckboxSelected(
                        !contactAgentPopupCheckboxSelected
                      )
                    }
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
            <div className={Styles.bookViewingButtonContainer}>
              {contactAgentPopupCheckboxSelected && (
                <PrimaryButton
                  displayText="Send"
                  width={"100%"}
                  height={"40px"}
                  marginTop={"6%"}
                  onClick={() => props.setTrigger(false)}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default ContactAgentPopup;
