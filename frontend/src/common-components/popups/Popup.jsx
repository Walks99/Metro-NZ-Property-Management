import React from 'react'
import Styles from "./Popup.module.scss"
// import { Icon } from '@iconify/react';
// import cross1 from '@iconify/icons-radix-icons/cross-1';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function ContactAgentPopup(props) {
  return (props.trigger) ? (
    <div className={Styles.popup}>
        <div className={Styles.popupInner}>
            <FontAwesomeIcon icon={faXmark} className={Styles.closeButton} onClick={() => props.setTrigger(false)} ></FontAwesomeIcon>
            {/* <Icon icon={cross1} className={Styles.closeButton} onClick={() => props.setTrigger(false)} ></Icon> */}
            { props.children }
        </div>
    </div>
  ) : "";
}

export default ContactAgentPopup