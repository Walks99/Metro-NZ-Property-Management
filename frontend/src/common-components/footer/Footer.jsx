import React from "react";
import Styles from "./Footer.module.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCopyright } from "@fortawesome/free-regular-svg-icons"; // Import the regular copyright icon

function Footer() {
  return (
    <div className={Styles.footer}>
      <p>
        {/* <FontAwesomeIcon icon={faCopyright} className={Styles.copyRightIcon} /> */}
        Footer
      </p>
    </div>
  );
}

export default Footer;